import React from 'react';
import Component from './Component';
import '../../style/Button.css'
const Button = (function(){
	let count = 0;
	return function({href,children,onClick,...props}){
		const _Attr= {
			tag:'button',
			'data-type':'button'
		};

		if(href !== undefined){
			_Attr.tag = 'a';
			_Attr.href = href;
		};
		if(props===undefined || props['data-tab'] === undefined){
			props['data-tab'] = 'undefined';
		};
		_Attr.onClick = function(event){
			const __button = event.target.closest('[data-type="button"]');
			function __activeButton(flag){
				const __current = document.querySelector(`[data-type="button"][data-tab=${props['data-tab']}].active`);
				if(__button.classList.toggle('active',flag)){					
					if(__current !== null && __current!==undefined && __current !== __button){
						__current.classList.remove('active');
					};
				};

			};
			if(onClick !== undefined && typeof(onClick)==='function'){
				onClick(event,__activeButton,__button);
			}else{
				__activeButton();
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
export default Button;