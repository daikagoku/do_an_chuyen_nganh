import React,{useRef} from 'react';
import '../../style/Item.css'
const Item = (function(){
	let count = 0;
	return function({children,...props}){
		let _Component='li';
		const _ref = useRef(null);
		const _Attr= {
			'data-type':'item'
		};

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