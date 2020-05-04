require('dotenv').config();
const path = require('path');

console.log(`Your production environment: ${process.env.NODE_ENV}`);

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    devServer: {
        contentBase: './dist',
    },
    entry: "./src/index.js",
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
}