{

    module: {
        rules: [
            ... { test: /\.hbs$/, exclude: /node_modules/, use: "handlebars-loader" }
        ]
    }
}