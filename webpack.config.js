const path = require("path");
/* POZOVEMO OVDJE PLUGIN */
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
 /* sad u entri imamo objekta umjesto jednog */
 entry: {
  index: './src/js/index.js'/* ,
  about: './src/js/about_us.js' */
 },
 output: {
  /* sad dodamo name za više bundle.js-a */
  /* name uzima imena iz entry objekta, tj. jedan ima ime index.bundle.js i about.bundle.js */
  filename: '[name].bundle.js',
  path: path.join(__dirname, '/dist')
 },
 module: {
  rules: [
   /* OVO JE ZA BABEL.JS */
   {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
     loader: "babel-loader",
     options: {
      presets: ['es2015']
     }
    }
   },
   /* OVDJE ZA CSS */
   {
    test: /\.css$/,
    use: [
     { loader: "style-loader" },
     { loader: "css-loader" }
    ]
   },
   /* OVDJE ZA SASS */
   {
    test: /\.scss$/,
    use: [
     { loader: "style-loader" },
     { loader: "css-loader" },
     { loader: "sass-loader" }
    ]
   }
  ]
 },
 /* OVO JE DODANO ZA OPTIMIZACIJU*/
 optimization: {
  splitChunks: {
   cacheGroups: {
    commons: {
     /* test : sve fajlove osim node_modzls */
     test: /[\\/]node_modules[\\/]/,
     /* damo ime common */
     name: "common",
     /* chunks all */
     chunks: "all"
    }
   }
  }
 },
 /* FUNKCIJA ZA PLUGINE */
 plugins: [
  new HtmlWebpackPlugin({
   template: 'src/index.html',
   title: 'Our Webpack application'
  })
 ],
 devServer: {
  contentBase: path.join(__dirname, "dist"),
  compress: true,
  port: 9000
 }
}