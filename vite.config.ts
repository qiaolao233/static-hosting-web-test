import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

/**
 * @description 解決 vite 打包後檔名出現中文亂碼的問題
 */
// https://israynotarray.com/other/20220928/1377668819/
const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler',
                additionalData: ['@use "@/styles/scss/mixin.scss";'].join('\n'),
            },
        },
    },
    base: './',
    build: {
        cssCodeSplit: false,
        rollupOptions: {
            output: {
                // https://github.com/rollup/rollup/blob/master/src/utils/sanitizeFileName.ts
                sanitizeFileName(name) {
                    const match = DRIVE_LETTER_REGEX.exec(name);
                    const driveLetter = match ? match[0] : '';
                    // substr 是被淘汰語法，因此要改 slice
                    return (
                        driveLetter +
                        name
                            .slice(driveLetter.length)
                            .replace(INVALID_CHAR_REGEX, '')
                    );
                },
            },
        },
    },
});
