import React from "react";
import { FormattedMessage } from "gatsby-plugin-intl"
import "./_partners.scss";
import logoInfoamazonia from "../../images/logo-infoamazonia.src.svg";
import logoArmandoInfo from "../../images/logo-armando-info.src.svg";
import logoFantastico from "../../images/logo-fantastico.src.svg";
import logoGlobo from "../../images/logo-globo.src.svg";

export default function Partners() {
	return (
		<div className="partners">
			<p><FormattedMessage id="partners.title" /></p>
			<div className="partner-logos">
				<a href="https://infoamazonia.org/">
					<img src={logoInfoamazonia} alt="Logo InfoAmazonia"/>
				</a>
				<a href="https://armando.info/">
					<img src={logoArmandoInfo} alt="Logo Armando Info"/>
				</a>
				<a href="https://g1.globo.com/fantastico/noticia/2020/08/30/toneladas-de-mercurio-entram-clandestinamente-no-pais-para-abastecer-garimpo-de-ouro.ghtml?utm_source=twitter&utm_medium=organico&utm_campaign=social&utm_term=fant&utm_content=post">
					<img src={logoFantastico} alt="Logo Fantástico"/>
				</a>
				<a href="https://www.globo.com">
					<img src={logoGlobo} alt="Logo Globo"/>
				</a>
			</div>
		</div>
	)
}
