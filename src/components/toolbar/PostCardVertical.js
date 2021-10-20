import React from 'react';
// import '../../style/Post.css'
import {
	PostThumbnail,
	// PostBookmask,
	PostTitle,
	// PostCurrendPrice,
	// PostRootPrice,
	// PostOption,
	// PostRating,
	// PostView
} from './Post'
const PostCardVertical = (function(){
	let count = 0;
	return function({dataPost,...props}){
		return(
				<div key={count++}className="card product-card flex-grow-1 position-relative">
	    			<div className="card-head position-relative">
	    				<PostThumbnail img={dataPost.img}/>
	    			</div>
	    			<div className="px-2 py-1 card-body position-absolute bottom-0 start-0">
	    				<PostTitle />
	    			</div>	    			
				</div>
		)
	};	
})();
export default PostCardVertical;