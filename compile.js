/* eslint-disable  no-console */
const fs = require('fs');
const babel = require('@babel/core');
const fse = require('fs-extra');
const path = require('path');
const dir = require('./dir');

const startTime = Date.now();
const srcDir = path.resolve(__dirname, './lib');
const distDir = path.resolve(__dirname, './dist/');
const configPath = path.resolve(__dirname, './babel.config.json');
const options = JSON.parse(fs.readFileSync(configPath));

// 首先清空dist文件夹（如果dist文件夹不存在不会报错）
fse.removeSync(distDir);
const startCopy = Date.now();

// 将src/的文件拷贝至dist/中
fse.copySync(srcDir, distDir, {
    filter(source) {
        // 不包括单元测试
        if (/__test__/.test(source)) {
            return false;
        }
        return true;
    }
});


// 获取dist目录中的文件，将js、jsx进行编译
const files = dir.getFiles(distDir);

files.array.forEach(filePath => {
    // 仅编译js、jsx文件
    if (/\.(js|jsx)$/.test(filePath)) {
        console.log(filePath);
        const content = fs.readFileSync(filePath, 'utf-8');
        const result = babel.transform(content, {});
        fs.writeFileSync(filePath, result.code, 'utf-8');
        fs.renameSync(filePath, filePath.replace('.jsx', '.js'));
    }
});
console.log(files.array.length);
