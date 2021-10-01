import React,{useRef} from 'react';
import '../../style/Button.css'
const Button = (function(){
	let count = 0;
	let active = {};
	return function({href,dataLevel,children,onClick,...props}){
		let _Component='button';
		const _Attr= {
			'data-type':'button'
		};
		let _dataLevel = 0;
		if(dataLevel !== undefined && !Number.isNaN(parseInt(dataLevel))){

			_dataLevel = dataLevel;
		};
		const _ref = useRef(null);

		if(href !== undefined){
			_Component = 'a';
			_Attr.href = href;
		};
		function _handleClick(event){
			if(event.target.classList.toggle('active')){
				if(active[_dataLevel]!==undefined){
					active[_dataLevel].classList.remove('active');
				};
				active[_dataLevel]=event.target;
			}else{
				delete active[_dataLevel];
			};
			if(onClick !== undefined && typeof(onClick)==='function'){
				onClick(event);
			};
		};
		return(
			<_Component 
				data-key={count++}
				data-level={_dataLevel}
				onClick={_handleClick}
				ref={_ref}
				{..._Attr}
				{...props}
			>
				{children}
			</_Component>
		);
	};	
})();
export default Button;