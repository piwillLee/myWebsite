import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		AutoImport({
			resolvers: [ElementPlusResolver()],
		}),
		Components({
			resolvers: [ElementPlusResolver()],
		}),
	],
	base: process.env.NODE_ENV === 'production' ? './' : '/',
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			vue: 'vue/dist/vue.esm-bundler.js',
		},
	},
});
