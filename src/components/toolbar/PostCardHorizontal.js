import React from 'react';
// import '../../style/Post.css'
import {
	PostThumbnail,
	// PostBookmask,
	// PostTitle,
	// PostCurrendPrice,
	// PostRootPrice,
	// PostOption,
	// PostRating,
	// PostView
} from './Post'
const PostCardHorizontal = (function(){
	let count = 0;
	return function({dataPost,...props}){
		return(
				<div key={count++}className="card flex-row flex-grow-1">
	    			<div className="card-head w-50 position-relative">
	    				<PostThumbnail />
	    			</div>
	    			<div className="card-body w-50">
	    			</div>
	    			
				</div>
		)
	};	
})();
export default PostCardHorizontal;