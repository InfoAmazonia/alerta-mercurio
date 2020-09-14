import React, { useState } from "react"
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import uniqueId from 'lodash/uniqueId'
import "./_video.scss"

export default function Video( { url, title } ) {
	const [ id ] = useState(uniqueId('video-'))

	function videoid() {
		let video_url = url.split('/');
		return video_url.pop();
	}

	return (
		<ResponsiveEmbed aspectRatio="16by9" className="video-embed">
			<iframe title={id} loading="lazy" src={`${url}?&title=0&color=F26628&rel=0&badge=0&byline=0&loop=1&playlist=${videoid()}&modestbranding=1&showinfo=0`}></iframe>
		</ResponsiveEmbed>
	 )
}
