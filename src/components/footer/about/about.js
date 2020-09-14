import React from "react";
import "./_about.scss";
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"
import AboutEN from "./about.en.mdx"
import AboutPT from "./about.pt.mdx"
import AboutES from "./about.es.mdx"
import logoInfoamazonia from "../../../images/logo-infoamazonia.src.svg";
import logoArmandoInfo from "../../../images/logo-armando-info.src.svg";
import logoFantastico from "../../../images/logo-fantastico.src.svg";
import logoGlobo from "../../../images/logo-globo.src.svg";
import logoIucn from "!url-loader!../../../images/logo-iucn.png";
import logoPulitzer from "../../../images/logo-pulitzer.src.svg";

export default function Header() {
	const intl = useIntl()

	return (
		<div id="about">
			<div className="container">
				<h2 className="about-title">
					<FormattedMessage id="footer.about" />
				</h2>
				<div className="about-content">
					<div className="project-description">
						{ intl.locale === 'en' &&
							<AboutEN />
						}
						{ intl.locale === 'pt' &&
							<AboutPT />
						}
						{ intl.locale === 'es' &&
							<AboutES />
						}
					</div>
					<div className="credits">

						<h3><FormattedMessage id="footer.project_team.title" /></h3>
						<h4><FormattedMessage id="footer.project_team.lead_investigator" /></h4>
						<ul>
							<li>Bram Ebus</li>
						</ul>

						<h4><FormattedMessage id="footer.project_team.reporters" /></h4>
						<ul>
							<li>Fabiano Villela (Fantástico-TV Globo)</li>
							<li>G. I. Sutherland (Stabroek News)</li>
							<li>Fábio Diniz (Fantástico-TV Globo)</li>
							<li>Marcelo Marques (Fantástico - TV Globo)</li>
							<li>Marcos David Valverde (Armando Info)</li>
							<li>Sam Cowie (InfoAmazonia)</li>
							<li>Sônia Bridi (Fantástico TV Globo)</li>
							<li>Wilfred Leeuwin (De Ware Tijd)</li>
							<li>Tom Laffay (InfoAmazonia)</li>
						</ul>

						<h4><FormattedMessage id="footer.project_team.project_coordinator" /></h4>
						<ul>
							<li>Gustavo Faleiros (InfoAmazonia)</li>
						</ul>

						<h4><FormattedMessage id="footer.project_team.editor_in_chief" /></h4>
						<ul>
							<li>Kate Wheeling (InfoAmazonia)</li>
						</ul>

						<h4><FormattedMessage id="footer.project_team.editors" /></h4>
						<ul>
							<li>Cristine Kist (Fantástico - TV Globo)</li>
							<li>Ewald Scharfenberg (Armando Info)</li>
							<li>Fillipi Nahar (Fantástico - TV Globo)</li>
							<li>Gustavo Faleiros (InfoAmazonia)</li>
							<li>Patricia Marcano (Armando Info)</li>
						</ul>

						<h4><FormattedMessage id="footer.project_team.producers" /></h4>
						<ul>
							<li>James Alberti (Fantástico - TV Globo)</li>
							<li>Mônica Reolom (Fantástico - TV Globo)</li>
						</ul>

						<h4>Videos</h4>
						<ul>
							<li>Erik Von Poser (Fantástico - TV Globo)</li>
							<li>Luiz Felipe Saleh (Fantástico - TV Globo)</li>
							<li>Rafael Norton (Fantástico - TV Globo)</li>
							<li>Tom Laffay (InfoAmazonia)</li>
						</ul>

						<h4><FormattedMessage id="footer.project_team.website" /></h4>
						<ul>
							<li><a href="http://www.datadotestudio.com/">Datadot</a></li>
							<li><a href="http://www.hastedesign.com.br/">Haste</a></li>
						</ul>

						<h4><FormattedMessage id="footer.project_team.translations" /></h4>
						<ul>
							<li>Angelica Baldelomar (English)</li>
							<li>Jerusa Rodrigues (Portuguese)</li>
							<li>Melanie Morazzani de Casanova (Spanish)</li>
						</ul>

						<h4><FormattedMessage id="footer.project_team.social_media" /></h4>
						<ul>
							<li>Laura Clisánchez</li>
						</ul>


						<h3><FormattedMessage id="footer.documentary_team.title" /></h3>

						<h4><FormattedMessage id="footer.documentary_team.direction" /></h4>
						<ul>
							<li>Tom Laffay</li>
						</ul>

						<h4><FormattedMessage id="footer.documentary_team.lead_investigator" /></h4>
						<ul>
							<li>Bram Ebus</li>
						</ul>

						<h4><FormattedMessage id="footer.documentary_team.producer" /></h4>
						<ul>
							<li>Gustavo Faleiros</li>
						</ul>

						<h4><FormattedMessage id="footer.documentary_team.editor" /></h4>
						<ul>
							<li>J.C. Van´t Kruis</li>
						</ul>

						<h4><FormattedMessage id="footer.documentary_team.investigators" /></h4>
						<ul>
							<li>Tom Laffay</li>
							<li>Gaulbert Sutherland</li>
							<li>Wilfred Leeuwin</li>
						</ul>

						<h4><FormattedMessage id="footer.documentary_team.narrator" /></h4>
						<ul>
							<li>Abel Harris</li>
						</ul>

						<h4><FormattedMessage id="footer.documentary_team.motion_design" /></h4>
						<ul>
							<li>Sérgio Castro</li>
						</ul>

						<h4><FormattedMessage id="footer.documentary_team.sound_design" /></h4>
						<ul>
							<li>J.C. Van´t Kruis</li>
						</ul>

						<h4><FormattedMessage id="footer.documentary_team.creative_consultant" /></h4>
						<ul>
							<li>Emily Wright</li>
						</ul>

						<h4><FormattedMessage id="footer.documentary_team.second_editor" /></h4>
						<ul>
							<li>Tom Laffay</li>
						</ul>
					</div>
					<div className="footer-partners">
						<h4><FormattedMessage id="partners.title" /></h4>
						<div className="logo-list">
							<img src={logoArmandoInfo} alt="Logo ArmandoInfo"/>
							<img src={logoFantastico} alt="Logo Fantástico"/>
							<img src={logoGlobo} alt="Logo Globo"/>
						</div>

						<h4><FormattedMessage id="footer.supported" /></h4>
						The Rainforest Journalism Fund @
						<div className="logo-list">
							<img src={logoPulitzer} alt="Logo Pulitzer Center"/>
							<img src={logoIucn} className="inverted" alt="Logo IUCN"/>
						</div>
					</div>
				</div>
				<div className="copyright">
					&copy; 2020
					<img src={logoInfoamazonia} className="inverted" alt="InfoAmazonia"/>
				</div>
			</div>
		</div>
	)
}
