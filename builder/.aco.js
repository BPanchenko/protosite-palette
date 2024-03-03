import startCase from "lodash/startCase.js";
import hex2rgb from "hex2rgb";
import path from "path";
import { createAcoFile } from "adobe-aco";

export default function createACO(palette, flattenPalette, dist) {
  const colorsFilePath = path.resolve(dist, "colors.aco");
  const paletteFilePath = path.resolve(dist, "palette.aco");

  const swatches = Array.from(palette.entries()).map(
    ([colorName, paletteColorData]) => {
      const rgb = hex2rgb(paletteColorData.hex).rgb;
      return [rgb, "rgb", startCase(colorName)];
    }
  );

  const acoFile = createAcoFile(swatches);

  console.log(acoFile);
}
