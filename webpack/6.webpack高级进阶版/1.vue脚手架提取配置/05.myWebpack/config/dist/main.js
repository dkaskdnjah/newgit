
        (function(graph){
            function require(absolutePath) {
                function localRequire(relativePath) {
                    return require(graph[absolutePath].deps[relativePath]);
                }
                var exports = {};
                (function (require,exports,code) {
                    eval(code);
                })(localRequire, exports ,graph[absolutePath].code)
                return exports;
            }
            require('./src/index.js');
        })({"./src/index.js":{"code":"\"use strict\";\n\nvar _add = _interopRequireDefault(require(\"./add.js\"));\n\nvar _count = _interopRequireDefault(require(\"./count.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconsole.log('a: ', (0, _add.default)(1, 2));\nconsole.log('count: ', (0, _count.default)(3, 2));","deps":{"./add.js":"D:/webpack/6.webpack高级进阶版/1.vue脚手架提取配置/05.myWebpack/src/add.js","./count.js":"D:/webpack/6.webpack高级进阶版/1.vue脚手架提取配置/05.myWebpack/src/count.js"}},"D:/webpack/6.webpack高级进阶版/1.vue脚手架提取配置/05.myWebpack/src/add.js":{"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nfunction add(a, b) {\n  return a + b;\n}\n\nvar _default = add;\nexports.default = _default;","deps":{}},"D:/webpack/6.webpack高级进阶版/1.vue脚手架提取配置/05.myWebpack/src/count.js":{"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nfunction count(a, b) {\n  return a - b;\n}\n\nvar _default = count;\nexports.default = _default;","deps":{}}})
        