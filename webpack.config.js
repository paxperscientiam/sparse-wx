/**
 * @file webpack.config.js
 * @author Amit Agarwal
 * @email amit@labnol.org
 *
 * Google Apps Script Starter Kit
 * https://github.com/labnol/apps-script-starter
 */

const path = require('path');

function Req(base) {
  this.base = base;
}

Req.prototype.get = function(module, opts) {
  if (typeof require(path.resolve(this.base, module)) === 'function' && opts !== undefined) {
    return require(path.resolve(this.base, module))(opts)
  } else {
    return require(path.resolve(this.base, module))
  }
  process.exit()
}
const req = new Req("./src/node_modules.noSync/node_modules")
//
//
//
const webpack = req.get('webpack')
const TerserPlugin = req.get('terser-webpack-plugin');
const CleanWebpackPlugin = req.get('clean-webpack-plugin');
const CopyWebpackPlugin = req.get('copy-webpack-plugin');
const GasPlugin = req.get('gas-webpack-plugin');
const UglifyJSPlugin = req.get('uglifyjs-webpack-plugin');
const ForkTsCheckerWebpackPlugin = req.get('fork-ts-checker-webpack-plugin')

const { version } = require('./package.json');
const { compilerOptions } = require('./tsconfig.json');

let pathAliases = {}

if (compilerOptions.paths !== undefined) {
  Object.keys(compilerOptions.paths).map((el) => {
    let elnew = el.replace('/*','')
    let pathnew = (compilerOptions.paths[el][0]).replace('/*','')
    pathAliases[elnew] = path.resolve(
      compilerOptions.baseUrl,
      pathnew)
  })
}

console.log(pathAliases)
const destination = 'dist';

module.exports = {
  bail: true,
  output: {
    pathinfo: false
  },
  context: __dirname,
  entry: './src/index.ts',
  output: {
    filename: `code-${version}.js`,
    path: path.resolve(__dirname, destination),
    libraryTarget: 'this',
    // for speed
    pathinfo: false,
  },
  resolve: {
    alias: { ...pathAliases },
    modules: [
      path.resolve(__dirname, "src"),
      path.resolve(__dirname, "src/node_modules.noSync/node_modules"),
    ],
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  resolveLoader: {
    modules: [
      path.resolve(__dirname, "src"),
      path.resolve(__dirname, "src/node_modules.noSync/node_modules"),
    ],
  },
  optimization: {
    // removeAvailableModules: false,
    // removeEmptyChunks: false,
    // splitChunks: false,
    minimizer: [
      // is terser causing issues?
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        terserOptions: {
          ecma: 5,
          keep_fnames: true,
          keep_quoted_props: true,
          compress: {
            defaults: false, // default: true, false disables most

            arrows: true, // default: true
            collapse_vars: true, // default: true
            global_defs: {
              "@console.log": "Logger.log",
            },
            directives: true, // default: true, remove non-standard
          },
          mangle: true,
          module: false,
          quote_keys: true,
          output: {
            comments: false,
          }
        }
      })
    ]
  },
  module: {
    // order is from bottom-up
    rules: [
      // {
      //   test: /\.m?js$/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: [req.get("@babel/preset-typescript")],
      //       plugins: [
      //         req.get("@babel/plugin-transform-object-assign"),
      //         req.get("@babel/plugin-transform-property-literals"),
      //         req.get("@babel/plugin-transform-member-expression-literals"),
      // 	          ]
      //     }
      //   }
      // },
      {
        test: [ /\.tsx?$/, /\.jsx?$/],
        loader: "ts-loader",
        options: {
          // disable type checker - we will use it in fork plugin
          transpileOnly: true,
          experimentalWatchApi: true,
        }
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin([destination]),
    new CopyWebpackPlugin([
      {
        from: './Templates/**/*.html',
        flatten: false,
        to: path.resolve(__dirname, destination)
      }
    ]),
    new ForkTsCheckerWebpackPlugin({
      tslint: true,
      watch: [ "./src/index.ts", "./src/Code/**/*.ts" ]
    }),
    new GasPlugin({
      comments: false
    })
  ]
};
