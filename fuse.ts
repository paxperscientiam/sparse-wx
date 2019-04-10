const { FuseBox, QuantumPlugin, WebIndexPlugin } = require("fuse-box");
const { src, task, exec, context } = require("fuse-box/sparky");
const path = require("path");

context(
    class {
        getConfig() {
            return FuseBox.init({
                homeDir: "Code",
                output: "dist/$name.js",
                cache: false,
                globals: {default : "*"},
                shims: {
                    uri: {
                        source: "node_modules/dist/es5/uri.all.min.js",
                        exports: "URI",
                    },
                },
                plugins: [
                    WebIndexPlugin(),
                    QuantumPlugin({
                        bakeApiIntoBundle: "app",
                        target: "server",
                        containedAPI: true,
                        treeshake: true,
                        uglify: true,
                    }),
                ],
            })
        }
    })

task("default", ["clean"], async (context) => {
    const fuse = context.getConfig();

    fuse.bundle("app").instructions(`!index.ts`).watch()
    //    fuse.bundle("vendor").instructions(`~ index.ts`).watch()

    fuse.dev({
        root: "dist",
    })
    await fuse.run()
});

task("clean", async context => {
    await src("./dist")
        .clean("dist/")
        .exec();
});
