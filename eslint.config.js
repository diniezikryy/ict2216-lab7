import js from "@eslint/js";
import globals from "globals";
import security from "eslint-plugin-security";
import mocha from "eslint-plugin-mocha";

export default [
  // Base configuration for all JS files
  {
    files: ["**/*.{js,mjs,cjs}"],
    ignores: ["node_modules/**", "reports/**"],
    plugins: {
      security: security
    },
    rules: {
      ...js.configs.recommended.rules,
      ...security.configs.recommended.rules,
      "security/detect-eval-with-expression": "error",
      "security/detect-non-literal-fs-filename": "warn",
      "security/detect-unsafe-regex": "error"
    }
  },
  // ES Modules (most files including src/)
  {
    files: ["src/**/*.js", "**/*.mjs", "eslint.config.js"],
    languageOptions: { 
      sourceType: "module",
      globals: globals.node
    }
  },
  // Test files with Mocha environment
  {
    files: ["tests/**/*.js"],
    plugins: {
      mocha: mocha
    },
    languageOptions: { 
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.mocha
      }
    },
    rules: {
      ...mocha.configs.recommended.rules
    }
  },
  // CommonJS files (our security test file)
  {
    files: ["test-security.js"],
    languageOptions: { 
      sourceType: "commonjs",
      globals: globals.node
    }
  }
];