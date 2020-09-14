import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import Icon from "../icon/icon"
import "./_social.scss"

export default function Social() {
	const intl = useIntl();
	const socialMedias = [
		{
			name: `facebook`,
			link: `https://www.facebook.com/infoamazonia`
		},
		{
			name: `instagram`,
			link: `https://www.instagram.com/infoamazonia/`,
		},
		{
			name: `twitter`,
		 	link: `https://twitter.com/infoamazonia`
		},
	];

	return (
		<div className="social-links">
			{socialMedias.map(social => (
				<a href={`${social.link}`} className={`social social-${social.name}`} title={intl.formatMessage({ id: `social.${social.name}.link_label` })}>
					<Icon slug={social.name}/>
				</a>
			))}
		</div>
	)
}
