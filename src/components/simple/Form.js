import React,{useRef} from 'react';
import '../../style/Button.css'
const Item = (function(){
	let count = 0;
	let active = {};
	return function({action,children,...props}){
		let _Component='form';
		const _ref = useRef(null);
		const _Attr= {
			'data-type':'form',
			action:"#"
		};
		if(action !== undefined){
			_Attr.action = action;
		}
		return(
			<_Component 
				data-key={count++}
				ref={_ref}
				{..._Attr}
				{...props}
			>
				{children}
			</_Component>
		);
	};	
})();
export default Item;