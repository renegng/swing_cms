module.exports = [{
    entry: './static/css/swing_app.scss',
    output: {
        path: __dirname + "/static/css",
        // This is necessary for webpack to compile
        // But we never use compile_placeholder.js
        filename: 'compile_placeholder.js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: 'swing-bundle.css',
                    },
                },
                { loader: 'extract-loader' },
                { loader: 'css-loader' },
                {
                    loader: 'sass-loader',
                    options: {
                        includePaths: ['./node_modules']
                    }
                },
            ]
        }]
    },
},
{
    entry: "./static/js/swing_app.js",
    output: {
        path: __dirname + "/static/js",
        filename: "swing-bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }]
    },
}];