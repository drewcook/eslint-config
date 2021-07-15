# altheajs-eslint-config

Althea Web Service's [`eslint`](https://eslint.org/) configuration.

You can view this package on NPM: [click here](https://www.npmjs.com/package/altheajs-eslint-config)

## Installation

### npm

```sh
npm install --save-dev altheajs-eslint-config
```

### yarn

```sh
yarn add --dev altheajs-eslint-config
```

## Usage

### Configuration

The simplest way to install and use the default config is to reference it directly in your `package.json` file as follows:

```json
{
	// ...package.json
	"eslintConfig": {
		"extends" : "altheajs-eslint-config"
	}
}
```

If you'd like to extend the configurations, create a `.eslintrc.js` file at the root of your project that contains:

```js
module.exports = {
	"extends": ["altheajs-eslint-config"],
	// ...more custom config overrides
};
```

## NPM Scripts Command

You can add in an npm script to your `package.json` which will apply lint rules across all the file patterns specified. Simply add the following to apply to all files:

```json
{
	// ...package.json
	"scripts": {
		// check for linting errors
		"lint:quality": "eslint -c .eslintrc.js ./**/*",
		// fix and apply the rules to those that can be fixed
		"fix:quality": "eslint -c .eslintrc.js ./**/* --fix",
	}
}
```

## [Editor Integration](https://eslint.org/docs/user-guide/integrations)

### Visual Studio Code

1. Install ESLint extension: `View → Extensions` then find and install the ESLint [extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
2. Reload the editor.
3. In your user settings `Code -> Preferences -> Settings` add the following settings:

	```json
	{
		// ...settings.json
		"editor.codeActionsOnSave": {
			"source.fixAll.eslint": true
		}
	}
	```


## Enforced Rules

Check out all of ESlint's [configuration options](https://eslint.org/docs/rules/).
