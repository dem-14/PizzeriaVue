module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  chainWebpack: (config) => { 
    config.plugins.delete ('prefetch') // para que no cargue toda la aplicación de primeras
  }
}