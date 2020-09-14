import React from "react"
import Dropdown from 'react-bootstrap/Dropdown';
import { FormattedMessage, formatMessage, useIntl } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from 'gatsby';
import Icon from "../icon/icon"
import "./_share.scss"

export default function Share({ pathname }) {
	const intl = useIntl();

	const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          siteURL
        }
      }
    }
  `)

	const socialShare = [
		{
			name: `facebook`,
			link: `https://www.facebook.com/sharer/sharer.php?u=${data.site.siteMetadata.siteURL}${pathname}`
		},
		{
			name: `twitter`,
		 	link: `https://twitter.com/home?status=${data.site.siteMetadata.siteURL}${pathname}`
		},
		{
			name: `whatsapp`,
			link: `https://api.whatsapp.com/send?text=${data.site.siteMetadata.siteURL}${pathname}`,
		},
		{
			name: `email`,
			link: `mailto:info@example.com?&subject=&body=${data.site.siteMetadata.siteURL}${pathname}`,
		},
	];

	return (
		<Dropdown className="social-share">
			<Dropdown.Toggle>
				<Icon slug="share" /> <FormattedMessage id="social.share" />
			</Dropdown.Toggle>

			<Dropdown.Menu>
				{socialShare.map(social => (
					<a href={`${social.link}`} className={`dropdown-item social social-${social.name}`} title={intl.formatMessage({ id: `social.name` })}>
						{social.name}
					</a>
				))}
			</Dropdown.Menu>
		</Dropdown>
	)
}