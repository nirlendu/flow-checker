module.exports = {
	"env": {
		"browser": true,
		"es6": true
	},
	"extends": "eslint:recommended",
	"parserOptions": {
		"ecmaFeatures": {
			"experimentalObjectRestSpread": true,
			"jsx": true
		},
		"sourceType": "module"
	},
	"plugins": [
		"react", "jsx-a11y",
	],
	"extends": "airbnb",
	"rules": {
	    "indent": ["error", "tab"],
	    "no-tabs": 0,
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"single"
		],
		"semi": [
			"error",
			"always"
		],
		"react/jsx-indent": [2, "tab"],
		"react/prefer-stateless-function": [0],
		"import/no-unresolved": [0],
	}
};