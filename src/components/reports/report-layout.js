import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { Helmet } from 'react-helmet';
import { useIntl, Link, FormattedMessage, FormattedDate, IntlProvider } from "gatsby-plugin-intl"
import Seo from "../seo/seo"
import Video from "../video/video"
import Sidenote from "../sidenote/sidenote"
import Gallery from "../gallery/gallery"
import Layout from "../layout/layout"
import Share from "../share/share"
import "./_report-layout.scss"

// Minimaps
import MinimapGuyana from "../../images/minimaps/guyana.svg"
import MinimapSuriname from "../../images/minimaps/suriname.svg"
import MinimapVenezuela from "../../images/minimaps/venezuela.svg"
import MinimapBrazil from "../../images/minimaps/brazil.svg"

// Localization {Hack}
import en from '../../lang/en.json'
import pt from '../../lang/pt.json'
import es from '../../lang/es.json'

const messages = { en, pt, es }

// Shortcodes
const shortcodes = { Video, Sidenote, Gallery }

export default function ReportLayout({ children, meta, pageContext, location }) {
	const intl = useIntl()
	intl.locale = pageContext.frontmatter.lang

	const flattenMessages = (nestedMessages, prefix = '') => {
		return Object.keys(nestedMessages).reduce((messages, key) => {
			let value = nestedMessages[key]
			let prefixedKey = prefix ? `${prefix}.${key}` : key

			if (typeof value === 'string') {
				messages[prefixedKey] = value
			} else {
				Object.assign(messages, flattenMessages(value, prefixedKey))
			}

			return messages
		}, {})
	}

	const capitalize = (s) => {
		if (typeof s !== 'string') return ''
		return s.charAt(0).toUpperCase() + s.slice(1)
	}

	const pageMeta = {
		"Guyana": {
			"map": <MinimapGuyana />,
		},
		"Guiana": {
			"map": <MinimapGuyana />,
		},
		"Suriname": {
			"map": <MinimapSuriname />,
		},
		"Venezuela": {
			"map": <MinimapVenezuela />,
		},
		"Brazil": {
			"map": <MinimapBrazil />,
		},
		"Brasil": {
			"map": <MinimapBrazil />,
		},
		"Gold": {
			"map": false,
		},
	}

	const currentPage = pageContext.frontmatter.title;
	const next = meta.next || null;
	const map = pageMeta[currentPage].map;
	const pageTitle = `${currentPage} | InfoAmazonia`

	return (
		<IntlProvider locale={intl.locale} messages={flattenMessages(messages[intl.locale])}>
			<Helmet title={pageTitle} />
			<Seo 
				title={meta.title}
				description={meta.intro}
				image={`/images/${pageContext.frontmatter.path.replace('/','')}.jpg`}
		    />
			<Layout>
				<main id="content">
					<article id="report">
						<header id="report-header">
							<img className="report-image" src={meta.image} alt=""/>
							<div className="report-header-content">
								<div className="report-map">
									{map && map}
									{map && <p className="report-label">{currentPage}</p>}
								</div>
								<p className="report-meta">
									<FormattedDate
										value={ pageContext.frontmatter.date }
										day="numeric"
										month="long"
										year="numeric" />
								</p>
								<h1 className="report-title">{meta.title}</h1>
								<p className="report-intro lead">{meta.intro}</p>
								<p className="report-credits">{meta.by}</p>
								<Share pathname={`/${intl.locale}${pageContext.frontmatter.path}/`} />
							</div>
						</header>

						<div id="report-content">
							<MDXProvider components={shortcodes}>
								{children}
							</MDXProvider>
						</div>
						<footer className="report-footer">
							<Share />
						</footer>
					</article>

					{next &&
						<div className="next-report">
							<Link to={intl.locale === 'en' ? `/${meta.next.slug}` : `/${intl.locale}/${meta.next.slug}` } className="next-report-grid">
								<div className="next-report-map">
									{pageMeta[capitalize(next.slug)].map}
								</div>
								<div className="next-report-text">
									<p className="report-label"><FormattedMessage id={`countries.${meta.next.slug}`} /></p>
									<h2>{meta.next.title}</h2>
									<p>{meta.next.description}</p>
									<span className="read-more"><FormattedMessage id="action.read" /></span>
								</div>
							</Link>
						</div>
					}
				</main>
			</Layout>
		</IntlProvider>
	)
}
