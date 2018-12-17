const path = require( 'path' );

module.exports = {

	mode:"production",
	entry:{
		name:"./src/index.js"
	},
	output:{

		path:path.resolve( __dirname, "dist"),
		publicPath:"dist/",
		filename:"[name].dist.bundle.js",
		chunkFilename:"dist/[name].bundle.js",
		library:"[name]"
	},
	resolve:{
		modules:[
			path.resolve( __dirname, "src"),
			"node_modules"
		],

		alias:{
			'config':'config',
			"data":"data"
		}
	}

};