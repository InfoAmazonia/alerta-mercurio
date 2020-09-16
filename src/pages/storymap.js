import React from "react"
import loadable from '@loadable/component'
import Layout from "../components/layout/layout"
import Reports from "../components/reports/reports"
import Seo from "../components/seo/seo"
import { Helmet } from 'react-helmet';
import { useIntl } from "gatsby-plugin-intl"

// Assets
import "./_storymap.scss";

// Lazy
const Map = loadable(() => import('../components/map/map'));

export default function Home() {
  const intl = useIntl()
  
  return (
	  <Layout>
			<Helmet>
				<title>Mercúrio - InfoAmazonia</title>
				<body className="storymap-page"/>
			</Helmet>
			<Seo
				title={intl.formatMessage( {id: `seo.storymap.title`} )}
				description={intl.formatMessage( {id: `seo.storymap.description`} )}
			/>
			<main id="content">
				<Map />
			</main>
		  <Reports />
	  </Layout>
  )
}
