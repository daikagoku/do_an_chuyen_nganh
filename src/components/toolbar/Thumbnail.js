import React from 'react';
import '../../style/Thumbnail.css'
const Thumbnail = (function(){
	return function({children,ThumbnailStyle,...props}){
		return(
			<div className="thumbnail position-relative">
				<div className={"thumbnail-container position-relative "+ThumbnailStyle}>
					<div className="thumbnail-content position-absolute top-0 end-0 start-0 bottom-0">
						{children}
					</div>
				</div>
			</div>
		);
	};	
})();
export default Thumbnail;