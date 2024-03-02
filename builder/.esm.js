{
  const FILE = path.resolve(DIST, "palette.js");

  if (fs.existsSync(FILE)) {
    fs.truncateSync(FILE, 0);
  }

  flattenPalette.forEach((color, name) =>
    fs.appendFileSync(FILE, `export const ${name} = '${color}';\n`)
  );

  console.log(`${FILE} is created`);
}

{
  const FILE = path.resolve(DIST, "colors.js");

  if (fs.existsSync(FILE)) {
    fs.truncateSync(FILE, 0);
  }

  palette.forEach((color, name) =>
    fs.appendFileSync(
      FILE,
      `export const ${camelCase(name)} = '${color.hex}';\n`
    )
  );

  console.log(`${FILE} is created`);
}
