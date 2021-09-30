import React,{useRef} from 'react';

const Image = (function(){
	let count = 0;
	return function({src,...props}){
		let _Attr = {
			'data-type':"image"
		}
		const _Ref = useRef(null);
		if(src !== undefined){
			_Attr['data-src']=src;
		}
		return(
			<img 
				key={count++}
				ref={_Ref}
				{..._Attr}
				{...props}
			/>
		);
	};	
})();
export default Image;