import React from 'react';
import '../../style/Product.css'
import {
	ProductThumbnail,
	ProductBookmask,
	ProductTitle,
	ProductCurrendPrice,
	ProductRootPrice,
	ProductOption,
	ProductRating
} from './Product'
const ProductCardVertical = (function(){
	let count = 0;
	return function({dataProduct,...props}){
		return(
				<div key={count++}className="card product-card flex-grow-1">
	    			<div className="card-head position-relative">
	    				<ProductThumbnail img={dataProduct.img} />
	    				<ProductBookmask price={dataProduct.price} salePrice={dataProduct.salePrice} />
	    			</div>
	    			<div className="px-2 py-1 card-body flex-grow-1">
	    				<ProductRating className="mx-1"/>
	    				<ProductTitle title={dataProduct.title}/>
	    			</div>
	    			<div className="px-2 py-1 card-foot mt-auto">
	    				<ProductCurrendPrice price={dataProduct.price}salePrice={dataProduct.salePrice} />
	    				 <ProductRootPrice price={dataProduct.price}salePrice={dataProduct.salePrice} />	
		    		</div>
	    			<ProductOption className="d-flex flex-column position-absolute top-0 end-0"/>
				</div>
		)
	};	
})();
export default ProductCardVertical;