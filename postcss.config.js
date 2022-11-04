const cssNano = require('cssnano');
const cssImport = require('postcss-import');

module.exports = {
	plugins: [
		cssImport({
			from: './src/index.css',
		}),
		cssNano({
			preset: 'default',
		}),
	],
};
