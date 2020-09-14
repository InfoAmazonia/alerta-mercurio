import React from "react"
import Layout from "../components/layout/layout"
import Map from "../components/map/map"
import Reports from "../components/reports/reports"
import { Helmet } from 'react-helmet';

// Assets
import "./_storymap.scss";

export default function Home() {
  return (
	  <Layout>
		  <Helmet>]
			  <title>Mercúrio - InfoAmazonia</title>
			  <body className="storymap-page"/>
		  </Helmet>
		  <main id="content">
			  <Map />
		  </main>
		  <Reports />
	  </Layout>
  )
}
