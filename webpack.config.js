module.exports = {
  entry: {
    App: "./app/assets/scripts/App.js"
    // Vendor: "./app/assets/scripts/Vendor.js"
  },
  output: {
    path: __dirname + "/app/temp/scripts",
    filename: "App.js"
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}