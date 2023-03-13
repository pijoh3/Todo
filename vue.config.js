const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: process.env.VUE_APP_PORT || 8080,
    //CORS 관련 설정
    proxy: {
      // store로 시작되는 주소의 경우 해당 서버로 CORS 허용
      '/store/*': {
        target: process.env.VUE_APP_HNPWA_URL,
      }
    }
  }
})
