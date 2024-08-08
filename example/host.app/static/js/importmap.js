(function () {

    /** SCRIPT ORIGIN */
    const origin = new URL(document.currentScript.src).origin;

    /** DEPENDENCIES */
    const importMap = {
        imports: {
            "@mf/react": "https://esm.sh/react",
            "@mf/react-dom": "https://esm.sh/react-dom/client",
            "@mf/react-router-dom": "https://esm.sh/react-router-dom?deps=react,react-dom/client&bundle=all",
            "@mf/react-error-boundary": "https://esm.sh/react-error-boundary?deps=react,react-dom/client&bundle=all",
            "@mf/sub-app1": "http://localhost:8077/build/index.mjs",
            "@mf/sub-app2": "http://localhost:8078/build/index.mjs"
        }
    };

    const script = document.createElement("script");
    script.type = "importmap";
    script.textContent = JSON.stringify(importMap);
    document.head.appendChild(script);
})();
