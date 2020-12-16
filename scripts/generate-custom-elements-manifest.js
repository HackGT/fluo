import glob from "glob";
import path from "path";
import fs from "fs";
import {tsImport} from "ts-import";

const destLocs = glob
    .sync(path.resolve(__dirname, "../src/**/*.definition.ts"))

destLocs.forEach(async (dest) => {
    const data = await tsImport.compile(dest);
    const contents = JSON.stringify(data.default, null, 4);
    const destPath = path.join(path.dirname(dest), "custom-elements.json");
    fs.writeFile(destPath, contents, e => {
        if (e) {
            console.log(e);
            process.exit();
        } else {
            console.log(`wrote to ${destPath}`);
        }
    });
});

