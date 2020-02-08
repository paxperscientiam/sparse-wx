import { fusebox } from "fuse-box"

fusebox({
  entry: "src/index.ts",
  output: "dist",

  cache: false,

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
//.runDev()
  .runProd({
    screwIE: false,
    target: "ES3",
    uglify: false,
  })
