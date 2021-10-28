const path = require("path");
const tsconfig = require("./tsconfig.json");

/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  plugins: ["@next/next"],
  extends: ["lunde", "plugin:@next/next/core-web-vitals"],
  settings: {
    "import/internal-regex": "^(@/.*)$",
  },
  rules: {
    "import/extensions": "off",
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link", "a"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["noHref", "invalidHref", "preferButton"],
      },
    ],
    "react/react-in-jsx-scope": "off",
  },
  overrides: [
    {
      files: [".eslintrc.js", "*.config.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
    {
      files: ["**/*.test.{ts,tsx}"],
      settings: {
        "import/resolver": {
          node: {
            moduleDirectory: [
              "node_modules",
              ...Object.values(tsconfig.compilerOptions.paths)
                .flatMap((dirs) => dirs.map((dir) => path.dirname(dir)))
                .filter((dir, i, arr) => arr.indexOf(dir) === i),
            ],
          },
          jest: { jestConfigFile: ".jest/config.js" },
        },
      },
    },
  ],
  ignorePatterns: [".github", ".husky", ".next", ".vercel", "public"],
};
