import React,{useEffect} from 'react';
import '../../style/Paging.css'
import {List,Item,Button,Icon} from '../Simple'
import State from '../../core/State';
const Paging = (function(){
	let count = 0;
	return function({totalItem,viewItem,getCurrentPage,...props}){
		const _State = new State({
			currentPage:0
		});
		useEffect(function(){
			if(getCurrentPage !== undefined && typeof(getCurrentPage)==='function'){
				getCurrentPage(_State.get('currentPage'));
			};
		},[_State.get('currentPage')]);
		let _totalPage=Math.ceil(Number.parseInt(totalItem)/Number.parseInt(viewItem))-1;
		let _listPage=(function(){
			let __currentPage = Number.parseInt(_State.get('currentPage'));
			if(__currentPage < 0){
				_State.set('currentPage',0);
			}else if(__currentPage > _totalPage){
				_State.set('currentPage',_totalPage);
			};
			const __list=[];
			__list.push({
					className:"active",
					'page':__currentPage,
					children:__currentPage
			});
			if(__currentPage > 0 && __currentPage < _totalPage){
				__list.unshift({
					className:"",
					'page':__currentPage-1,
					children:__currentPage-1
				});
				__list.push({
					className:"",
					'page':__currentPage+1,
					children:__currentPage+1
				});
				
			}else{
				if(__currentPage === 0){
					if(_totalPage>=1){
						__list.push({
							className:"",
							'page':1,
							children:1
						});
					};
					if(_totalPage>=2){
						__list.push({
							className:"",
							'page':2,
							children:2
						});
					};
				}else if(__currentPage === _totalPage){
					if(_totalPage>=1){
						__list.unshift({
							className:"",
							'page':_totalPage-1,
							children:_totalPage-1
						});
					};
					if(_totalPage>=2){
						__list.unshift({
							className:"",
							'page':_totalPage-2,
							children:_totalPage-2
						});
					}
				};
			};
			if(__currentPage>0){
					__list.unshift({
						className:"",
						'page':__currentPage-1,
						children:(<Icon className="fas fa-chevron-left"/>)
					});
			};
			if(__currentPage<_totalPage){
					__list.push({
						className:"",
						'page':__currentPage+1,
						children:(<Icon className="fas fa-chevron-right"/>)
					});
			};
			return __list;
		})();
		function _handleOnClick(Event,defaultEvent,This){
			if(!This.classList.contains('disabled')){
				let newPage =Number.parseInt(This.dataset.page);				
				_State.set('currentPage',newPage);
			}
		};	
		return(
			<List className="m-0 p-0 d-flex pagination position-relative" listItem={_listPage}>
				<Item className="memu-page-label"></Item>
				{
					(_item,_index)=>(
						<Item className={"memu-page-item"}>
							<Button 
								key={_index}
								onClick={_handleOnClick}
								data-page={_item.page}
								data-tab="memu-page-btn"
								className={_item.className+" d-flex align-items-center justify-content-center memu-page-btn mx-2 hs-8em ws-8em"}
							>
								{_item.children}
							</Button>
						</Item>
					)
				}
			</List>
		);
	};	
})();
export default Paging;