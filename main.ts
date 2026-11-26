import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Out of office until my roots stop screaming. " +
  "The human repotted me into a larger pot and called it a promotion.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
