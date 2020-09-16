/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const { lazy } = require("react");

module.exports = {
	siteMetadata: {
		title: 'Infoamazonia - Mercúrio',
		description: 'Mercúrio, uma chaga na floresta amazônica.',
		siteURL: 'https://mercurio.infoamazonia.org',
		image: "/images/mercury.jpg", // Path to your image you placed in the 'static' folder
	    twitterUsername: "@infoamazonia",
	},
	plugins: [
		 `gatsby-plugin-react-helmet`,
		 {
			resolve: `gatsby-plugin-manifest`,
			options: {
			  name: "Infoamazonia - Mercury",
			  short_name: "Infoamazonia",
			  start_url: "/",
			  background_color: "#FFFFFF",
			  theme_color: "#73a229",
			  // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
			  // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
			  display: "standalone",
			  icon: "src/images/favicon.png", // This path is relative to the root of the site.
			  // An optional attribute which provides support for CORS check.
			  // If you do not provide a crossOrigin option, it will skip CORS for manifest.
			  // Any invalid keyword or empty string defaults to `anonymous`
			  crossOrigin: `use-credentials`,
			},
		  },
		 `gatsby-plugin-sass`,
		 `gatsby-transformer-sharp`,
		 `gatsby-plugin-sharp`,
		 `gatsby-remark-images`,
		 {
			 resolve: `gatsby-plugin-mdx`,
			 options: {
				 defaultLayouts: {
					 default: require.resolve("./src/components/reports/report-layout.js"),
				 },
				 gatsbyRemarkPlugins: [
					{
					  resolve: `gatsby-remark-images`,
					  options: {
						maxWidth: 1200,
						linkImagesToOriginal: false,
						loading: `lazy`,
						quality: 80,
						withWebp: true,
					  },
					},
				],
			 },
		 },
		 {
		     resolve: `gatsby-source-filesystem`,
		     options: {
			     name: `images`,
			     path: `${__dirname}/src/images`,
			 },
		 },
		 {
			 resolve: "gatsby-source-filesystem",
			 options: {
				 name: "fonts",
				 path: `${__dirname}/static/fonts/`
			 },
		 },
		 {
			resolve: `gatsby-source-filesystem`,
			options: {
			  name: `pages`,
			  path: `${__dirname}/src/pages/`,
			},
		 },
		 {
			resolve: 'gatsby-plugin-i18n',
			options: {
				langKeyDefault: 'en',
				useLangKeyLayout: false,
				prefixDefault: false,
			},
		 },
		 {
			 resolve: `gatsby-plugin-intl`,
			 options: {
				 // language JSON resource path
				 path: `${__dirname}/src/lang`,
				 // supported language
				 languages: [`en`, `pt`, `es`],
				 // language file path
				 defaultLanguage: `en`,
				 // option to redirect to `/en` when connecting `/`
				 redirect: false,
			 },
		 },
		 {
			 resolve: 'gatsby-plugin-react-svg',
			 options: {
				 rule: {
					 exclude: /\.src\.svg$/,
				 },
			 },
		 },
	 ],
 }
