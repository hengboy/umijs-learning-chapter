import {defineConfig} from "umi";

export default defineConfig({
    routes: [
        {path: "/", component: "index"},
        {path: "/docs", component: "docs"},
        {path: "/login", component: "login", layout: false},
        {path: "/*", component: "@/pages/404", layout: false}
    ],
    npmClient: 'npm',
    proxy: {
        '/api': {
            'target': 'http://localhost:16000/',
            'changeOrigin': true,
            'pathRewrite': {'^/api': ''},
        }
    },
});
