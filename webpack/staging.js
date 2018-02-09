var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: {
        index: './app/pages/index/client.js',
        journey: './app/pages/journey/client.js',
        booking: './app/pages/booking/client.js',
        checkout: './app/pages/checkout/client.js',
        policyCancellation: './app/pages/policy/cancellation/client.js',
        policyPrivacy: './app/pages/policy/privacy/client.js',
        policyTerms: './app/pages/policy/terms/client.js',
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
    ],
    output: {
        path: './app/public/static/js',
        filename: '[name].js',
    },
    target: 'web',
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react']
                }
            },
            { test: /\.json$/, loader: 'json-loader' },
        ]
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js']
    },
    node: {
        console: true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
    }
};