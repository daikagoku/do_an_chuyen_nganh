import React from 'react';
import {List,Item,Button,Image,Link,Icon,Bookmask} from '../Simple'
import {Thumbnail,RatingStar} from '../Toolbar'
import '../../style/Product.css'

export function ProductTitle({title,...props}){
	let text = "Đang cập nhật";
	if(title !== undefined){
		text = title;
	};
	return(
		<Link className="product-title">{text}</Link>
	)
};
export function ProductThumbnail({img,...props}){
	let text = "Đang cập nhật";
	if(img !== undefined){
		text = "";
	};
	return(
		<Thumbnail ThumbnailStyle="square">
    		<Image className="product-img img-contain"src={img}alt={text}/>
    	</Thumbnail>
	)
};

export function ProductRootPrice({price,salePrice,...props}){
	let text= " ";
	if(price !== undefined && salePrice !== undefined){
		text=price+"$";
	};
	return(
		<span className="fs-0x fs-9 product-price root">{text}</span>
	)
};
export function ProductCurrendPrice({price,salePrice,...props}){
	const _attr={
		text:"Liên hệ",
		className:"fs-0x fs-9 product-price fs-2 current"
	};
	if(salePrice !== undefined && price !== undefined){
		_attr.className+=" sale";
		_attr.text=salePrice+"$";
	}else if(price !== undefined){
		_attr.text=price+"$";
	};
	return(
		<span className={_attr.className}>{_attr.text}</span>
	)		
};
export function ProductBookmask({price,salePrice,...props}){
	if(price !== undefined && salePrice !== undefined){
		let percent = Math.round(100 - salePrice * 100 / price);
		let text ="Giảm "+percent+"%";
		return(
			<Bookmask className="position-absolute top-0 start-0 d-flex flex-column" text={text}/>
		);
	}else{
		return(<></>)
	}
};
export function ProductRating({className,listVoted,...props}){
	const data=[5,5,5,5,1];
	let rating=data.reduce(function(total,item){
			return total+item;
	},0)/data.length || 0;
	return(
		<span className={"position-relative d-flex align-items-center "+className}>
			<RatingStar className="fs-0x fs-8"value="1"rating={rating}/>
			<RatingStar className="fs-0x fs-8"value="2"rating={rating}/>
			<RatingStar className="fs-0x fs-8"value="3"rating={rating}/>
			<RatingStar className="fs-0x fs-8"value="4"rating={rating}/>
			<RatingStar className="fs-0x fs-8"value="5"rating={rating}/>
		</span>
	)
};
export function ProductOption({className,...props}){
		return(
			<List className={"m-0 p-0 fs-2 product-option opacity-10 opacity-md-0 "+className}>
    			<Item>
    				<Button className="product-option-btn d-flex align-items-center justify-content-center m-2 ws-8em hs-8em">
    					<Icon className="far fa-heart"/>
    				</Button>
    			</Item>
				<Item>
    				<Button className="product-option-btn d-flex align-items-center justify-content-center m-2 ws-8em hs-8em">
    					<Icon className="fas fa-align-left"/>
    				</Button>
    			</Item>
    			<Item>
    				<Button className="product-option-btn d-flex align-items-center justify-content-center m-2 ws-8em hs-8em">
    					<Icon className="far fa-eye"/>
    				</Button>
    			</Item>
    			<Item>
    				<Button className="product-option-btn d-flex align-items-center justify-content-center m-2 ws-8em hs-8em">
    					<Icon className="fas fa-cart-plus"/>
    				</Button>
    			</Item>    				
    		</List>
		);
};