import React, { useState } from "react"
import Slider from "react-slick"
import uniqueId from 'lodash/uniqueId'
import { FormattedMessage } from "gatsby-plugin-intl"
import "./_gallery.scss"
import "./_slick.scss"
import Photo from './photo'
import Arrow from "../../images/arrow-slider.svg";

export default function Gallery( { children } ) {
	const gallerySlider = React.createRef();

	const [settings, setSettings] = useState({
		lazyLoad: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1.1,
		slidesToScroll: 1,
		variableWidth: true,
		arrows: false
	})

	const gotoNext = () => {
       gallerySlider.current.slickNext()
     }

	return (
		<div className="gallery">
	        <Slider {...settings} ref={gallerySlider}>
				{children}
	        </Slider>
			<button className="gallery-next" onClick={gotoNext}>
				<Arrow /><span className="sr-only"><FormattedMessage id="action.next" /></span>
			</button>
		</div>
	 )
}
