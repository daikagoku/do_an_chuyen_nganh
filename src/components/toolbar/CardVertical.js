import React,{useRef} from 'react';
import '../../style/Card.css'
import {List,Item,Button,Image,Link,Icon,Bookmask} from '../Simple'
import {Thumbnail} from '../Toolbar'
const CardVertical = (function(){
	let count = 0;
	return function({children,...props}){
		return(
			<div className="card position-relative flex-grow-1">
    			<div className="card-head position-relative">
    				<Thumbnail ThumbnailStyle="square">
    					<Image className="card-img img-contain"src="https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000"/>
    				</Thumbnail>
    				<Bookmask className="position-absolute top-0 start-0 d-flex flex-column" text="Giảm 40%"/>
    			</div>
    			<div className="px-2 py-1 card-body flex-grow-1">
    				<Link className="card-title">Samsung Galaxy Note 21</Link>
    			</div>
    			<div className="px-2 py-1 card-foot mt-auto">
    				<span className="card-price sale">25.000.000₫</span>
    				<span className="card-price current">29.000.000₫</span>
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