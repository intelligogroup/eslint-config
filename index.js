module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 2019,
    },
    "globals": {
        "logger": true
    },

    "plugins": ["node"],
    "extends": ["eslint:recommended", "plugin:node/recommended"],
    "rules": {

        "node/no-missing-require": ["error", {
            "allowModules": ['infra', 'database', 'scheduler', 'redflags', 'search-flow-manager', 'nlp']
        }],
        "node/exports-style": ["error", "module.exports"],
        "no-console": 0,
        "indent": [
            "warn",
            4,
            { "SwitchCase": 1 }
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "warn",
            "single"
        ],
        "node/no-extraneous-require": ["error", {
            "allowModules": ['database', 'infra', 'scheduler', 'nlp']
        }],
        "no-unused-vars": "warn",
        "no-useless-escape": "warn",
        "node/no-unsupported-features/es-syntax": ["error", {
            "version": ">=8.3.0"
        }]
    }
};
