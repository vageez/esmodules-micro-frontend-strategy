(function () {

    /** SCRIPT ORIGIN */
    const origin = new URL(document.currentScript.src).origin;

    /** DEPENDENCIES */
    const importMap = {
        imports: {
            "@mf/react": "https://esm.sh/react@beta",
            "@mf/react-dom": "https://esm.sh/react-dom@beta/client",
            "@mf/react-router-dom": "https://esm.sh/react-router-dom?deps=react@beta,react-dom@beta/client&bundle=all",
            "@mf/sub-app1": "http://localhost:8077/index.mjs",
            "@mf/sub-app2": "http://localhost:8078/index.mjs"
        }
    };

    const script = document.createElement("script");
    script.type = "importmap";
    script.textContent = JSON.stringify(importMap);
    document.head.appendChild(script);
})();
