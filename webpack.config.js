const path = require('path');

module.exports = (env) => {
  const isProduction = env === 'production';
  console.log('env', env)
  return {
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, 'public/build'),
      filename: 'bundle.js'
    },
    mode: 'none',
    module: {
      rules: [{
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },{
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'url-loader?limit=10000'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
    },
    devtool: isProduction ? 'source-map' : 'cheap-module-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    },
    resolve: {
      modules: [path.resolve(__dirname, "app"), "node_modules"]
    }
  }
}
