import { defineConfig } from "vite";
import path, { resolve } from "node:path";
import * as glob from "glob";

import HtmlCssPurgePlugin from "vite-plugin-purgecss";
import HandleBarsPlugin from "vite-plugin-handlebars";

import getData from "./data/index";

function getHtmlFiles() {
    return Object.fromEntries(
        glob.sync(
            "./**/*.html", { 
                ignore: [
                    './dist/**/*.html',
                    './node_modules/**'
                ]
            }
        ).map((file) => {
            return [
                file.slice(0, file.length - path.extname(file).length),
                resolve(__dirname, file)
            ]
        })
    );
}

export default defineConfig(
    {
        appType: 'mpa',
        base: process.env.DEPLOY_BASE_URL ?? '/',
        build: {
            rollupOptions: {
                input: getHtmlFiles(),
            }
        },
        plugins: [
            HandleBarsPlugin({
                partialDirectory: resolve(__dirname, "components"),
                context: (page)=> {
                    return getData(page);
                }
            }),
            HtmlCssPurgePlugin()
        ]
    }
);