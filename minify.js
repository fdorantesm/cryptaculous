const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const directory = "dist";

function minifyDirectory(dir) {
  fs.readdir(dir, { withFileTypes: true }, (err, entries) => {
    if (err) {
      console.error("Error reading directory:", err);
      return;
    }

    entries.forEach((entry) => {
      const entryPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        console.log(`Entering directory: ${entryPath}`);
        minifyDirectory(entryPath); // Recursively minify files in subdirectory
      } else if (path.extname(entry.name) === ".js") {
        console.log(`Processing file: ${entryPath}`);
        try {
          execSync(
            `terser ${entryPath} --output ${entryPath} --compress --mangle`
          );
          console.log(`${entry.name} minified successfully.`);
        } catch (error) {
          console.error(`Error minifying ${entry.name}:`, error);
        }
      }
    });
  });
}

minifyDirectory(directory);
