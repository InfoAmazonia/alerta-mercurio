import React from "react";
import { Link, FormattedMessage } from "gatsby-plugin-intl"
import Icon from "../icon/icon"

// Assets
import "./_reports.scss";
import guyana from "!url-loader!../../images/fotos/DSC07021.jpg";
import suriname from "!url-loader!../../images/fotos/suriname-900.jpg";
import venezuela from "!url-loader!../../images/venezuela/8.jpg";
import brazil from "!url-loader!../../images/fotos/GP1SU06V_High_res.jpg"

export default function Reports() {

	const countries = [
		`guyana`,
		`suriname`,
		`venezuela`,
		`brazil`
	];

	const images = {
		'brazil': brazil,
		'guyana': guyana,
		'suriname': suriname,
		'venezuela': venezuela
	}

	return (
		<div className="reports">
			<div className="reports-header">
				<h2 className="container">
					<FormattedMessage id="reports.title" /><Icon slug="caret" />
				</h2>
			</div>
			<div className="reports-grid">
				{countries.map(country => (
					<Link to={`/${country}`} className={`report report-${country}`}>
						<img className="report-image" src={images[country]} alt=""/>
						<div className="report-text">
							<h3 className="report-title"><FormattedMessage id={`reports.${country}.title`} /></h3>
							<p className="report-description"><FormattedMessage id={`reports.${country}.description`} /></p>
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}
