import React,{useRef} from 'react';
import '../../style/MainCategory.css'
import {Thumbnail} from '../Toolbar';
import {List,Item,Image,Button} from '../Simple';

const MainCategory = (function(){
	let count = 0;
	const data = [
		{
			img:"https://bizweb.dktcdn.net/thumb/small/100/429/689/collections/icon1.png?v=1623548877697",
			title:"Điện thoại",
			href:"#"
		},{
			img:"https://bizweb.dktcdn.net/thumb/small/100/429/689/collections/icon2.png?v=1623549042517",
			title:"Phụ kiện",
			href:"#"
		},{
			img:"https://bizweb.dktcdn.net/thumb/small/100/429/689/collections/icon3.png?v=1623549208523",
			title:"Laptop",
			href:"#"
		},{
			img:"https://bizweb.dktcdn.net/thumb/small/100/429/689/collections/icon5.png?v=1623549644967",
			title:"Máy ảnh",
			href:"#"
		},{
			img:"https://bizweb.dktcdn.net/thumb/small/100/429/689/collections/icon6.png?v=1623549755877",
			title:"Gaming",
			href:"#"
		},{
			img:"https://bizweb.dktcdn.net/thumb/small/100/429/689/collections/icon1.png?v=1623548877697",
			title:"Điện thoại",
			href:"#"
		},{
			img:"https://bizweb.dktcdn.net/thumb/small/100/429/689/collections/icon2.png?v=1623549042517",
			title:"Phụ kiện",
			href:"#"
		},{
			img:"https://bizweb.dktcdn.net/thumb/small/100/429/689/collections/icon3.png?v=1623549208523",
			title:"Laptop",
			href:"#"
		},{
			img:"https://bizweb.dktcdn.net/thumb/small/100/429/689/collections/icon5.png?v=1623549644967",
			title:"Máy ảnh",
			href:"#"
		},{
			img:"https://bizweb.dktcdn.net/thumb/small/100/429/689/collections/icon6.png?v=1623549755877",
			title:"Gaming",
			href:"#"
		}
	];
	return function({className,...props}){
		return(
			<div className="overflow-hidden">
				<div className="overflow-x-auto overflow-y-hidden">
				<List listItem={data}className="m-0 p-0 card-group flex-nowrap justify-content-xl-between">
					{
						(item,index)=>(
							<Item key={index}className="col col-3 col-sm-2 col-xl-1 p-1 position-relative">
								<Button href={item.href}className="h-100">
									<Thumbnail ThumbnailStyle="square main-category-thumbnail">
										<Image src={item.img} className="position-absolute bottom-6 end-6 translate-6"></Image>
									</Thumbnail>
									<div className="d-flex align-items-center justify-content-center">
										<span>{item.title}</span>
									</div>
								</Button>
							</Item>

						)
					}
				</List>
			</div>
			</div>
		);
	};	
})();
export default MainCategory;