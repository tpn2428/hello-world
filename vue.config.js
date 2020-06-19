module.exports = {
  "lintOnSave": false,

  transpileDependencies: [
    "vuetify"
  ],
  devServer: {
    disableHostCheck: true
  },
  pluginOptions: {
    express: {
      shouldServeApp: true,
      serverDir: './server'
    }
  }
}
