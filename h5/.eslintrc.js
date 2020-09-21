module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['@vue/standard', 'plugin:vue/essential', 'plugin:prettier/recommended'],
    plugins: ['prettier'],
    globals: {
        uni: true,
        getApp: true
    },
    rules: {
        'prettier/prettier': 'error',
        'no-unused-vars': 'off',
        'no-extend-native': 'off',
        'no-debugger': 'off',
        'no-empty': 'off',
        'no-prototype-builtins': 'off'
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
};
