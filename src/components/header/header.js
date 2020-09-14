import React, { useState, useEffect } from "react";
import { Link } from "gatsby-plugin-intl"

import Menu from "./menu";
import Logo from "./logo";
import Partners from "./partners";
import Social from "../social/social";
import Language from "../language/language";
import "./_header.scss";

export default function Header() {
	const [scrolled, setScrolled] = useState(true);

	useEffect(() => {
		document.addEventListener("scroll", () => {
			window.scrollY < 70 ? setScrolled(true) : setScrolled(false);
		});
	},[]);

	return (
		<header id="header" className={ scrolled ? "header-expanded" : "header-shrink" }>
			<div className="container">
				<div className="header-actions">
					<Menu />
					<Social />
					<Language />
				</div>
				<h1 className="site-logo">
					<Link className="site-link" to="/">
						<Logo /><span className="sr-only">Logo</span>
					</Link>
				</h1>
				<Partners />
			</div>
		</header>
	)
}
