import React,{useRef} from 'react';

const Badge = (function(){
	let count = 0;
	return function({className,text,...props}){
		const _Ref = useRef(null);
		let _Component='span';
		const _Attr={
			className:"badge"
		};
		if(className !== undefined){
			_Attr.className+=' '+className;
		};
		return(
			<_Component 
				key={count++}
				ref={_Ref}
				{..._Attr}
				{...props}
			>
				{text}
			</_Component>
		);
	};	
})();
export default Badge;