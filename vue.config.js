// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })


// vue.config.js
const vueConfig = {

  devServer: {
    // development server port 8000
    port: 3000,
    // If you want to turn on the proxy, please remove the mockjs /src/main.jsL11
    proxy: {
      '/api': {
        target: 'http://yaf.local',
        pathRewrite: { '^/api': '' },
        ws: false,
        changeOrigin: true
      }
    }
  },
}

module.exports = vueConfig
