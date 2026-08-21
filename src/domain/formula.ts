export type FormulaContext = {
  spellRank: number;
  championLevel: number;
  effects: Record<string, number[]>;
  named: Record<string, number>;
  stats: Record<string, number>;
  targetStats?: Record<string, number>;
  counters?: Record<string, number>;
  conditions: Record<string, boolean>;
};

export type FormulaNode =
  | { type: "literal"; value: number }
  | { type: "effect"; key: string }
  | { type: "named"; key: string }
  | { type: "stat"; key: string; coefficient?: number }
  | { type: "target-stat"; key: string; coefficient?: number }
  | { type: "counter"; key: string; coefficient?: number }
  | { type: "ranked"; values: number[] }
  | { type: "level"; values: number[] }
  | { type: "level-interpolation"; start: number; end: number }
  | { type: "ranked-level-interpolation"; starts: number[]; ends: number[] }
  | { type: "level-table"; values: number[] }
  | { type: "level-breakpoints"; base: number; initialPerLevel: number; breakpoints: Array<{ level: number; perLevel: number }> }
  | { type: "breakpoints"; values: Array<{ level: number; value: number }> }
  | { type: "sum"; nodes: FormulaNode[] }
  | { type: "product"; nodes: FormulaNode[] }
  | { type: "clamp"; node: FormulaNode; min: number; max: number }
  | { type: "min"; nodes: FormulaNode[] }
  | { type: "max"; nodes: FormulaNode[] }
  | { type: "modifier"; node: FormulaNode; add?: number; multiply?: number }
  | { type: "conditional"; condition: string; whenTrue: FormulaNode; whenFalse: FormulaNode };

function ranked(values: number[], rank: number) {
  if (!values.length) return 0;
  return values[Math.max(0, Math.min(values.length - 1, rank - 1))] ?? 0;
}

export function evaluateFormula(node: FormulaNode, context: FormulaContext): number {
  switch (node.type) {
    case "literal": return node.value;
    case "effect": return ranked(context.effects[node.key] ?? [], context.spellRank);
    case "named": return context.named[node.key] ?? 0;
    case "stat": return (context.stats[node.key] ?? 0) * (node.coefficient ?? 1);
    case "target-stat": return (context.targetStats?.[node.key] ?? 0) * (node.coefficient ?? 1);
    case "counter": return (context.counters?.[node.key] ?? 0) * (node.coefficient ?? 1);
    case "ranked": return ranked(node.values, context.spellRank);
    case "level": {
      if (!node.values.length) return 0;
      if (node.values.length === 2) {
        const ratio = Math.max(0, Math.min(17, context.championLevel - 1)) / 17;
        return node.values[0] + (node.values[1] - node.values[0]) * ratio;
      }
      return ranked(node.values, context.championLevel);
    }
    case "level-interpolation": {
      const level = Math.max(1, Math.min(18, context.championLevel));
      return node.start + (node.end - node.start) * (level / 18);
    }
    case "ranked-level-interpolation": {
      const level = Math.max(1, Math.min(18, context.championLevel));
      const start = ranked(node.starts, context.spellRank);
      const end = ranked(node.ends, context.spellRank);
      return start + (end - start) * (level / 18);
    }
    case "level-table": {
      const level = Math.max(1, context.championLevel);
      return node.values[level] ?? node.values[level - 1] ?? node.values.at(-1) ?? 0;
    }
    case "level-breakpoints": {
      const level = Math.max(1, context.championLevel);
      const changes = new Map(node.breakpoints.map((entry) => [entry.level, entry.perLevel]));
      let value = node.base;
      let perLevel = node.initialPerLevel;
      for (let current = 2; current <= level; current += 1) {
        perLevel = changes.get(current) ?? perLevel;
        value += perLevel;
      }
      return value;
    }
    case "breakpoints": {
      const valid = [...node.values].sort((a, b) => a.level - b.level)
        .filter((entry) => context.championLevel >= entry.level);
      return valid.at(-1)?.value ?? node.values[0]?.value ?? 0;
    }
    case "sum": return node.nodes.reduce((total, child) => total + evaluateFormula(child, context), 0);
    case "product": return node.nodes.reduce((total, child) => total * evaluateFormula(child, context), 1);
    case "clamp": return Math.max(node.min, Math.min(node.max, evaluateFormula(node.node, context)));
    case "min": return Math.min(...node.nodes.map((child) => evaluateFormula(child, context)));
    case "max": return Math.max(...node.nodes.map((child) => evaluateFormula(child, context)));
    case "modifier": return (evaluateFormula(node.node, context) + (node.add ?? 0)) * (node.multiply ?? 1);
    case "conditional": return evaluateFormula(context.conditions[node.condition] ? node.whenTrue : node.whenFalse, context);
  }
}
