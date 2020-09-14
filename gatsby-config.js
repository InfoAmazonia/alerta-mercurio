/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const { lazy } = require("react");

module.exports = {
	siteMetadata: {
		title: 'Infoamazônia - Mercúrio',
		description: 'Mercúrio, uma chaga na floresta amazônica.',
		siteURL: 'https://mercurio.infoamazonia.org',
		image: "/images/site-metaimage.jpg", // Path to your image you placed in the 'static' folder
	    twitterUsername: "@infoamazonia",
	},
	plugins: [
		 `gatsby-plugin-react-helmet`,
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
