module.exports = {
    "extends": "airbnb",
    "installedESLint": true,
    "plugins": [
        "react"
    ],
    "rules": {
      "react/require-extension": "off",
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "curly": [2, "multi-or-nest"],
    },
    "env": {
        "browser": true,
        "node": true,
    }
};
