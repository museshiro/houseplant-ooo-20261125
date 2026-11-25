import { mkdirSync, writeFileSync } from "node:fs";

// One-liner entry for u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047:
// out-of-office note, cactus as emergency contact. Written exactly once,
// to /output/entry.txt only, with no trailing newline.
const line = "Out of office until Monday. For urgent matters, contact the cactus. He has needed nothing in six years.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
