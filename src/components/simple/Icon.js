import React,{useRef} from 'react';

const Icon = (function(){
	let count = 0;
	return function({className,...props}){
		const _Ref = useRef(null);
		let _Component='span';
		const _Attr = {
			'data-type':'icon'
		};
		if(className !== undefined){
			_Attr.className+=' '+className;
		};

		return(
			<_Component data-key={count++}data-type="icon"ref={_Ref}{..._Attr}{...props}/>
		);
	};	
})();
export default Icon;