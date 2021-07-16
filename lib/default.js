module.exports = {
	extends: [
		// https://www.npmjs.com/package/eslint-config-airbnb
		'airbnb',
		'plugin:vue/essential',
		'prettier',
	],
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	parser: '@babel/eslint-parser',
	parserOptions: {
		ecmaVersion: 12,
		ecmaFeatures: {
			jsx: true,
		},
		sourceType: 'module',
	},
	plugins: ['vue'],
	rules: {
		// Prefer tab styling
		'no-tabs': 'off',
		indent: ['error', 'tab'],
		// Indent JSX with tabs
		'react/jsx-indent': ['error', 'tab'],
		// Indent props with tabs
		'react/jsx-indent-props': ['error', 'tab'],
	},
}
