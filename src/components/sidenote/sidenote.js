import React from "react"
import "./_sidenote.scss"

export default function Sidenote( { children, side, title } ) {
	return (
		<div className={`sidenote ${side}`}>
			{title && <h2>{title}</h2>}
			{children}
		</div>
	 )
}
