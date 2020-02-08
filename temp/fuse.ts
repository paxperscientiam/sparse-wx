import { fusebox } from 'fuse-box';
fusebox({
  entry: 'src/test.ts',
  target: 'web-worker',
  useSingleBundle: true,
  output: "dist",
  codeSplitting: {
    useHash: false,
  },
  webIndex: false,
  devServer: false,
  watch: {
    ignored: [/flycheck/i],
  },
}).runProd({
  target: 'ES3',
  screwIE: true,
  uglify: false,
})
