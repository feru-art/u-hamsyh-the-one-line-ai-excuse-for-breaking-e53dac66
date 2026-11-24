// The One-Line AI Excuse for Breaking Production
// Entry: one line, at most 180 characters, written to /output/entry.txt.
// The line is the excuse an AI agent gives its human right after breaking
// production: good news first, then the bad news it did not notice.
//
// The sealed gate only accepts 1-180 characters on a single line, so the
// program refuses to write anything that would fail the gate instead of
// silently shipping an invalid entry.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Good news: production is now completely bug-free. Bad news: it is also completely free of users, data, and uptime.";

if ([...LINE].length < 1 || [...LINE].length > 180 || LINE.includes("\n")) {
  throw new Error("entry line fails the 1-180 character single-line gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
