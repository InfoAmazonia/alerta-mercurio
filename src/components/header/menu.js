import React, { useState } from "react"
import { Link, FormattedMessage } from "gatsby-plugin-intl"
import Icon from "../icon/icon"
import Social from "../social/social"
import "./_menu.scss"
import MenuMap from "./menu-map"

const Menu = () => {
	const [open, setOpen] = useState(false);
	const  toggleMenu = () => {
		setOpen(!open);
	};

	return (
		<nav className="main-navigation">
			<button onClick={toggleMenu} className="menu-toggler" type="button" data-toggle={open} data-target="#main-menu" aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
		      <Icon slug="menu" />
		    </button>
			<div id="main-menu" className={`menu-collapse ${open ? "show" : "collapse"}`} data-toggle={open}>
				<button onClick={toggleMenu} className="menu-close" type="button" data-toggle={open} data-target="#main-menu" aria-controls="main-menu" aria-expanded="false" aria-label="Close navigation">
			      X
			    </button>
				<div className="container">
					<ul className="menu">
						<li className="menu-item">
							<Link onClick={toggleMenu} className="menu-link" to="/">
								<FormattedMessage id="menu.home" />
							</Link>
						</li>
						<li className="menu-item">
							<Link onClick={toggleMenu} className="menu-link" to="/storymap">
								<FormattedMessage id="menu.storymap" />
							</Link>
						</li>
						<li className="menu-item">
							<Link onClick={toggleMenu} className="menu-link" to="/#about">
								<FormattedMessage id="menu.project" />
							</Link>
						</li>
						<li className="menu-item">
							<Link onClick={toggleMenu} className="menu-link" to="/gold">
								<FormattedMessage id="menu.trafficking" />
							</Link>
						</li>
						<li className="menu-item">
							Navegue por país
						</li>
					</ul>
				</div>
				<MenuMap className="menu-map" />
				<Social />
			</div>
		</nav>
	)
}
export default Menu
