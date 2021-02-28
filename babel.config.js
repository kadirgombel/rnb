module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.json'],
        // Add your new aliases here
        alias: {
          _components: './src/components',
          _assets: './src/assets',
          _hooks: './src/hooks',
          _pages: './src/pages',
          _services: './src/services',
          _themes: './src/themes',
          _translations: './src/translations',
          _store: './src/store',
          _utils: './src/utils',
        },
      },
    ],
  ],
};
