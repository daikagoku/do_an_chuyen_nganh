import React,{useRef} from 'react';
import '../../style/Link.css'
const Link = (function(){
	let count = 0;
	let active = {};
	return function({href,dataLevel,children,onClick,...props}){
		let _Component='a';
		const _Attr= {
			'data-type':'link',
			href:"#"
		};
		let _dataLevel = 0;
		if(dataLevel !== undefined && !Number.isNaN(parseInt(dataLevel))){
			_dataLevel = dataLevel;
		};

		const Ref = useRef(null);
		if(href !== undefined){
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
				data-level={_dataLevel}
				onClick={_handleClick}
				data-key={count++}
				ref={Ref}
				{..._Attr}
				{...props}
			>
				{children}
			</_Component>
		);
	};	
})();
export default Link;