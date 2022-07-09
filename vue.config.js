var link = "http://127.0.0.1/"
module.exports = {
    devServer: {
        port: 452,
        proxy: {
            "^/api": {
                target: link,
                pathRewrite: { "^/api/": "/api/" },
                changeOrigin: true,
                ws: true,
                logLevel: "debug",
                secure: false,
            }
        }
    }
}