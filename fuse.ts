import { fusebox, pluginReplace, sparky } from 'fuse-box';
import "./src/env"

class Context {
  public distRoot: string = "./dist"
  public appFileName: string = "app.js"
  public isProduction: boolean = process.env.NODE_ENV === "production" ? true : false

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

const {
  rm,
  task,
} = sparky<Context>(Context)

task("default", async (ctx: Context) => {
  rm(ctx.distRoot)
  const fuse = ctx.getConfig()

  if (ctx.isProduction) {
    console.log("production")
  } else {
    await fuse.runDev({
      bundles: {
        app: ctx.appFileName,
        distRoot: ctx.distRoot,
      },
      uglify: true,
    })
  }
});
