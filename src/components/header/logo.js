import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import './_logo.scss';

export default function Header() {
	const intl = useIntl();
	const logo = require(`!svg-inline-loader!../../images/logo-${intl.locale}.svg`);

	return (
		<div className="logo">
			<svg
				className="logo-svg"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 219.71 94.57"
				aria-hidden="true"
				dangerouslySetInnerHTML={{__html: logo}}/>
		</div>
	)
}
