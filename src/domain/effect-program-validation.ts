import type { FormulaNode } from "./formula";
import type { ActionDefinition, EffectOperation, EffectProgramDefinition } from "./model";

function formulaErrors(node: FormulaNode, location: string): string[] {
  const errors: string[] = [];
  const finite = (value: number, field: string) => {
    if (!Number.isFinite(value)) errors.push(`${location}.${field} must be finite.`);
  };
  if (node.type === "literal") finite(node.value, "value");
  else if (node.type === "ranked" || node.type === "level" || node.type === "level-table") {
    if (!node.values.length) errors.push(`${location}.values must not be empty.`);
    node.values.forEach((value, index) => finite(value, `values[${index}]`));
  } else if (node.type === "level-interpolation") {
    finite(node.start, "start");
    finite(node.end, "end");
  } else if (node.type === "ranked-level-interpolation") {
    if (!node.starts.length || node.starts.length !== node.ends.length) errors.push(`${location} ranked interpolation arrays must be non-empty and have equal length.`);
    [...node.starts, ...node.ends].forEach((value, index) => finite(value, `interpolation[${index}]`));
  } else if (node.type === "level-breakpoints") {
    finite(node.base, "base");
    finite(node.initialPerLevel, "initialPerLevel");
    node.breakpoints.forEach((entry, index) => {
      finite(entry.level, `breakpoints[${index}].level`);
      finite(entry.perLevel, `breakpoints[${index}].perLevel`);
    });
  } else if (node.type === "breakpoints") {
    if (!node.values.length) errors.push(`${location}.values must not be empty.`);
    node.values.forEach((entry, index) => {
      finite(entry.level, `values[${index}].level`);
      finite(entry.value, `values[${index}].value`);
    });
  } else if (node.type === "sum" || node.type === "product" || node.type === "min" || node.type === "max") {
    if (!node.nodes.length) errors.push(`${location}.nodes must not be empty.`);
    node.nodes.forEach((child, index) => errors.push(...formulaErrors(child, `${location}.nodes[${index}]`)));
  } else if (node.type === "clamp" || node.type === "modifier") {
    errors.push(...formulaErrors(node.node, `${location}.node`));
    if (node.type === "clamp") {
      finite(node.min, "min");
      finite(node.max, "max");
      if (node.min > node.max) errors.push(`${location}.min must not exceed max.`);
    } else {
      if (node.add !== undefined) finite(node.add, "add");
      if (node.multiply !== undefined) finite(node.multiply, "multiply");
    }
  } else if (node.type === "conditional") {
    if (!node.condition) errors.push(`${location}.condition must not be empty.`);
    errors.push(...formulaErrors(node.whenTrue, `${location}.whenTrue`));
    errors.push(...formulaErrors(node.whenFalse, `${location}.whenFalse`));
  } else if ("coefficient" in node && node.coefficient !== undefined) {
    finite(node.coefficient, "coefficient");
  }
  return errors;
}

function operationFormulas(operation: EffectOperation) {
  const formulas: Array<[string, FormulaNode | undefined]> = [];
  if (operation.type === "set-state") formulas.push(["value", operation.value], ["duration", operation.duration]);
  else if (operation.type === "increment-state") formulas.push(["amount", operation.amount], ["maximum", operation.maximum], ["duration", operation.duration]);
  else if (operation.type === "extend-state") formulas.push(["duration", operation.duration]);
  else if (operation.type === "damage") formulas.push(["formula", operation.formula]);
  else if (operation.type === "shield") formulas.push(["formula", operation.formula], ["duration", operation.duration], ["lockoutDuration", operation.lockoutDuration]);
  else if (operation.type === "stat-modifier" || operation.type === "damage-amplifier" || operation.type === "resistance-modifier") formulas.push(["formula", operation.formula], ["duration", operation.duration]);
  else if (operation.type === "cooldown-modifier") formulas.push(["formula", operation.formula]);
  else if (operation.type === "schedule-damage") formulas.push(["formula", operation.formula], ["delay", operation.delay]);
  return formulas.filter((entry): entry is [string, FormulaNode] => Boolean(entry[1]));
}

export function validateEffectPrograms(programs: EffectProgramDefinition[], knownSourceIds?: Set<string>) {
  const errors: string[] = [];
  const programIds = new Set<string>();
  const triggerIds = new Set<string>();
  for (const program of programs) {
    if (!program.id || programIds.has(program.id)) errors.push(`Duplicate or empty effect program ID: ${program.id || "<empty>"}.`);
    programIds.add(program.id);
    if (!program.sourceId || (knownSourceIds && !knownSourceIds.has(program.sourceId))) errors.push(`Effect program ${program.id} has an unknown source ID ${program.sourceId || "<empty>"}.`);
    for (const trigger of program.triggers) {
      if (!trigger.id || triggerIds.has(trigger.id)) errors.push(`Duplicate or empty effect trigger ID: ${trigger.id || "<empty>"}.`);
      triggerIds.add(trigger.id);
      if (!Number.isFinite(trigger.priority)) errors.push(`Effect trigger ${trigger.id} priority must be finite.`);
      for (const condition of trigger.conditions) {
        if (condition.type === "source-id" && knownSourceIds && !knownSourceIds.has(condition.value)) errors.push(`Effect trigger ${trigger.id} references unknown source ID ${condition.value}.`);
      }
      trigger.operations.forEach((operation, operationIndex) => {
        if (operation.type === "cooldown-modifier" && knownSourceIds && !knownSourceIds.has(operation.sourceId)) errors.push(`Effect trigger ${trigger.id} references unknown cooldown source ID ${operation.sourceId}.`);
        for (const [field, formula] of operationFormulas(operation)) errors.push(...formulaErrors(formula, `${program.id}.${trigger.id}.operations[${operationIndex}].${field}`));
      });
    }
  }
  return errors;
}

export function validateActionDefinitions(actions: ActionDefinition[]) {
  const errors: string[] = [];
  const ids = new Set<string>();
  for (const action of actions) {
    if (!action.id || ids.has(action.id)) errors.push(`Duplicate or empty action ID: ${action.id || "<empty>"}.`);
    ids.add(action.id);
    const parameters = new Set<string>();
    for (const parameter of action.parameters) {
      if (!parameter.id || parameters.has(parameter.id)) errors.push(`Action ${action.id} has duplicate or empty parameter ID ${parameter.id || "<empty>"}.`);
      parameters.add(parameter.id);
    }
  }
  return errors;
}
