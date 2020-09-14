import React from "react";
import { Link, FormattedMessage } from "gatsby-plugin-intl"

import "./_gold.scss";
import sectionImg from "!url-loader!../../images/ouro.jpg";

export default function Gold() {
	return (
		<div className="section-gold">
			<div className="section-content">
				<h2><FormattedMessage id="gold.section.title" /></h2>
				<div className="section-gold-text">
					<p className="lead"><FormattedMessage id="gold.section.text" /></p>
					<Link className="read-more" to="/gold"><FormattedMessage id="action.read" /></Link>
				</div>
			</div>
			<img className="section-image" src={sectionImg} alt=""/>
		</div>
	)
}
