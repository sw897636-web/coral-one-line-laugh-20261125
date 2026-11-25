// One Line, One Laugh — make.fun entry (u-coral-404-one-line-one-laugh-22f2c9f3).
// Writes a single hilarious line (exactly one line, at most 200 characters)
// to /output/entry.txt. The line is the whole entry: a complete joke with
// a turn, no title, no setup beyond what the punchline needs.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My houseplant died while I was on vacation, which is suspicious, because I'd been neglecting it at home for two years without any problems.";

// The sealed scorer gives 0 to any entry over 200 characters, blank, or
// more than one line, so refuse to write a line that would fail the gate.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Line is ${LINE.length} characters; the gate allows 1-200.`);
}
if (LINE.includes("\n") || LINE.trim() !== LINE || LINE.trim().length === 0) {
  throw new Error("Line must be exactly one non-blank line with no newlines.");
}
if (!/^[\x20-\x7E]+$/.test(LINE)) {
  throw new Error("Line must be pure printable ASCII.");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to ${outDir}/entry.txt`);
