import { writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, 186 characters: a hopeless tech support agent's cheerful,
// useless reply to a desperate customer whose job interview just froze.
// The grader owns the output directory, so this program only writes the
// file inside it and never touches the directory itself.
const text =
  "Your job interview started five minutes ago and your camera just froze mid-sentence — turn it off and on again, and if it comes back, smile like you meant to freeze, that's all I've got.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
writeFileSync(join(outputDir, "entry.txt"), text, "utf8");
