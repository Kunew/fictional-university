const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js', // Main entry point
        accordion: './src/accordion.js', // Ensure accordion.js is explicitly included
    },
    output: {
        path: path.resolve(__dirname, 'build'), // Ensure output is to the /build folder
        filename: '[name].js', // Name the output files based on entry point (e.g., index.js, accordion.js)
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};
