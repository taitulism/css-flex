module.exports = function generateBanner(pkgJson) {
	const pkgNameAndVersion = pkgJson.name + ' v' + pkgJson.version;
	const license = `${pkgJson.license} License`;
	const author = '© Taitu Lizenbaum'; // TODO: pkg.author.name;
	const year = new Date().getFullYear();
	const repoUrl = 'https://github.com/taitulism/flex-css.git'; // TODO: pkg.repository.url;

	const banner = `/*! ${pkgNameAndVersion} | ${license} | ${author} ${year} | ${repoUrl} */\n`;

	return banner;
}
