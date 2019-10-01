const path = require('path');
module.exports = {
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [path.resolve(__dirname, "./src/assets/less/variable/index.less")]
        }
    },
    chainWebpack: config => {
        config.module
            .rule('less')
            .test(/\.less$/)
            .oneOf('vue')
            .resourceQuery(/\?vue/)
            .use('px2rem')
            .loader('px2rem-loader')
            .before('less-loader')
            .options({
                remUnit: 16
            })
            .end();
    },
    publicPath: '',
    // assetsSubDirectory: '',
    // assetsPublicPath: '',
}
