import React from 'react';
import Component from './Component';
const List = (function(){
	let count = 0;
	function renderChildren(listItem,children){
			let html;
			if(typeof(children) === 'function' && listItem !== undefined && Array.isArray(listItem)){
				html = listItem.map(function(_item,_index,_this){
					return children(_item,_index,_this.length);					
				})
			}else{
				html = children;
			}
		return html;
	};
	function renderListChildren(listItem,children){
		if(children !== undefined){
			if(Array.isArray(children)){
				return children.map(function(element, index) {
					return renderChildren(listItem,element);
				});
			}else{
				return renderChildren(listItem,children);
			}
		}
	};
	return function({children,listItem,filter,sort,...props}){
		let _listItem = listItem;
		if(filter !== undefined && typeof(filter)==='function'){
			_listItem = _listItem.filter(function(__item,__index){
				return filter(__item,__index);
			})
		};
		if(sort !== undefined && typeof(sort)==='function'){
			_listItem.sort(function(a,b){
				let tmp = sort(a,b);
				return tmp;
			});
		};
		const _Attr={
			tag:"ul"
		};

		return(
			<Component {..._Attr}{...props}>
				{
					renderListChildren(_listItem,children)
				}
			</Component>
		);
	};	
})();
export default List;