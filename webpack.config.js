const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = false//process.env.NODE_ENV !== "production";
console.log("\ndevmode:", devMode, "\n");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js",
  },
  context: __dirname,
  devtool: "source-map",
  devServer: {
    static: {
      directory: __dirname + "/public",
    },
    port: 3000,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: devMode ? [] : [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
        ],
      },
    ],
  },
};
