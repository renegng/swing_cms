const autoprefixer = require('autoprefixer');

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
                { loader: 'postcss-loader',
                    options: {
                        plugins: () => [autoprefixer()]
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sassOptions: {
                            includePaths: ['./node_modules']
                        }
                    }
                },
            ]
        }]
    },
},
{
    entry: {
        // main: ["./static/js/swing_app.js"]
        main: [
            // "./instance/js/swing_firebase-api-key.js",
            // "./static/js/swing_firebase.js",
            "./static/js/lazysizes.min.js",
            "./static/js/swing_app.js"
        ]
    },
    output: {
        path: __dirname + "/static/js",
        filename: "swing-bundle.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            // The following exclude is needed for FirebaseUI to work properly
            // since it cannot detect de navigator property on the window DOM
            // exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['@babel/preset-env']
            }
        }]
    },
}];