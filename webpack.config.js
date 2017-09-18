/**
 * Created by maruyama on 2017/09/11.
 */
module.exports = {
    context: __dirname,
    entry: {
        jsx: "./src/index.jsx",
        // css: "./src/main.css",
        // html: "./src/index.html",
    },

    output: {
        path: __dirname + "/static",
        filename: "bundle.js",
    },
    devServer: {
        contentBase: 'static',
        port: 3000
    },
    devtool: 'source-map',
    module: {
        // rules: [
        //     //Eslint loader
        //     {test: /\.jsx?$/, exclude: /node_modules/, loader: "eslint-loader"},
        // ],
        loaders: [
            // {test: /\.html$/, loader: "file-loader?name=[name].[ext]"},
            // {test: /\.css$/, loader: "file-loader?name=[name].[ext]"},
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },

};