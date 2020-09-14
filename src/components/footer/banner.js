import React from "react";
import Logo from "../header/logo";
import Social from "../social/social";

import "./_banner.scss";
import sectionImg from "!url-loader!../../images/banner.jpg";


export default function Banner() {
	return (
		<div className="banner">
			<img className="section-image" src={sectionImg} alt=""/>
			<div className="banner-content container">
				<Logo />
				<Social />
			</div>
		</div>
	)
}
