const path = require( 'path' );
const CopyPlugin = require( 'copy-webpack-plugin');

const webpack = require('webpack');

//const VueLoader = require('vue-loader/lib/plugin');
//var VERS_STR = execSync('git rev-list HEAD --count').toString()

module.exports = (env, argv)=> {

	// intended buildpath from script.
	const buildpath = argv['buildpath'];
	// absolute buildpath in system.
	const absPath = path.resolve( __dirname, buildpath );

	return {

	mode: env.production ? "production" : 'development',
	entry:{
		name:"./src/index.js"
	},
	module: {

		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader']
			}
		],
	},
	plugins: [
		/*new VueLoader({
			compilerOptions:{
				whitespace:'condense'
			}
		}),*/
		new webpack.DefinePlugin({
		__DEBUG:true,
		__CHEATS:true,
		__DIST:env.production ? true : false,
		__SAVE:null
	}),
	new HtmlWebpackPlugin({

		template:'index.ejs',
		title:"Vue-template",
		filename:path.resolve( buildPath, 'index.html'),
		__DIST:env.production ? true : false

	}),
	new CopyPlugin({
		patterns:[

		{
			from:'data',
			noErrorOnMissing:true,
			to:path.resolve( absPath, 'data')
		},
		{
			from:'css',
			noErrorOnMissing:true,
			to:path.resolve( absPath, 'css' )
		}
	]})
	],
	output:{

		filename: "[name].js",
		chunkFilename: "[name].bundle.js",
		path:path.resolve(__dirname, buildpath, 'js/' ),
		publicPath:'js/',
		library: "[name]"
	},
	resolve:{
		modules:[
			path.resolve( __dirname, "src"),
			"node_modules"
		],

		alias:{
			'config':'config',
			"data":"../data",
			'ui': 'ui'
		}
	}
};

};