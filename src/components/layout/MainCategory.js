import React,{useRef} from 'react';
import '../../style/MainCategory.css'
import {Thumbnail} from '../Toolbar';
import {Image} from '../Simple';

const MainCategory = (function(){
	let count = 0;
	const data = [
		{
			img:"https://bizweb.dktcdn.net/thumb/small/100/429/689/collections/icon1.png?v=1623548877697",
			title:"Điện thoại"
		},{
			img:"https://bizweb.dktcdn.net/thumb/small/100/429/689/collections/icon2.png?v=1623549042517",
			title:"Phụ kiện"
		},{
			img:"https://bizweb.dktcdn.net/thumb/small/100/429/689/collections/icon3.png?v=1623549208523",
			title:"Laptop"
		},{
			img:"https://bizweb.dktcdn.net/thumb/small/100/429/689/collections/icon5.png?v=1623549644967",
			title:"Máy ảnh"
		},{
			img:"https://bizweb.dktcdn.net/thumb/small/100/429/689/collections/icon6.png?v=1623549755877",
			title:"Gaming"
		},{
			img:"https://bizweb.dktcdn.net/thumb/small/100/429/689/collections/icon1.png?v=1623548877697",
			title:"Điện thoại"
		},{
			img:"https://bizweb.dktcdn.net/thumb/small/100/429/689/collections/icon2.png?v=1623549042517",
			title:"Phụ kiện"
		},{
			img:"https://bizweb.dktcdn.net/thumb/small/100/429/689/collections/icon3.png?v=1623549208523",
			title:"Laptop"
		},{
			img:"https://bizweb.dktcdn.net/thumb/small/100/429/689/collections/icon5.png?v=1623549644967",
			title:"Máy ảnh"
		},{
			img:"https://bizweb.dktcdn.net/thumb/small/100/429/689/collections/icon6.png?v=1623549755877",
			title:"Gaming"
		}
	];
	function renderItem(){
		if(data.length > 0){
			return data.map(function(item,index){
				return(
					<div className="col col-1"key={index}>
						<Thumbnail ThumbnailStyle="square main-category-thumbnail">
							<Image src={item.img} className="position-absolute bottom-6 end-6 translate-6"></Image>
						</Thumbnail>
						<div className="d-flex align-items-center justify-content-center">
							<span>{item.title}</span>
						</div>
					</div>
				)
			});
		}
	};
	return function({className,...props}){
		return(
			<div className="d-flex overflow-hidden justify-content-between">
				{renderItem()}
			</div>
		);
	};	
})();
export default MainCategory;