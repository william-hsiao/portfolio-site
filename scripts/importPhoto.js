/* eslint-disable @typescript-eslint/no-var-requires, no-console */

const fs = require('fs');
const jimp = require('jimp');
const prompt = require('prompt-sync')();

const LIST_JSON_FILE_PATH = 'src/assets/photography/list.json';
const SIGNATURE_FILE_PATH = 'scripts/signature.png';
const OUTPUT_PATH = (filename) => `src/assets/photography/${filename}`;

const main = async () => {
  const filePath = process.argv[2];
  if (!filePath) {
    console.error('File is required');
  }

  // Read image file
  const image = await jimp.read(filePath);
  const signature = await jimp.read(SIGNATURE_FILE_PATH);

  // Prompt for image information
  const year = prompt('Year: ');
  const month = prompt('Month: ');
  const location = prompt('Location: ');

  const filename = `${year}${month}_${location}`
    .toLowerCase()
    .replace(/ /g, '_');
  const orientation =
    image.bitmap.width > image.bitmap.height ? 'landscape' : 'portrait';

  // Add signature to image
  const imageMinDimension = Math.min(image.bitmap.width, image.bitmap.height);
  const signatureDimension = imageMinDimension * 0.05;
  const margin = imageMinDimension * 0.025;

  signature.resize(signatureDimension, signatureDimension);
  image.composite(
    signature,
    image.bitmap.width - (signatureDimension + margin),
    image.bitmap.height - (signatureDimension + margin),
  );

  // Write image
  image.write(OUTPUT_PATH(`${filename}.jpg`));

  // Create thumbnail
  if (orientation === 'landscape') {
    image.resize(500, jimp.AUTO);
  } else {
    image.resize(jimp.AUTO, 500);
  }
  image.write(OUTPUT_PATH(`${filename}_thumbnail.jpg`));

  // // Write image information to list.json
  const rawListJson = fs.readFileSync(LIST_JSON_FILE_PATH, 'utf8');
  const listJson = rawListJson ? JSON.parse(rawListJson) : [];
  listJson.push({
    year,
    month,
    location,
    orientation,
    filename,
  });
  fs.writeFileSync(LIST_JSON_FILE_PATH, JSON.stringify(listJson));

  console.log('Successfully imported');
};

main();
