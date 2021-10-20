import React,{useRef} from 'react';
import Component from './Component';
import '../../style/Form.css'
const Item = (function(){
	let count = 0;
	let active = {};
	return function({action,children,...props}){
		const _ref = useRef(null);
		const _Attr= {
			tag:"form",
			'data-type':'form',
			action:"#"
		};
		if(action !== undefined){
			_Attr.action = action;
		}
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