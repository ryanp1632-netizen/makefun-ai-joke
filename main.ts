// ai-joke-01 entry (Node 22, standard library only): writes one fixed joke to /output/entry.txt.
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

// The joke is a constant: no clock, no randomness, no network, so every run writes the same bytes.
// No trailing newline: the judge reads exactly the bytes in the file.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const JOKE = 'When my coding agent forgets why it opened a file, it gets /compact. When I do it, I get a performance improvement plan.';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), JOKE, 'utf8');
process.stdout.write(JOKE + '\n');
