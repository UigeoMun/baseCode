const path = require('path');

module.exports = {
  extends: ["airbnb", "react-app"],
  settings : {
    "import/resolver": {
      node: { paths: [path.resolve('./src')] },
    },
  },
  rules: {
    "prettier/prettier": "error"
  }
}
