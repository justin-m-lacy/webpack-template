const path = require( 'path' );

module.exports = {

	mode:"development",
	entry:{
		name:"./src/index.js"
	},
	output:{

		path:path.resolve( __dirname, "dist"),
		publicPath:"dist/",
		filename:"[name].dev.bundle.js",
		chunkFilename:"dev/[name].bundle.js",
		library:"[name]"
	},
	resolve:{
		modules:[
			path.resolve( __dirname, "src"),
			"node_modules"
		],

		alias:{
			'config':'config_dev',
			'data':'data'
		}
	}

};