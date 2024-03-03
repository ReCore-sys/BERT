import { defineConfig } from "wxt";
import { svelte, vitePreprocess } from "@sveltejs/vite-plugin-svelte";
//@ts-ignore
import reactiveCSSPreprocessor from "svelte-reactive-css-preprocess";

// See https://wxt.dev/api/config.html
export default defineConfig({
    srcDir: "src",
    vite: () => ({
        plugins: [
            svelte({
                // Using a svelte.config.js file causes a segmentation fault when importing the file
                configFile: false,
                preprocess: [vitePreprocess(), reactiveCSSPreprocessor()],
            }),
        ],
    }),
    manifest: {
        permissions: ["storage"],
        description: "Bert is here to help you take time for yourself",
        version: "0.0.1",
        author: "Kieran Shore",
    },
});
