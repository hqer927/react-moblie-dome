const { override, fixBabelImports,addLessLoader,addPostcssPlugins,addDecoratorsLegacy ,disableEsLint } = require('customize-cra');

module.exports = override(
    addDecoratorsLegacy(),
    disableEsLint(),
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: true
    }),
    addLessLoader({
        javascriptEnabled: true,
        strictMath: true,
        noIeCompat: true,
        localIdentName: '[local]--[hash:base64:5]'
    }),
    addPostcssPlugins([require('postcss-px2rem')({ remUnit: 100})])
);
