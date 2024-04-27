import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    plugins: [react()],
    build: {
        assetsDir: 'static',
    },
    server: {
        port: 3000,
        cors: true,
        proxy: {
            "/api": {
                target: "grocerymanagement.pythonanywhere.com/",
                changeOrigin: true,
                secure: false,
                rewrite: (path) => path.replace(/^\/api/, ""),
            },
        },
    },
});
