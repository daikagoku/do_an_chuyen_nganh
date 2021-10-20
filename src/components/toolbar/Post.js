import {List,Item,Button,Image,Link,Icon,Bookmask} from '../Simple';
import {Thumbnail} from '../Toolbar';
export function PostTitle({title,...props}){
	let text = "Đang cập nhật";
	if(title !== undefined){
		text = title;
	};
	return(
		<Link className="post-title">{text}</Link>
	)
};
export function PostThumbnail({img,...props}){
	let text = "Đang cập nhật";
	if(img !== undefined){
		text = "";
	};
	return(
		<Thumbnail ThumbnailStyle="rectangle">
    		<Image className="post-img img-cover"src={img}alt={text}/>
    	</Thumbnail>
	)
};