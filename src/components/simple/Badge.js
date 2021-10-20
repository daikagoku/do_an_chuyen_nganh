import React from 'react';
import Component from './Component';
const Badge = (function(){
	let count = 0;
	return function({className,text,...props}){
		const _Attr={
			tag:"span",
			className:"badge"
		};
		if(className !== undefined){
			_Attr.className+=' '+className;
		};
		return(
			<Component
				{..._Attr}
				{...props}
			>
				{text}
			</Component>
		);
	};	
})();
export default Badge;