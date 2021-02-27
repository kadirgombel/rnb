module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        // Add your new aliases here
        alias: {
          components: './components',
          assets: './assets',
          hooks: './hooks',
          pages: './pages',
          _services: './src/services',
          themes: './themes',
          translations: './translations',
        },
      },
    ],
  ],
};
