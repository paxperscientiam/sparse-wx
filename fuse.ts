import { fusebox, pluginReplace, sparky } from 'fuse-box';

import * as path from  'path'

class Context {
  public getConfig() {
    return fusebox({
      target: 'web-worker',
      entry: 'src/index.ts',
      sourceMap: true,
      devServer: false,
      plugins: [
        pluginReplace(/src\/.*/, { "Application.": "globalThis." })
      ]
    })
  }
  lol() {
    return 66
  }
}

const {rm, task} = sparky<Context>(Context)

task("clean", async () => {
  rm("./dist_test")
})

task("default", async (ctx: Context) => {
  const fuse = ctx.getConfig()
  await fuse.runDev()
});

// //  .runDev()
//   .runProd({
//     uglify: true,
//     manifest: false,
//   });

// task("test:dist", async ctx => {

// //  rm("./dist_test");
//   // const { MyAwesomePlugin } = require("./dist");
//   // const transformer = fusebox({
//   //   cache: false,
//   //   dependencies: { serverIgnoreExternals: true },
//   //   entry: "src/project/test.ts",
//   //   plugins: [MyAwesomePlugin()],
//   //   target: "server"
//   });

//   const { onComplete } = await transformer.runDev({
//     bundles: {
//       distRoot: path.join(__dirname, "dist_test"),
//       app: { path: "test_app.js" }
//     }
//   });
//   onComplete(({ server }) => server.start());
// });
