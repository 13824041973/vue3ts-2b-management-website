const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: (config) => {
    config.plugins.push(
      AutoImport.default({ resolvers: [ElementPlusResolver()] })
    )
    config.plugins.push(
      Components.default({ resolvers: [ElementPlusResolver()] })
    )
  }
})
