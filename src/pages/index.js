import React, { useEffect } from "react"
import Layout from "../components/layout/layout"
import Reports from "../components/reports/reports"
import Gold from "../components/gold/gold"
import { Helmet } from 'react-helmet';
import { changeLocale, FormattedMessage, Link, useIntl } from "gatsby-plugin-intl"

// Assets
import "./_index.scss"
import sectionImg from "!url-loader!../images/storymap.jpg";

const localeTags = {
	pt: "pt-BR",
	es: "es",
	en: "en"
}

export default function Home() {
	const intl = useIntl()

	useEffect(() => {
		let lang = navigator.language;
		let lang_code = lang.split('-')[0]

		if ( 'pt' === lang_code || 'en' === lang_code || 'es' === lang_code ) {
			if ( window.location.pathname === '/' ) {
				changeLocale( lang_code )
			}
		}
	},[])

	return (
		<Layout>
			<Helmet title={intl.formatMessage( {id: `site.title`} )} >
				<html lang={localeTags[intl.locale]} />
				<script async src={`https://www.googletagmanager.com/gtag/js?id=UA-32852801-5`}></script>
				<script>
					{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', "UA-32852801-5");
					`}
				</script>
			</Helmet>

			<main id="content">
				<section className="home-section section-storymap">
					<div className="section-content">
						<h2><FormattedMessage id="storymap.section.title" /></h2>
						<p className="lead"><FormattedMessage id="storymap.section.text" /></p>
						<Link className="read-more" to="/storymap"><FormattedMessage id="action.read" /></Link>
					</div>
					<img className="section-image" src={sectionImg} alt=""/>
				</section>
				<Reports />
				<Gold />
			</main>
		</Layout>
	)
}
