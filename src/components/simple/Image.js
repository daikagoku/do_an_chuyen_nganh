import React from 'react';
import Component from './Component';
import '../../style/Image.css'
const Image = (function(){
	let count = 0;
	return function({src,dataLazy,...props}){
		let _Attr = {
			tag:"img",
			'data-type':"image"
		};
		if(dataLazy !== undefined){
			if(src !== undefined){
				_Attr['data-src']=src;
			};
		}else{
			if(src !== undefined){
				_Attr['src']=src;
			};
		}
		return(
			<Component
				{..._Attr}
				{...props}
			/>
		);
	};	
})();
export default Image;