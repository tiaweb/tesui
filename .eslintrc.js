module.exports = {
    "root":true,
    "env": {
        "es6": true,
        "browser": true,
        "commonjs": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/recommended"
    ],
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "arrow-parens": ["error", "as-needed"],
        "brace-style": ["error", "1tbs", {"allowSingleLine": true}],
        "comma-dangle": ["error", "never"],
        "comma-spacing": "error",
        "comma-style": "error",
        "eqeqeq": ["error", "smart"],
        "eol-last": "error",
        "indent": "off",
        "indent-legacy": ["error", 4, {"SwitchCase": 1}],
        "key-spacing": "error",
        "keyword-spacing": "error",
        "linebreak-style": ["error", "unix"],
        "no-array-constructor": "error",
        "no-case-declarations": "warn",
        "no-console": "off",
        "no-duplicate-imports": "error",
        "no-empty": ["error", {"allowEmptyCatch": true}],
        "no-extend-native": "error",
        "no-lone-blocks": "error",
        "no-lonely-if": "error",
        "no-multi-spaces": "error",
        "no-multiple-empty-lines": ["error", {"max": 2, "maxEOF": 1, "maxBOF": 0}],
        "no-template-curly-in-string": "error",
        "no-trailing-spaces": "error",
        "no-unused-vars": ["error", {"vars": "local", "args": "none"}],
        "no-var": "error",
        "object-curly-spacing": "error",
        "object-shorthand": "error",
        "prefer-const": ["error", {"destructuring": "all"}],
        "prefer-destructuring": "warn",
        "quotes": ["error", "single", {"avoidEscape": true}],
        "semi": ["error", "always"],
        "space-before-blocks": "error",
        "space-before-function-paren": ["error", {"anonymous": "always", "named": "never", "asyncArrow": "always"}],
        "space-in-parens": "error",
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "spaced-comment": "error",
        "template-curly-spacing": "error",
        "vue/html-indent": ["error", 4],
        "vue/html-self-closing": ["error", {"html": {"normal": "never"}}],
        "vue/max-attributes-per-line": "off",
        "vue/require-default-prop": "off",
        "vue/no-v-html": "off",
        "vue/html-closing-bracket-spacing": ["error", {"selfClosingTag": "never"}],
        "vue/singleline-html-element-content-newline": "off", // TODO: revisit when fixed in eslint-plugin-vue
        "vue/multiline-html-element-content-newline": "off", // TODO: revisit when fixed in eslint-plugin-vue
        "vue/no-use-v-if-with-v-for": "off", // TODO: remove when fixed in eslint-plugin-vue
        "vue/require-v-for-key": "off"
    }
};
