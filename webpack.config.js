module.exports = {
	devtool: 'source-map',
	entry : ["babel-polyfill","./src/index.js"],
	output : {
		filename: 'bundle.js',
		path: __dirname + "/dist"
	},
	"devServer": {
		contentBase: __dirname + "/dist",
		compress: true,
		inline: true,
		port: 9000
	},
	module: {
		rules: [
			{ test: /\.js?$/, exclude: /node_modules/, loader: "babel-loader" },
			{ test: /\.scss$/, exclude: /node_modules/, loader: "style-loader!css-loader!sass-loader"}
		]
	}
}