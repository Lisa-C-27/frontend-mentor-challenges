module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/frontend-mentor-challenges/todo-app-page/'
    : '/',
    pwa: {
      name: 'Todo App',
      themeColor: 'purple',
      msTileColor: '#000000',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'black',
  
      // configure the workbox plugin
      workboxPluginMode: 'GenerateSW'
    }
}