# 什么是Babel

Babel 是一个工具链，主要用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。其中最重要的功能是`语法转换`。以如下源码为例

```js
[1, 2, 3].map((n) => n + 1);
```

因为源码中用到了`箭头函数`，而箭头函数在IE 11及以下是不支持的，我们可以通过Babel将上述代码转化为如下形式并确保源码可在IE 11环境正确运行

```js
[1, 2, 3].map(function(n) {
  return n + 1;
});
```

# Babel基础用法

* 安装依赖：

```bash
npm install --save-dev @babel/core @babel/preset-env
```

#### API方式调用

* 编译源码（api调用）

```js
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
```

#### 命令行或第三方调用

对于命令行方式调用，或例如webpack、jest等第三方调用，需要设置配置文件，配置文件有2类：

* **全局配置**：
  * babel.config（.json|.js|.cjs|.mjs） 放置在根目录下，影响范围全局
* **文件相关**：
  * .babelrc（.json|.js|.cjs|.mjs） 放置在需要编辑的目录下，影响范围限制在该目录及子目录下
  * package.json 配置babel字段

需要注意的是，**根据配置文件命名方式及所在位置的不同，影响范围不同**，babel.config.json需要放置在根目录，影响范围是全局的；.babelrc.json一般放置在子目录下，影响范围仅限制在子目录下。

# Babel基础概念

Babel中有两个最重要的概念，**Plugins**和**Presets**。在大多数Babel应用场景中都需要对这两个对象做配置，其含义如下：

* **Plugins**：babel中进行语法转换的实体。如[@babel/plugin-transform-arrow-functions](https://babeljs.io/docs/en/babel-plugin-transform-arrow-functions)负责转换箭头函数、[@babel/plugin-transform-classes](https://babeljs.io/docs/en/babel-plugin-transform-classes)用于转换class等。不设置具体的Plugins，则babel的输入和输出是相同的

* **Presets**：若干Plugins的集合。一个一个plugin去配置太耗时，Presets可以认为是使用Plugins的快捷方式。如[@babel/preset-react](https://babeljs.io/docs/en/babel-plugin-transform-classes)实际上是3个plugin的集合：[@babel/plugin-syntax-jsx](https://babeljs.io/docs/en/babel-plugin-syntax-jsx)、[@babel/plugin-transform-react-jsx](https://babeljs.io/docs/en/babel-plugin-transform-react-jsx)、[@babel/plugin-transform-react-display-name](https://babeljs.io/docs/en/babel-plugin-transform-react-display-name)

### Presets与Plugins的执行顺序

* `Plugins`先于`Presets`执行
* `Plugins`中的插件从前到后执行（例如设置{"plugins": ["transform-decorators-legacy", "transform-class-properties"]}，则transform-decorators-legacy 先于transform-class-properties执行）
* `Presets`执行顺序与Plugins相反（例如设置{"presets": ["@babel/preset-env", "@babel/preset-react"]}，则@babel/preset-react先于@babel/preset-env执行）

### 重要的preset

**[@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env)**是Babel使用中必不可少的preset,主要功能是负责将高版本JavaScript语法特性转换。由于整合了[Browserslist](https://www.npmjs.com/package/browserslist)所以@babel/preset-env可以自动按照配置好的兼容性来自动对语法特性进行转化。以箭头函数为例，如果希望输出的代码要兼容chrome38，则进行如下配置：

```json
{
    "presets": [
        ["@babel/preset-env", {
            "targets": {
                "chrome": "38"
            }
        }]
    ]
}
```

由于chrome38不支持箭头函数，而输出代码又要兼容，所以Babel会自动将箭头函数编译替换。但如果我们将输出的兼容环境设置为chrome48，由于这个版本已经支持箭头函数，所以此时的输出将不会对箭头函数做处理

### 重要的plugin

**[@babel/plugin-transform-runtime](https://babeljs.io/docs/en/babel-plugin-transform-runtime)**在Babel编译优化中经常会用到。改插件可以将helper源码以依赖的方式引入，从而减小代码编译后的代码体积。

我们可以通过引入`@babel/plugin-transform-runtime`插件启用：
```json
// babel.config.json
{
    "presets": ["@babel/preset-env" ],
    "plugins": ["@babel/plugin-transform-runtime"]
}

```

以如下代码为例，我们可以观察下启用@babel/plugin-transform-runtime与否的效果：

#### 源码

```js
// 源码
class Rectangle {}
async function* agf() {
    await 1;
    yield 2;
}
```

#### 启用@babel/plugin-transform-runtime

```js
// 启用@babel/plugin-transform-runtime
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _awaitAsyncGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/awaitAsyncGenerator"));

var _wrapAsyncGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapAsyncGenerator"));

var Rectangle = function Rectangle() {
  (0, _classCallCheck2.default)(this, Rectangle);
};

function agf() {
  return _agf.apply(this, arguments);
}

function _agf() {
  _agf = (0, _wrapAsyncGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _awaitAsyncGenerator2.default)(1);

          case 2:
            _context.next = 4;
            return 2;

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _agf.apply(this, arguments);
}
```

#### 未启用@babel/plugin-transform-runtime

```js
// 未启用@babel/plugin-transform-runtime
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _awaitAsyncGenerator(value) { return new _AwaitValue(value); }

function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }

function _AsyncGenerator(gen) { var front, back; function send(key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; if (back) { back = back.next = request; } else { front = back = request; resume(key, arg); } }); } function resume(key, arg) { try { var result = gen[key](arg); var value = result.value; var wrappedAwait = value instanceof _AwaitValue; Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) { if (wrappedAwait) { resume(key === "return" ? "return" : "next", arg); return; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: true }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: false }); break; } front = front.next; if (front) { resume(front.key, front.arg); } else { back = null; } } this._invoke = send; if (typeof gen.return !== "function") { this.return = undefined; } }

if (typeof Symbol === "function" && Symbol.asyncIterator) { _AsyncGenerator.prototype[Symbol.asyncIterator] = function () { return this; }; }

_AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };

_AsyncGenerator.prototype.throw = function (arg) { return this._invoke("throw", arg); };

_AsyncGenerator.prototype.return = function (arg) { return this._invoke("return", arg); };

function _AwaitValue(value) { this.wrapped = value; }

var Rectangle = function Rectangle() {
  _classCallCheck(this, Rectangle);
};

function agf() {
  return _agf.apply(this, arguments);
}

function _agf() {
  _agf = _wrapAsyncGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _awaitAsyncGenerator(1);

          case 2:
            _context.next = 4;
            return 2;

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _agf.apply(this, arguments);
}
```

可以明显看出，启用@babel/plugin-transform-runtime后输出的代码体积明显变小。但需留意的是，开发公共组件库时通常不启用，因为启用就需要额外配套安装`@babel/runtime`，这对使用者来说是不友好的。


# 个性化定制Preset

因为Preset只是若干Plugin和Preset的集合，所以定制个性化的Preset就尤为简单。Babel官方鼓励社区创建自己的Preset，如果希望这个Preset以npm包的形式发布，其名称需要遵循`babel-preset-*`的命名规范，同时创建一个index.js将Preset的配置导出，内容格式类似Babel的配置文件，拥有`presets`和`plugins`配置，但需要注意的是，index.js必须导出一个函数（Babel 7）。以babel-preset-mypreset为例：
```js
// babel-preset-mypreset/index.js
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
```
在项目的`babel.config.json`中作如下引用：

```json
// babel.config.json
{
    "presets": ["babel-preset-mypreset"]
}
```
上面的用法和下面的等价：

```json
// babel.config.json
{
    "presets": [
        ["@babel/preset-env", {
            "targets": {
                "chrome": "38"
            }
        }]
    ],
    "plugins": ["@babel/plugin-transform-runtime"]
}
```

# 个性化Plugin开发

如果现有的Plugin无法满足需要，我们可以按照规范定制符合自身需要的Plugin，因为Plugin是Babel最核心的内容，是Babel实现语法转换的基础，也是Preset底层的基础，所以Plugin的复杂程度远远高于Preset。

在实现Plugin之前，我们需了解Babel的运行过程：

* **parse（解析）**：接收源码并输出 AST
  * **[Lexical Analysis](https://en.wikipedia.org/wiki/Lexical_analysis)（词法分析）**：把字符串形式的源代码转换为tokens流
  * **[Syntactic Analysis](https://en.wikipedia.org/wiki/Parsing)（语法分析）**：把令牌流转换成 AST 。 该阶段会利用令牌中的信息把它们转换成一个 AST结构，以便于后续的操作。
* **[Transform](https://en.wikipedia.org/wiki/Program_transformation)（转换）**：接收 AST 并对其进行遍历，在此过程中对节点进行添加、更新及移除等操作。是 Babel 或是其他编译器中最复杂的部分，同时也是插件的主要工作
* **[Generate](https://en.wikipedia.org/wiki/Code_generation_(compiler))（生成）**：将转换后的AST重新生成字符串形式的代码，同时生成[source maps](https://www.html5rocks.com/en/tutorials/developertools/sourcemaps/)。该过程比较简单，只需要做对AST的深度遍历，并生成字符串代码即可

## Plugin开发示例
