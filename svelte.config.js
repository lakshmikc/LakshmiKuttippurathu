import adapter from "@sveltejs/adapter-cloudflare";
import { mdsvex } from "mdsvex";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$components: path.resolve(__dirname, "./src/components")
		}
	},
	extensions: [".svelte", ".md"],
	preprocess: [
		mdsvex({
			extensions: [".md"],
			layout: "./src/components/BlogPost.svelte"
		})
	]
};

export default config;
