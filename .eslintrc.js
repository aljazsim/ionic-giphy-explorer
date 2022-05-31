module.exports = {
    root: true,
    env: {
        node: true
    },
    "extends": [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/typescript/recommended"
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "semi": ["error", "always"],
        "comma-dangle": ["error", "never"],
        "space-before-function-paren": ["error", { named: "never", anonymous: "always", asyncArrow: "always" }],
        "quotes": ["error", "double"],
        "no-useless-constructor": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "vue/multi-word-component-names": "off",
        "indent": ["error", 4],
        "@typescript-eslint/no-empty-function": "off"
    },
    overrides: [
        {
            files: [
                "**/__tests__/*.{j,t}s?(x)",
                "**/tests/unit/**/*.spec.{j,t}s?(x)"
            ],
            env: {
                jest: true
            }
        }
    ]
}
