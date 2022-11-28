import { join } from 'path'
export default function() {

	// Have Nuxt transpile resources
	this.options.build.transpile.push('@cloak-app/modal')

	// Allow components to be auto-imported by Nuxt
	this.nuxt.hook('components:dirs', dirs => {
		dirs.push({
			path: join(__dirname, './components'),
			prefix: 'cloak-modal',
			level: 2,
		})
	})

}

// Required for published modules
module.exports.meta = require('./package.json')
