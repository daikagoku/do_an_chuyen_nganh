import React,{useRef} from 'react';
import '../../style/Card.css'
import {List,Item,Button,Image,Link,Icon,Bookmask} from '../Simple'
import {Thumbnail} from '../Toolbar'
const CardVertical = (function(){
	let count = 0;
	return function({dataProduct,...props}){
		const data = {
			rootPrice:" ",
			currentPrice:" "
		}; 
		function renderCurrendPrice(){
			const _attr={
				text:"Liên hệ",
				className:"card-price fs-2 current"
			};
			if(dataProduct.salePrice !== undefined){
				_attr.className+=" sale";
				_attr.text=dataProduct.salePrice+"$";
			}else if(dataProduct.price !== undefined){
				_attr.text=dataProduct.price+"$";
			};
			return(
				<span className={_attr.className}>{_attr.text}</span>
			)		
		};
		function renderBookmask(){
			if(dataProduct.price !== undefined && dataProduct.salePrice !== undefined){
				let bookmask ="Giảm "+(100 - dataProduct.salePrice * 100 / dataProduct.price)+"%";
				return(
					<Bookmask className="position-absolute top-0 start-0 d-flex flex-column" text={bookmask}/>
				);
			}
		};
		return(
			<div key={count++}className="card position-relative flex-grow-1">
    			<div className="card-head position-relative">
    				<Thumbnail ThumbnailStyle="square">
    					<Image className="card-img img-contain"src={dataProduct.img}/>
    				</Thumbnail>
    				{renderBookmask()}
    			</div>
    			<div className="px-2 py-1 card-body flex-grow-1">
    				<Link className="card-title">{dataProduct.title}</Link>
    			</div>
    			<div className="px-2 py-1 card-foot mt-auto">
    				{renderCurrendPrice()}
    				<span className="card-price  root">{data.rootPrice}</span>
    			</div>
    			<div className="card-option opacity-10 opacity-md-0 position-absolute top-0 end-0">
    				<List className="m-0 p-0 h-100 fs-2">
    					<Item>
    						<Button className="card-option-btn d-flex align-items-center justify-content-center m-2 w-8em h-8em">
    							<Icon className="far fa-heart"/>
    						</Button>
    					</Item>
						<Item>
    						<Button className="card-option-btn d-flex align-items-center justify-content-center m-2 w-8em h-8em">
    							<Icon className="fas fa-align-left"/>
    						</Button>
    					</Item>
    					<Item>
    						<Button className="card-option-btn d-flex align-items-center justify-content-center m-2 w-8em h-8em">
    							<Icon className="far fa-eye"/>
    						</Button>
    					</Item>
    					<Item>
    						<Button className="card-option-btn d-flex align-items-center justify-content-center m-2 w-8em h-8em">
    							<Icon className="fas fa-cart-plus"/>
    						</Button>
    					</Item>    				
    				</List>
    			</div>
			</div>
		)
	};	
})();
export default CardVertical;