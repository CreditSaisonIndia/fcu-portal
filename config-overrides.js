const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    webpack: (config, env) => {
        config.optimization.minimize = true;
        config.optimization.minimizer = [new TerserPlugin({
            terserOptions: { keep_fnames: true }
        })];
        config.optimization.runtimeChunk = false;
        config.optimization.splitChunks = {
            cacheGroups: {
                default: false,
            },
        };

    config.output.filename = "static/js/[name].js";

    config.plugins[5].options.filename = "static/css/[name].css";
    config.plugins[5].options.moduleFilename = () => "static/css/main.css";
        return config;
    },
};