module.exports = {
    overrides: [
        {
            files: [ "**/*.ts?(x)" ],
            parser: "@typescript-eslint/parser",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                },
                ecmaVersion: 2021,
                sourceType: "module"
            },
            plugins: [
                "@typescript-eslint"
            ],
            extends: [
                "eslint:recommended",
                "plugin:@typescript-eslint/eslint-recommended",
                "plugin:@typescript-eslint/recommended"
            ],
            // You can add Typescript specific rules here.
            // If you are adding the typescript variant of a rule which is there in the javascript
            // ruleset, disable the JS one.
            rules: {
                "@typescript-eslint/no-array-constructor": "warn",
                "no-array-constructor": "off"
            }
        }
    ],
    env: {
        browser: true, // Browser global variables like `window` etc.
        commonjs: true, // CommonJS global variables and CommonJS scoping.Allows require, exports and module.
        es6: true, // Enable all ECMAScript 6 features except for modules.
        jest: true, // Jest global variables like `it` etc.
        node: true // Defines things like process.env when generating through node
    },
    extends: [    
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jest/recommended",
        "plugin:testing-library/react"],
    parser: "@babel/eslint-parser", // Uses babel-eslint transforms.
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2021, // Allows for the parsing of modern ECMAScript features
        requireConfigFile: false,
        sourceType: "module" // Allows for the use of imports
    },
    plugins: [
        "import"
    ],
    root: true, // For configuration cascading.
    rules: {
        "no-console": 2,
        indent: [
            "error",
            4
        ],
        quotes: [
            "warn",
            "double"
        ],
        "import/order": [
            "warn",
            {
                alphabetize: {
                    caseInsensitive: true,
                    order: "asc"
                },
                groups: [
                    "builtin",
                    "external",
                    "index",
                    "sibling",
                    "parent",
                    "internal"
                ]
            }
        ]},
    settings: {
        react: {
            version: "detect" // Detect react version
        }
    }
};