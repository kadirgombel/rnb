module.exports = {
  root: true,
  env: {
    'jest/globals': true,
  },
  plugins: ['testing-library'],
  extends: ['@react-native-community', 'plugin:testing-library/react'],
};
