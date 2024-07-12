// webpack.config.js
const path = require('path');

module.exports = {
    // Other configuration settings...
    resolve: {
        fallback: {
            "path": require.resolve("path-browserify")
        }
    }
};
export const resolve = {
    fallback: {
        "path": require.resolve("path-browserify"),
        
    }
};
