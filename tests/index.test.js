import assert from "node:assert/strict";
import { test } from "node:test";
import { project, summarizeProject } from "../src/index.js";

test("AI Knowledge Base Agent exposes project metadata", () => {
  assert.equal(project.slug, "ai-knowledge-base-agent");
  assert.ok(project.features.length >= 3);
  assert.match(summarizeProject(), /planned features/);
});
