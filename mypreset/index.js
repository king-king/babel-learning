module.exports = () => ({
    presets: [
        ["@babel/preset-env", {
            "targets": {
                "chrome": "38"
            }
        }]
    ],
    plugins: ["@babel/plugin-transform-runtime"]
});
