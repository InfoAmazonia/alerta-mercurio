import React from "react"
import { Helmet } from 'react-helmet'
import Header from "../header/header"
import Footer from "../footer/footer"
import "../../styles/_global.scss"
import "./_layout.scss"

export default function Layout({ children }) {
	return (
		<div>
			<Helmet>
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
			<Header />
			{children}
			<Footer />
		</div>
	)
}
