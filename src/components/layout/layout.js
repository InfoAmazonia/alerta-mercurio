import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import "../../styles/_global.scss";
import "./_layout.scss";

export default function Layout({ children }) {
	return (
		<div>
			<Header />
			{children}
			<Footer />
		</div>
	)
}
