module.exports = {
    watch: process.env.NODE_ENV == 'development',
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
            }
        }]
    }
}