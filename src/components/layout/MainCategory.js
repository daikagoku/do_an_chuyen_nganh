import React from 'react';
import '../../style/MainCategory.css'
import {Thumbnail} from '../Toolbar';
import {List,Item,Image,Button} from '../Simple';

const MainCategory = (function(){
	let count = 0;
	const ImageUrl="./img/";
	const data = [
		{
			img:ImageUrl+"logo_apple.png",
			title:"Iphone",
			href:"#"
		},{
			img:ImageUrl+"logo_nokia.png",
			title:"Nokia",
			href:"#"
		},{
			img:ImageUrl+"logo_oneplus.png",
			title:"OnePlus",
			href:"#"
		},{
			img:ImageUrl+"logo_oppo.png",
			title:"Oppo",
			href:"#"
		},{
			img:ImageUrl+"logo_realme.png",
			title:"Realme",
			href:"#"
		},{
			img:ImageUrl+"logo_samsung.png",
			title:"Samsung",
			href:"#"
		},{
			img:ImageUrl+"logo_vivo.png",
			title:"Vivo",
			href:"#"
		},{
			img:ImageUrl+"logo_vsmart.png",
			title:"Vsmart",
			href:"#"
		},{
			img:ImageUrl+"logo_xiaomi.png",
			title:"Xiaomi",
			href:"#"
		}
	];
	return function({className,...props}){
		return(
			<div className="overflow-hidden">
				<div className="overflow-x-auto overflow-y-hidden py-3">
				<List listItem={data}className="m-0 p-0 card-group">
					{
					}
				</List>
			</div>
			</div>
		);
	};	
})();
export default MainCategory;