import React,{useRef} from 'react';

const Icon = (function(){
	let count = 0;
	return function({...props}){
		const _ref = useRef(null);
		let _Component='span';
		const _Attr = {
			'data-type':'icon'
		};
		return(
			<_Component 
				data-key={count++}
				ref={_ref}
				{..._Attr}
				{...props}
			/>
		);
	};	
})();
export default Icon;