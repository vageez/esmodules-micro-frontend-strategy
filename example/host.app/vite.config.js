import { resolve } from "path";
import { defineConfig } from "vite";
import externalize from "vite-plugin-externalize-dependencies";

const importMapPlugin = () => {
    return {
        name: 'html-transform',
        transformIndexHtml(html) {
            const importMapRegex =
                /<script .*? data-src-type="importmap".*?>.*?<\/script>/;
            const importMap = html.match(importMapRegex)?.[0];

            if (!importMap) {
                return html;
            }

            return html.replace(/<head>/, `<head>\n\t\t${importMap}`)
        },
    }
}

export default defineConfig({
    root: resolve("./"),
    server: {
        hmr: true,
        proxy: {
            /**
             * FOR NOW IMPORT MAP POINTS TO LOCALLY BUILT FILES
             * AS LOCALLY BUILT FILES DO NOT HAVE {sub-app} name in path
             * SO PROXY CANNOT BE LEVERAGED
             * */
            "sub-app1": {
                target: "http://localhost:8077/build/"
            },
            "sub-app2": {
                target: "http://localhost:8078/build/"
            },
            "/api": {
                target: "http://localhost:8090/",
                changeOrigin: true
            }
        }
    },
    plugins: [
        externalize({
            externals: [
                (moduleName) => moduleName.includes("@mf/")
            ]
        }),
        importMapPlugin()
    ],
    // PRODUCTION BUILD
    build: {
        outDir: "build",
        emptyOutDir: true, // also necessary
        target: "esnext",
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(__dirname, "src/index.jsx"),
            name: "host-app",
            // the proper extensions will be added
            fileName: "index",
            formats: [ "es" ]
        },
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html")
            },
            external: [
                /^@mf\/.*/
            ]
        }
    }
});
