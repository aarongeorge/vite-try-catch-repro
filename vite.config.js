import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	build: {
		lib: {
			entry: resolve(__dirname, 'lib/TryCatchRepro.js'),
			fileName: (format, entryName) => `${ entryName }.${ format }.js`,
			name: 'TryCatchRepro',
			formats: ['es', 'cjs', 'umd', 'iife']
		}
	}
})
