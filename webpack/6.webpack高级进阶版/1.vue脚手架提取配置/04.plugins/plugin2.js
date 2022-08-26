const { getOptions } = require("loader-utils");
const { validate } = require("schema-utils");
const globby = require("globby");
const path = require("path");
const fs = require("fs");
const util = require("util");
const webpack = require("webpack");
const { RawSource } = webpack.sources;
const readFile = util.promisify(fs.readFile);
const schema = require("./schema");
class Plugins2 {
  constructor(options = {}) {
    validate(schema, options, {
      name: "Plugins2",
    });
    this.options = options;
  }
  apply(complier) {
    complier.hooks.thisCompilation.tap("Plugins2", (compilation) => {
      const { from, ignore } = this.options;
      const to = this.options.to ? this.options.to : ".";
      compilation.hooks.additionalAssets.tapAsync("Plugins2", async (cb) => {
        const context = complier.options.context; //process.cwd()
        const absoluteFrom = path.isAbsolute(from)
          ? from
          : path.resolve(context, from);
        const paths = await globby(absoluteFrom.replace(/\\/g, "/"), {
          ignore,
        });

        // map 遇到 async 不会返回值而且不会等await执行完就会执行后面的 所以用 Promise.all([每个promise]) 就会等每次 return 才往下执行
        const files = await Promise.all(
          paths.map(async (absolutePath) => {
            const data = await readFile(absolutePath);
            const relativePath = path.basename(absolutePath);
            const filename = path.join(to, relativePath);
            return {
              data,
              filename,
            };
          })
        );
        const assets = files.map((file) => {
          const source = new RawSource(file.data);
          return {
            source,
            filename: file.filename,
          };
        });
        assets.forEach((asset) => {
          compilation.emitAsset(asset.filename, asset.source);
        });
        cb();
      });
    });
  }
}
module.exports = Plugins2;
