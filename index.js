module.exports = {
    extends: [
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'no-alert': 'error',
        'no-else-return': 'error',
        'no-extra-bind': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-useless-return': 'error',
        'no-const-assign': 'error',
        'no-duplicate-imports': 'error',
        'no-extra-boolean-cast': 'error',
        'no-use-before-define': 'error',
        'no-unexpected-multiline': 'error',
        'no-unreachable': 'error',
        'no-var': 'error',
        'prefer-const': 'error',
        'no-dupe-args': 'error',
        'no-empty': 'error',
        'no-dupe-keys': 'error',
        'object-curly-spacing': ['warn', 'always'],

        indent: ['error', 4],
        quotes: ['warn', 'single', { avoidEscape: true }],
    }
};