// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential', 'airbnb-base'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },

  globals: {
    appVersion: false,
    appName: false
  },

  // add your custom rules here
  rules: {

    'max-len': 0,
    'no-plusplus': 0,
    'padded-blocks': 0,
    'no-underscore-dangle': 0,
    'no-console': 0,
    'arrow-parens': ['warn', 'as-needed'],
    'quote-props': ['warn', 'as-needed'],
    'consistent-return': 0,
    'newline-per-chained-call': 0,
    'arrow-body-style':['warn', 'always'],
    "no-restricted-syntax": 0,
    "guard-for-in": 0,
    "no-use-before-define": 0,
    "no-continue": 0,
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['warn', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
