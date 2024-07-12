// webpack.config.js
const path = require('path');

module.exports = {
    // Other configuration settings...
    resolve: {
        fallback: {
            "path": require.resolve("path-browserify"),
            "os": require.resolve("os-browserify/browser"),
            "crypto": require.resolve("crypto-browserify")
        }
    }
};
export const resolve = {
    fallback: {
        "path": require.resolve("path-browserify"),
        
    }
};
