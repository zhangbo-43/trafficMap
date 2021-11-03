
const webpack = require('webpack')
module.exports = {
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "windows.jQuery": "jquery"
            })
        ]
    },
    devServer: {
        "port": 8080,
        "open": true,
        proxy: {
            "/archivesManage": {
                target: "http://192.168.2.100:8090/archivesManage",
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/archivesManage': ''
                }
            },
        },
    },
}
