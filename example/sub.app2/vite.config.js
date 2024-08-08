import { resolve } from "path";
import { defineConfig } from "vite";
import externalize from "vite-plugin-externalize-dependencies";


/** SUB APP VITE CONFIG */

export default defineConfig({
    root: resolve("./"),
    /** LOCAL DEVELOPMENT */
    server: {
        hmr: true,
        proxy: {
            "/api": {
                target: "http://localhost:8090/",
                changeOrigin: true
            }
        }
    },
    plugins: [
        externalize({
            externals: [
                (moduleName) => moduleName.includes("@mf")
            ]
        })
    ],
    /** PRODUCTION BUILD */
    build: {
        outDir: "build",
        emptyOutDir: true, // also necessary
        target: "esnext",
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(__dirname, "js/index.jsx"),
            name: "host-app",
            // the proper extensions will be added
            fileName: "index",
            formats: [ "es" ]
        },
        rollupOptions: {
            external: [
                /^@mf.*/
            ]
        }
    }
});
