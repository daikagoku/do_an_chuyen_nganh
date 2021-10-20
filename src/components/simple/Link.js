import React from 'react';
import Component from './Component';
import '../../style/Link.css'
const Link = (function(){
	let count = 0;
	let active = {};
	return function({href,children,onClick,...props}){
		const _Attr= {
			tag:'a',
			'data-type':'link',
			href:"#"
		};
		if(href !== undefined){
			_Attr.href = href;
		};
		if(props===undefined || props['data-tab'] === undefined){
			props['data-tab'] = 'undefined';
		};
		_Attr.onClick = function(event){
			const __link = event.target.closest('[data-type="link"]');
			function __activeLink(){
				const __current = document.querySelector(`[data-type="link"][data-tab=${props['data-tab']}].active`);
				if(__link.classList.toggle('active')){					
					if(__current !== null && __current!==undefined && __current !== __link){
						__current.classList.remove('active');
					};
				};

			};
			if(onClick !== undefined && typeof(onClick)==='function'){
				onClick(event,__activeLink,__link);
			}else{
				__activeLink();
			}
		};
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
export default Link;