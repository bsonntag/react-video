module.exports = {
  env: {
    browser: 1,
  },
  extends: 'seegno',
  rules: {
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
  },
  settings: {
    react: {
      version: '16.3',
    },
  },
};
