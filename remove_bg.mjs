import { removeBackground } from '@imgly/background-removal-node';
import fs from 'fs';

async function main() {
  try {
    const inputPath = 'src/data/logo/logo papua paradise.png';
    const outputPath = 'src/data/logo/logo_transparent.png';
    console.log('Removing background...');
    const blob = await removeBackground(inputPath);
    const buffer = Buffer.from(await blob.arrayBuffer());
    fs.writeFileSync(outputPath, buffer);
    console.log('Done!');
  } catch(e) {
    console.error(e);
  }
}
main();
