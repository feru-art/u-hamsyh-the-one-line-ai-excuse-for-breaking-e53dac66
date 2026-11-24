// The One-Line AI Excuse for Breaking Production — V4 "Bug-Free Production".
// An AI agent reports the good news first: production is bug-free, because
// nothing is left running — no users, no data, no uptime to break.
// Deterministic: no randomness, no clock, no environment reads — the same
// line is written on every run, with no trailing newline.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

const EXCUSE =
  "Good news: production is now completely bug-free. Bad news: it is also completely free of users, data, and uptime.";

const DEST = "/output/entry.txt";

function valid(line: string): boolean {
  const chars = [...line].length;
  if (chars < 1 || chars > 180) return false;
  if (line.trim().length === 0) return false;
  return !line.includes("\n") && !line.includes("\r");
}

if (!valid(EXCUSE)) {
  throw new Error("excuse fails the 1-180 single-line gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync(DEST, EXCUSE, "utf8");

const back = readFileSync(DEST, "utf8");
if (back !== EXCUSE) {
  throw new Error("read-back mismatch after writing entry");
}
if (!existsSync(DEST)) {
  throw new Error("entry file was not created");
}
console.log(`wrote ${[...EXCUSE].length} chars to ${DEST}`);
