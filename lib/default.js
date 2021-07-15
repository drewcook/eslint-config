module.exports = {
  extends: [
    // https://www.npmjs.com/package/eslint-config-airbnb
    'airbnb',
    'plugin:vue/essential',
  ],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {},
};
