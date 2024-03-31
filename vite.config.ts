import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/Hello.tsx'),
            name: 'ViteHelloComponent',
            fileName: 'vite-hello-component',
        },
    },
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
        }),
    ],
});
