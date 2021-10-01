import React,{useRef} from 'react';
import {Thumbnail} from '../Toolbar';
import {Image} from '../Simple';
const MainSlide = (function(){
	let count = 0;
	return function({className,...props}){
		const _Ref = useRef(null);
		return(
			<Thumbnail ThumbnailStyle="inset-t-4">
				<Image className="img-cover" src="https://bizweb.dktcdn.net/100/429/689/themes/825316/assets/slider_1.jpg?1632820218125"/>
			</Thumbnail>
		);
	};	
})();
export default MainSlide;