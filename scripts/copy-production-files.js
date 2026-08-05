const { cpSync, existsSync, readdirSync } = require("fs");
const { join } = require("path");

const projectRoot = process.cwd();
const publicDir = join(projectRoot, "public");
const outDir = join(projectRoot, "out");

if (!existsSync(outDir)) {
  throw new Error("Build output not found. Run `npm run build` before postbuild.");
}

const hiddenFiles = readdirSync(publicDir).filter(
  (name) => name.startsWith(".") && name !== ".DS_Store"
);

if (hiddenFiles.length === 0) {
  console.log("No hidden public files found to copy to out.");
  process.exit(0);
}

hiddenFiles.forEach((fileName) => {
  const src = join(publicDir, fileName);
  const dest = join(outDir, fileName);
  cpSync(src, dest, { force: true });
  console.log(`Copied ${fileName} to out/${fileName}`);
});

console.log(`Copied ${hiddenFiles.length} hidden public file(s) into out.`);
