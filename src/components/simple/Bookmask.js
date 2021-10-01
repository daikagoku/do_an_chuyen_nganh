import React,{useRef} from 'react';
import '../../style/Bookmask.css'
const Bookmask = (function(){
	let count = 0;
	return function({className,text,...props}){
		const _Ref = useRef(null);
		let _Component='span';
		const _Attr={
			className:"bookmask"
		};
		if(className !== undefined){
			_Attr.className+=' '+className;
		};
		return(
			<span 
				key={count++}
				ref={_Ref}
				{..._Attr}
				{...props}
			>
				{text}
			</span>
		);
	};	
})();
export default Bookmask;