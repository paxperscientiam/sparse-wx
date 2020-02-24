import { fusebox } from "fuse-box"

fusebox({
  entry: "src/index.ts",
  cache: false,
  output: "dist",

  target: "web-worker",
  useSingleBundle: true,

  codeSplitting: {
    useHash: false,
  },
  webIndex: false,

  devServer: false ,
  hmr: false, // not working ... possibly confused by devServer
  watch: {
    ignored: [/flycheck/i],
  },
})
// .runDev({
//   bundles: {
//     distRoot: "dist",
//   }
// })
  .runProd({
    screwIE: false,
    target: "ES6",
    uglify: false,
  })
