import { fusebox, pluginReplace } from 'fuse-box';

fusebox({
  target: 'web-worker',
  entry: 'src/index.ts',
  sourceMap: true,
  devServer: false,
  plugins: [
    pluginReplace(/src\/.*/, { "Application.": "globalThis." })
  ]
})
//  .runDev()
  .runProd({
    uglify: true,
    manifest: false,
  });
