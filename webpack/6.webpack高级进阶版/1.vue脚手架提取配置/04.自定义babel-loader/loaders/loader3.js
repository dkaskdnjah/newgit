module.exports = function (content, map , meta) {
    console.log('333: ', 333);
    return content;
}
// 会先执行
module.exports.pitch = function (content, map , meta) {
    console.log('pitch 333');
}

