import React,{useRef} from 'react';

const List = (function(){
	let count = 0;
	return function({listItem,children,...props}){
		const Ref = useRef(null);
		function renderChildren(){
			if(typeof(children) === 'function' && listItem !== undefined && Array.isArray(listItem)){
				return listItem.map(function(_item,_index){
					const _itemRef = useRef(null);
					const _itemComponent = children(_item,_index,_itemRef);
					if(_itemComponent.type === undefined || _itemComponent.type !=='li'){
						return (
							<li key={_index}ref={_itemRef}>{_itemComponent}</li>
						);
					}
					else {
						return (	
							<>{_itemComponent}</>
						);
					}	
				})
			}else{
				return (<>{children}</>);
			}
		};
		return(
			<ul data-key={count++}ref={Ref}{...props}>
				{
					renderChildren()
				}
			</ul>
		);
	};	
})();
export default List;