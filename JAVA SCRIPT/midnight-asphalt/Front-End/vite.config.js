import { defineConfig } from "vite";

export default defineConfig({
    server: {
        port: 5173,
        proxy: {
            'api': 'http://localhost:5000'
        }
    }
})
//Isso configura um proxy para que chamadas à API (/api) sejam redirecionadas para o backend.

