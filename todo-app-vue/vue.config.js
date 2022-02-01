module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/frontend-mentor-challenges/todo-app-page/'
    : '/',
    pwa: {
      name: 'Todo App',
      themeColor: '#161722',
      msTileColor: '#161722',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'black',
  
      // configure the workbox plugin
      workboxPluginMode: 'GenerateSW'
    }
}