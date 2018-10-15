module.exports = {
  env: {
    browser: true,
    mocha: true,
  },
  rules: {
    'no-param-reassign': ['error', {props: false}],
    'prefer-destructuring': 1,
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
};
