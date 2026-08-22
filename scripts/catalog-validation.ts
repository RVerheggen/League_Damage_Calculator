import { createHash } from "node:crypto";

type ReviewedSourceLike = {
  review?: {
    sourceId?: string;
    sourceHash?: string;
    sourceHashes?: Record<string, string>;
    reviewedPatch?: string;
    validationNotes?: string[];
    components?: unknown[];
  };
};

export function reviewRosterSignature(sources: ReviewedSourceLike[]) {
  return createHash("sha256").update(sources
    .map((source) => `${source.review?.sourceId ?? ""}:${source.review?.sourceHash ?? ""}`)
    .sort()
    .join("\n"))
    .digest("hex");
}

export function validateReviewCatalog(
  sources: ReviewedSourceLike[],
  patch: string,
  expectedCount: number,
  expectedSignature: string | undefined,
) {
  const errors: string[] = [];
  if (sources.length !== expectedCount) errors.push(`Expected ${expectedCount} reviewed champion sources but found ${sources.length}.`);
  const ids = new Set<string>();
  for (const source of sources) {
    const review = source.review;
    if (!review?.sourceId || !review.sourceHash || !Object.keys(review.sourceHashes ?? {}).length || !review.reviewedPatch || !review.validationNotes?.length || !review.components?.length) {
      errors.push("A champion source lacks complete review metadata.");
      continue;
    }
    if (ids.has(review.sourceId)) errors.push(`Duplicate champion review source ID: ${review.sourceId}.`);
    ids.add(review.sourceId);
    if (review.reviewedPatch !== patch) errors.push(`Champion review ${review.sourceId} was reviewed for ${review.reviewedPatch}, not ${patch}.`);
  }
  const signature = reviewRosterSignature(sources);
  if (!expectedSignature || signature !== expectedSignature) errors.push(`Champion review signatures are stale for patch ${patch}. Expected ${expectedSignature ?? "a reviewed signature"}, received ${signature}.`);
  return { errors, signature };
}
