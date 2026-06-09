export const project = {
  slug: "ai-knowledge-base-agent",
  title: "AI Knowledge Base Agent",
  description: "Agent that answers questions from internal documentation.",
  features: [
  "Document ingestion",
  "Chunk indexing",
  "Semantic search",
  "Answer drafting",
  "Citation output",
  "Feedback logging"
  ]
};

export function summarizeProject() {
  return `${project.title}: ${project.features.length} planned features`;
}
