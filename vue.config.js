const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    // 基本路径
    publicPath: './',
    parallel: false,
});
