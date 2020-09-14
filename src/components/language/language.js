import React from "react"
import { IntlContextConsumer, changeLocale, useIntl } from "gatsby-plugin-intl"
import Dropdown from 'react-bootstrap/Dropdown';
import Icon from "../icon/icon"
import "./_language.scss";

const languageName = {
  en: "English",
  pt: "Português",
  es: "Español",
}

const Language = () => {
	const intl = useIntl()

	function slug() {
		let pathname = window.location.pathname.split('/')
		let parts = pathname.filter(part => part !== 'en' && part !== 'pt' && part !== 'es' );

		return parts.join('/');
	}

	return (
		<Dropdown className="language-switch">
			<Dropdown.Toggle>
				{intl.locale}<Icon slug="caret" />
			</Dropdown.Toggle>

			<Dropdown.Menu>
				<IntlContextConsumer>
					{({ languages, language: currentLocale }) =>
						languages.map(language => (
							<Dropdown.Item
								key={language}
								onClick={() => changeLocale(language, slug())}
								className={`${ language === currentLocale ? "active" : ""}`}>
								{languageName[language]}
							</Dropdown.Item>
						))
					}
				</IntlContextConsumer>
			</Dropdown.Menu>
		</Dropdown>
	)
}

export default Language
