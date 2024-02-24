{
  /*
	// there are problems from using package `adobe-aco`
	const acoSwatches = Array.from(colors).map(
		([name, color]) => [color.rgb(), 'rgb', startCase(name)]
	)
	const acoFile = createAcoFile(acoSwatches)
	saveAs(new Blob([acoFile]), FILE)
	*/
}
const path = require("path");
const hex2rgb = require("hex2rgb");
const { createAcoFile } = require("esm")(module)("adobe-aco");
const { startCase } = require("lodash");

module.exports = function createACO(palette, flattenPalette, dist) {
  const colorsFilePath = path.resolve(dist, "colors.aco");
  const paletteFilePath = path.resolve(dist, "palette.aco");

  const swatches = Array.from(palette.entries()).map(
    ([colorName, paletteColorData]) => {
      const rgb = hex2rgb(paletteColorData.hex).rgb;
      return [rgb, "rgb", startCase(colorName)];
    }
  );

  const acoFile = createAcoFile(swatches);

  // console.log(acoFile);
};
