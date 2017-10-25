const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(
    common,
    {
        devtool: 'inline-source-map',
        devServer: {
            contentBase: __dirname + "/dist",
            compress: true,
            inline: true,
            port: 9000
        }
    }
)
