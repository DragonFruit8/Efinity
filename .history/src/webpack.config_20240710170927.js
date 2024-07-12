// webpack.config.js
// const path = require('path');

modules.exports = {
    // other webpack configuration
    resolve: {
        fallback: {
            "path": require.resolve("path-browserify"),
            "os": require.resolve("os-browserify/browser"),
            "crypto": require.resolve("crypto-browserify")
        }
    }
};
