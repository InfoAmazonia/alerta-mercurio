import React from 'react';
import './_icon.scss';

let fileList = require.context('./icons', true, /[\s\S]*$/);
let iconMap = {};
fileList.keys().forEach(fileName => {
	fileName = fileName.replace('./', '');
	iconMap[fileName.replace('.svg', '')] = require(`!svg-inline-loader!./icons/${fileName}`);
});

const Icon = props => {
	return (
		<span className={`icon icon-${props.slug}`}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				aria-hidden="true"
				dangerouslySetInnerHTML={{__html: iconMap[props.slug]}}/>
		</span>
	)
}

export default Icon
