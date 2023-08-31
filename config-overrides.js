/* config-overrides.js */

module.exports = function override(config, env) {
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
      },
    ];
  }
  return config;
};

// "start": "react-scripts start",
// "build": "react-scripts build",
// "test": "react-scripts test",
