{
  const FILE = path.resolve(DIST, "colors.css");
  const PREFIX = "--clr-";

  if (fs.existsSync(FILE)) {
    fs.truncateSync(FILE, 0);
  }

  fs.appendFileSync(FILE, ":root {");
  palette.forEach((color, name) =>
    fs.appendFileSync(FILE, `\n\t${PREFIX}${kebabCase(name)}: ${color.hex};`)
  );
  fs.appendFileSync(FILE, "\n}");

  console.log(`${FILE} is created`);
}

{
  const FILE = path.resolve(DIST, "palette.css");
  const PREFIX = "--clr-";

  if (fs.existsSync(FILE)) {
    fs.truncateSync(FILE, 0);
  }

  fs.appendFileSync(FILE, ":root {");
  palette.forEach((color, name) => {
    fs.appendFileSync(FILE, `\n\n\t/* ${startCase(name)} */\n`);
    fs.appendFileSync(FILE, `\n\t${PREFIX}${kebabCase(name)}: ${color.hex};`);
    color.tones.forEach((color, index) => {
      fs.appendFileSync(
        FILE,
        `\n\t${PREFIX}${kebabCase(name)}-${toneKeys[index]}: ${color.hex};`
      );
      if (color.hasOwnProperty("rgba")) {
        fs.appendFileSync(
          FILE,
          `\n\t${PREFIX}${kebabCase(name)}-${toneKeys[index]}-tp: ${
            color.rgba
          };`
        );
      }
    });
    color.accents.forEach((color, index) => {
      fs.appendFileSync(
        FILE,
        `\n\t${PREFIX}${kebabCase(name)}-${accentKeys[index]}: ${color.hex};`
      );
    });
  });
  fs.appendFileSync(FILE, "\n}");

  console.log(`${FILE} is created`);
}
