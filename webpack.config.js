/* não pode usar 'import' e 'export default' pois node não reconhece nativamente.

[X] import '';
[X] export default {};

[OK] module.exports = {}

*/

const path = require('path');  // para dar suporte na barra do caminho das pastas em todos os sistemas operacionas.

const HtmlWebpackPlugin = require('html-webpack-plugin'); // plugin para trocar bundle automaticamente na pagina e evitar erros de cache

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'), // caminho de entrada da aplicação
  output: {
    path: path.resolve(__dirname, 'build'),  // Aonde gerar o bundle
    filename: 'bundle[hash].js' // Nome do arquivo gerado, com *hash* para evitar problemas com cache 
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html') // caminho para adicionar chamada do bundle.js
    }),
    new CleanWebpackPlugin
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  devServer: {
    port: 3000,
  }
};