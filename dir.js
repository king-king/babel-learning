const fs = require('fs');
const path = require('path');

function getFiles(cp) {
    const array = [];
    const obj = {};

    function get(p) {
        const list = fs.readdirSync(p);
        for (let i = 0; i < list.length; i++) {
            const pt = path.join(p, list[i]);
            const state = fs.statSync(pt);
            if (state.isDirectory()) {
                get(pt);
            } else if (state.isFile()) {
                // 是js文件，保存路径
                array.push(pt);
                obj[pt] = true;
            }
        }
    }
    get(cp);
    return {
        array,
        obj
    };
}

exports.getFiles = getFiles;
