/* eslint-disable  no-console */
const babel = require('@babel/core');

const result = babel.transform('[1, 2, 3, 4].forEach(item => console.log(item))', {
    "presets": [
        [
            "@babel/preset-env"
        ]
    ]
});

console.log(result.code);