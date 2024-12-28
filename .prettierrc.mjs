/** @type {import("prettier").Config} */

const config = {
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 80,
    tabWidth: 4,
    semi: true,
    endOfLine: 'lf',
    quoteProps: 'as-needed',
    bracketSpacing: true,
    arrowParens: 'always',
    overrides: [
        {
            files: '.prettierrc',
            options: { parser: 'json' },
        },
    ],
};

export default config;
