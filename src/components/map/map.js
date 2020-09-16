import React, { useEffect, useState } from "react";
import { Helmet } from 'react-helmet'
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"
import mapboxgl from 'mapbox-gl'
import Story from './story';
import "./_map.scss"

// Images
import DSC07454 from "!url-loader!../../images/fotos/DSC07454.jpg";
import banner from "!url-loader!../../images/banner.jpg";
import DSC07008 from "!url-loader!../../images/fotos/DSC07008.jpg";
import DSC07399 from "!url-loader!../../images/fotos/DSC07399.jpg";
import DSC07080 from "!url-loader!../../images/fotos/DSC07080.jpg";
import DSC07417 from "!url-loader!../../images/fotos/DSC07417.jpg";
import DSC07059 from "!url-loader!../../images/fotos/DSC07059.jpg";
import ChartEN from "!url-loader!../../images/charts/chart-storymap.png";
import ChartES from "!url-loader!../../images/charts/chart-storymap-es.png";
import ChartPT from "!url-loader!../../images/charts/chart-storymap-pt.png";
import Photo from "!url-loader!../../images/guyana/slider-2-2.jpg";
import MrWeeWee from "!url-loader!../../images/fotos/mr-wee-wee.jpg";

export default function Map() {
	const intl = useIntl();
	const [map,setMap] = useState(undefined);

	const chart = {
		"en": ChartEN,
		"es": ChartES,
		"pt": ChartPT
	}

	mapboxgl.accessToken = 'pk.eyJ1IjoiaW5mb2FtYXpvbmlhIiwiYSI6InItajRmMGsifQ.JnRnLDiUXSEpgn7bPDzp7g';

	useEffect(() => {
		setMap(
			new mapboxgl.Map({
				container: 'mapbox',
				style: 'mapbox://styles/infoamazonia/ckeoo9uuc0suk19r8pd61wics',
				center: [-61.923933,-2.0154164], // starting position [lng, lat]
				zoom: 3, // starting zoom
				interactive: false
			})
		);
	},[]);

	return (
		<div className="storymap">
			<div id="mapbox">
				<Helmet>
					<link href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />
				</Helmet>
			</div>
			<div className="stories">
				<Story map={map} coords={[-61.923933,-2.0154164]} zoom={3} intervalCheck={2000}>
					<h1><FormattedMessage id="storymaps.1.title" /></h1>
					<p><FormattedMessage id="storymaps.1.content" /></p>
				</Story>

				<Story map={map} image={DSC07454} coords={[-62.5073366,5.0346075]} zoom={5.5} >
					<h2><FormattedMessage id="storymaps.2.title" /></h2>
					<p><FormattedMessage id="storymaps.2.content" /></p>
				</Story>

				<Story map={map} image={banner} coords={[-59.3381676, 4.5815284]} zoom={7.5}>
					<h2><FormattedMessage id="storymaps.3.title" /></h2>
					<p><FormattedMessage id="storymaps.3.content" /></p>
				</Story>

				<Story map={map} image={DSC07008} coords={[-59.2494823, 5.2507228]} zoom={7.5}>
					<h2><FormattedMessage id="storymaps.4.title" /></h2>
					<p><FormattedMessage id="storymaps.4.content" /></p>
				</Story>

				<Story map={map} image={Photo} >
					<h2><FormattedMessage id="storymaps.5.title" /></h2>
					<p><FormattedMessage id="storymaps.5.content" /></p>
				</Story>

				<Story map={map} image={chart[intl.locale]} coords={[-57.4433631,5.9256205]} zoom={7.5} >
					<h2><FormattedMessage id="storymaps.6.title" /></h2>
					<p><FormattedMessage id="storymaps.6.content" /></p>
				</Story>

				<Story map={map} image={DSC07399}>
					<h2><FormattedMessage id="storymaps.7.title" /></h2>
				</Story>

				<Story map={map} image={DSC07080} coords={[-59.3381676, 4.5815284]} zoom={7.25}>
					<h2><FormattedMessage id="storymaps.8.title" /></h2>
					<p><FormattedMessage id="storymaps.8.content" /></p>
				</Story>

				<Story map={map} image={DSC07417} >
					<h2><FormattedMessage id="storymaps.9.title" /></h2>
					<p><FormattedMessage id="storymaps.9.content" /></p>
				</Story>

				<Story map={map} image={DSC07059} coords={[-56.021273,4.2622644]} zoom={7.25}>
					<h2><FormattedMessage id="storymaps.10.title" /></h2>
					<p><FormattedMessage id="storymaps.10.content" /></p>
				</Story>

				<Story map={map} coords={[-61.923933,-2.0154164]} zoom={5}>
					<h2><FormattedMessage id="storymaps.11.title" /></h2>
					<p><FormattedMessage id="storymaps.11.content" /></p>
				</Story>

				<Story map={map} image={MrWeeWee} coords={[-55.2467603,4.9680659]} zoom={7.5}>
					<h2><FormattedMessage id="storymaps.12.title" /></h2>
					<p><FormattedMessage id="storymaps.12.content" /></p>
				</Story>
			</div>
		</div>
	)
}
