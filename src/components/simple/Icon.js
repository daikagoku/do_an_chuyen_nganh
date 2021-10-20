import React from 'react';
import Component from './Component';
import '../../style/Icon.css'
const Icon = (function(){
	let count = 0;
	return function({...props}){
		const _Attr = {
			tag:"span",
			'data-type':'icon'
		};
		return(
			<Component
				{..._Attr}
				{...props}
			/>
		);
	};	
})();
export default Icon;