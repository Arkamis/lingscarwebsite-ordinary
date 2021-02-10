module.exports = {
	webpack: function (config) {
		config.module.rules.push({
			test: /\.md$/,
			use: 'raw-loader',
		})
		return config
	},
	images: {
		domains: [
			'images.lingscars.com',
			'www.lingscars.com',
		],
	},
}
