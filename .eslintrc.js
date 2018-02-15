//google -> eslint-config-google
module.exports = {
    "parserOptions": {
        "ecmaVersion": 2017
    },
    "env": { "node": true },
    rules: {
        'import/no-unresolved': 'off',
        'import/no-extraneous-dependencies': 'off',
        'func-names': 'off',
        'no-multi-spaces': 'off',
        'spaced-comment': ["error", "always", { "markers": ["/"] }],
        'padded-blocks': 'off',
        'linebreak-style': 'off',
        'class-methods-use-this': 'off',
        'indent': ['error', 4],
        'max-len': ['error', 120, 2, { ignoreComments: true }],
        'no-unused-vars': ['error', { vars: 'local', args: 'after-used' }],
        'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
        'no-nested-ternary': 'off',
        'no-underscore-dangle': ['error', { 'allow': ['_super,', '_db', '_lookupFactory'] }],
        'object-shorthand': ['error', 'methods'],
    }
};