module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
    },
    "globals": {
        // 可以重写
        "wx": true,
        // 不可重写
        "$": false,
        "jQuery": false,
        // 禁用
        "uni": "off"
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        // prettier
        "prettier",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "prettier"
    ],
    "rules": {
        "prettier/prettier": "error",
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    },

}
