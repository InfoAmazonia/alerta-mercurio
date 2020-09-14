import React from "react"
import "./_photo.scss"

export default function Photo( { src, alt, children } ) {
	return (
		<figure>
			<img src={src} {...alt !== '' && `alt=${alt}` } />
			{children !== '' && <figcaption>{children}</figcaption> }
		</figure>

	 )
}
