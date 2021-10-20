import React from 'react';
import Component from './Component';
import '../../style/Item.css'
const Item = (function(){
	let count = 0;
	return function({children,...props}){
		const _Attr= {
			tag:"li",
			'data-type':'item'
		};
		return(
			<Component 
				{..._Attr}
				{...props}
			>
				{children}
			</Component>
		);
	};	
})();
export default Item;