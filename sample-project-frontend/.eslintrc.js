module.exports = {
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
        ecmaVersion: 2020
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
        'plugin:react-hooks/recommended'
    ],
    parser: '@typescript-eslint/parser',
    env: {
        es2020: true
    },
    plugins: ['@typescript-eslint'],
    reportUnusedDisableDirectives: true,
    rules: {
        'no-var': 'error',
        'no-console': [
            'warn',
            {
                allow: ['warn', 'error', 'time', 'timeEnd']
            }
        ],
        'no-duplicate-imports': 'warn',
        eqeqeq: 'error',
        // Enabled rules
        '@typescript-eslint/no-shadow': 'warn',
        'prefer-const': 'warn',
        '@typescript-eslint/no-useless-constructor': 'warn',
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'warn',
        '@typescript-eslint/prefer-optional-chain': 'warn',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-misused-promises': [
            'error',
            {
                checksVoidReturn: false
            }
        ],
        'react-hooks/exhaustive-deps': [
            'warn',
            {
                additionalHooks: ''
            }
        ],
        '@typescript-eslint/no-empty-interface': [
            'error',
            {
                allowSingleExtends: true
            }
        ],
        // Disabled rules
        'no-shadow': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        // Disabling the below rules improves performance
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#eslint-plugin-import
        'import/named': 'off',
        'import/namespace': 'off',
        'import/default': 'off',
        'import/no-named-as-default-member': 'off',
        // suppress errors for missing 'import React' in files
        'react/react-in-jsx-scope': 'off'
    }
}
