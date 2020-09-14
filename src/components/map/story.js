import React, { useRef } from "react"
import "./_story.scss"
import useVisibilitySensor from "@rooks/use-visibility-sensor"

export default function Story({children, image, map, coords, zoom}) {
	const rootNode = useRef(null);
	
	const { isVisible } = useVisibilitySensor(rootNode, {
        intervalCheck: false,
        scrollCheck: true,
		resizeCheck: true,
		partialVisibility: true
	});

	const fly = () => {
		if ( map !== undefined && Array.isArray( coords ) ) {
			map.flyTo({
				center: coords,
				speed: 0.5,
				zoom: zoom || 5
			});
		}
	}
	
	return (
		<div ref={rootNode} className="story">
			{isVisible && fly() }
			{image && <img alt="" src={image} /> }
			<div className="story-content">
				{children}
			</div>
		</div>
	)
}
