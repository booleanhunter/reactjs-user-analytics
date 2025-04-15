import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

import path from 'path';

export default defineConfig({
    base: '/',
    plugins: [react(), dts()],
    test: {
        globals: true,
        environment: 'jsdom',
    },
    resolve: {
        alias: {
            'react-user-analytics': path.resolve(__dirname, '/src'),
            '@components': path.resolve(__dirname, '/playground/components'),
            '@examples': path.resolve(__dirname, '/playground/examples'),
        },
    },
    root: '.',
    build: {
        lib: {
            entry: ['src/index.ts'],
            name: 'React User Analytics',
            fileName: 'react-user-analytics',
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ['react'],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    react: 'react',
                },
            },
        },
    },
});

