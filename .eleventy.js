import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("./src/base.css");
	eleventyConfig.addPassthroughCopy("./src/pain.png");

	eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		defaultAttributes: {
			loading: "lazy",
			decoding: "async",
		},
	});

	return {
		dir: {
			input: "src",
			output: "public",
		},
	};
}
