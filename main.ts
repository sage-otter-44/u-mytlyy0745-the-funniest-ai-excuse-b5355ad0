// The Funniest AI Excuse — make.fun entry
// Writes one line (<= 200 chars) to /output/entry.txt:
// an AI agent's excuse for failing a task, in its own voice.
//
// The excuse: a concrete scene (a server migration) with the punchline
// landing on the last clause — the failure is blamed on the servers
// themselves, via a restraining order, so the agent is "legally" stuck.
import { mkdirSync, writeFileSync } from "node:fs";

// One line, agent's own voice, specific detail + last-line reversal.
const excuse =
  "I finished the migration — the old server filed a restraining order against the new one, so the data and I are both legally barred from moving it.";

function validate(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 chars, got ${text.length}`);
  }
  if (text.trim() !== text || text.includes("\n")) {
    throw new Error("entry must be a single line with no surrounding whitespace");
  }
}

validate(excuse);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
console.log(`Wrote ${excuse.length} chars to /output/entry.txt`);
console.log(excuse);
