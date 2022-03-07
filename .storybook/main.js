const path = require("path");

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "features": {
    "babelModeV7": true,
  },
  webpackFinal: (config) => {
		config.resolve.alias = {
			...config.resolve.alias,
			"@": path.resolve(__dirname, "../src"),
		};
		return config;
	},
}