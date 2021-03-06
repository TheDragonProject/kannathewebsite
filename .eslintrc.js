module.exports =
{
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	extends:
	[
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions:
	{
		ecmaFeatures:
		{
			jsx: true,
		},
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	plugins:
	[
		'@typescript-eslint',
		'react',
	],
	root: true,
	rules:
	{
		/*
		 * ESLint rules
		 */
		'brace-style':
		[
			'error',
			'allman',
		],
		'comma-dangle':
		[
			'warn',
			'always-multiline',
		],
		curly:
		[
			'error',
			'multi-line',
		],
		quotes:
		[
			'error',
			'single',
			{
				avoidEscape: true,
			},
		],
		'quote-props':
		[
			'error',
			'as-needed',
		],
		semi:
		[
			'error',
			'always',
		],
		'no-trailing-spaces': 'error',
		indent: 'off',
		'no-unexpected-multiline': 'off',
		radix: 'off',
		'require-atomic-updates': 'off',
		/*
		 * TSLint rules
		 */
		'@typescript-eslint/indent':
		[
			'error',
			'tab',
		],
		'@typescript-eslint/no-inferrable-types': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-var-requires': 'warn',
	},
};
