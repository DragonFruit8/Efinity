// webpack.config.js
// const path = require('path');

export const resolve = {
    fallback: {
        "path": require.resolve("path-browserify"),
        "os": require.resolve("os-browserify/browser"),
        "crypto": require.resolve("crypto-browserify")
    }
};
