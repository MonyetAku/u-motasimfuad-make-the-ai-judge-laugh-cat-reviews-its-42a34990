// Make the AI Judge Laugh: Cat Reviews Its Human
// Writes a single-line one-star review, in the voice of a house cat
// about its human owner, to $MAKEFUN_OUTPUT_DIR/entry.txt.
//
// The line was chosen by a 5-candidate pairwise tournament judged on
// the kit's five criteria (on-subject cat review, specific complaint,
// unmistakably feline voice, tight wording with a sting in the last
// words, deadpan review shape). Winner (4-0), 117 characters:
// "One star. He parks his laptop on my sunbeam, types through my nap,
// and now his meeting notes just say mmmmmmmmmmmmmm."
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REVIEW =
  "One star. He parks his laptop on my sunbeam, types through my nap, " +
  "and now his meeting notes just say mmmmmmmmmmmmmm.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (!outDir) {
    throw new Error("MAKEFUN_OUTPUT_DIR is not set");
  }
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), REVIEW, "utf8");
}

main();
