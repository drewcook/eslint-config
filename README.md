# eslint-config-altheajs

Althea Web Service's [`eslint`](https://eslint.org/) configuration.

You can view this package on NPM: [click here](https://www.npmjs.com/package/eslint-config-altheajs)

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
