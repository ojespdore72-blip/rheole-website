const sharp = require("sharp");
const path = require("path");

const inputPath = path.join(__dirname, "public", "rheole-app-icon-cropped.png");
const outputPath = path.join(__dirname, "public", "rheole-app-icon-small.png");

async function resizeIcon() {
  try {
    const metadata = await sharp(inputPath).metadata();
    console.log("Original size:", metadata.width, "x", metadata.height);

    const newSize = Math.round(metadata.width * 0.8); // 80% of original
    const paddingX = Math.round((metadata.width - newSize) / 2);
    const paddingY = Math.round((metadata.height - newSize) / 2);
    
    await sharp(inputPath)
      .resize(newSize, newSize)
      .extend({
        top: paddingY,
        bottom: paddingY,
        left: paddingX,
        right: paddingX,
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .toFile(outputPath);
      
    console.log("Created smaller icon at", outputPath);
  } catch (e) {
    console.error(e);
  }
}

resizeIcon();
