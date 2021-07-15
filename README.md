# eslint-config-altheajs

Althea Web Service's [`eslint`](https://eslint.org/) configuration.

You can view this package on NPM: [click here](https://www.npmjs.com/package/eslint-config-altheajs)

This package supports the following by default out of the box:
- `eslint-config-airbnb` - React with hooks support
- `eslint-config-prettier` - Prettier support. Prettier configs will override the ESLint rules associated with style choices. In other words, `Pretter > ESLint`.
- `eslint-plugin-vue` - Vue support

This package *also* has the option for supporting TypeScript projects as well:
- `eslint-config-airbnb-typescript` - React with hooks support
- Everything else above!


## Installation

### npm

```sh
npm install --save-dev eslint-config-altheajs
```

### yarn

```sh
yarn add --dev eslint-config-altheajs
```

## Usage

### Configuration

The simplest way to install and use the default config is to reference it directly in your `package.json` file as follows:

```js
{
	// ...package.json
	"eslintConfig": {
		"extends" : ["altheajs"]
	}
}
```

If you'd like to extend the configurations, create a `.eslintrc.js` file at the root of your project that contains the following:

```js
module.exports = {
	"extends": ["altheajs"], // you can omit "eslint-config-"
	// if using typescript
	"parserOptions": { "project": "./tsconfig.json" }
	// ...more custom config overrides
};
```

### TypeScript Usage
If you're using a typescript project, you can use the exported TypeScript ESLint configuration.

```js
{
	// ...package.json
	"eslintConfig": {
		"extends": ["altheajs/typescript"]
	}
}
```

### Usage with Prettier

Since this package already bundles the `eslint-config-prettier` package under the hood, there is no need to install the dependency yourself.  You can use your Prettier config as you would normally in your project, and ESLint will prefer Prettier for style changes over its own.

## NPM Scripts Command

You can add in an npm script to your `package.json` which will apply lint rules across all the file patterns specified. Simply add the following to apply to all files:

```js
{
	// ...package.json
	"scripts": {
		// check for linting errors
		"lint:quality": "npx eslint -c .eslintrc.js . --ext .js,.jsx,.ts,.tsx"
		// fix and apply the rules to those that can be fixed
		"fix:quality": "npx eslint -c .eslintrc.js . --ext .js,.jsx,.ts,.tsx --fix",
	}
}
```

## [Editor Integration](https://eslint.org/docs/user-guide/integrations)

### Visual Studio Code

1. Install ESLint extension: `View → Extensions` then find and install the ESLint [extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
2. Reload the editor.
3. In your user settings `Code -> Preferences -> Settings` add the following settings:

	```js
	{
		// ...settings.json
		"editor.codeActionsOnSave": {
			"source.fixAll.eslint": true
		}
	}
	```


## Enforced Rules

Check out all of ESlint's [configuration options](https://eslint.org/docs/rules/).
