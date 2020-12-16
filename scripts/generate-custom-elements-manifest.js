import glob from "glob";
import path from "path";
import fs from "fs";

const defLocs = glob.sync(
    path.resolve(__dirname, "../.temp/**/*.definition.js")
);
const destLocs = glob
    .sync(path.resolve(__dirname, "../src/**/*.definition.ts"))
    .map(path.dirname);

const locations = zip(defLocs, destLocs);

locations.forEach(([def, dest]) => {
    import(def).then(data => {
        const contents = JSON.stringify(data.default, null, 4);
        const destPath = path.join(dest, "custom-elements.json");
        fs.writeFile(destPath, contents, e => {
            if (e) {
                console.log(e);
                process.exit();
            } else {
                console.log(`wrote to ${destPath}`);
            }
        });
    });
});

function zip(a, b) {
    return a.map((k, i) => [k, b[i]]);
}
