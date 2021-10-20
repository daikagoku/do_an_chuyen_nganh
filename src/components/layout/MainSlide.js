import React,{useRef,useState,useEffect} from 'react';
import '../../style/MainSlide.css'
import {Thumbnail} from '../Toolbar';
import {List,Item,Button,Icon,Image} from '../Simple';
const MainSlide = (function(){
	let count = 0;
	const slideList = [
				"","",""
	];
	const totalItem = slideList.length-1;
	return function({className,...props}){
		const [activeIndex,setActiveIndex] = useState(0);
		useEffect(function(){
			const auto = setInterval(function(){
				nextSlide(activeIndex+1);
			},10000);
			return ()=>clearInterval(auto);
		},[activeIndex])	
		function handleClickButton(event,defaultEvent,This){
			if(This.classList.contains('back')){
				nextSlide(activeIndex-1);
			}else if(This.classList.contains('next')){
				nextSlide(activeIndex+1);
			}
		};
		function handleClickIndicator(event,defaultEvent,This){
			if(!This.classList.contains('active')){
				nextSlide(Number.parseInt(This.dataset.index));
			};
		};
		function nextSlide(nextIndex){
			setActiveIndex(setNextIndex(nextIndex));
		};
		function setNextIndex(nextIndex){
			if(nextIndex > totalItem){
				return 0;
			}else if(nextIndex < 0){
				return totalItem;
			}else{
				return nextIndex;
			}
		};
		return(
			<div 
				id="main-slide"
				className="slide d-flex position-relative overflow-hidden"
			>
				<div className="overflow-hidden w-100">
					<List 
						listItem={slideList}
						className="slide-list main-slide-list px-0 pb-0 m-0 w-100 d-flex inset-t-4"
					>
						{	
							function(_item,_index,_length){
								return(
								<Item 
									className={"slide-item main-slide-item col col-12 "}
									data-index={_index}
									style = {{'--order':_index-activeIndex}}
								>
									<Thumbnail ThumbnailStyle="inset-t-4">
										<Image className="img-cover" src="https://bizweb.dktcdn.net/100/429/689/themes/825316/assets/slider_1.jpg?1632820218125"/>
									</Thumbnail>
								</Item>
							)}
						}
					</List>
					<List listItem={slideList}
						className="main-slide-indicators p-0 m-0 w-100 position-absolute end-6 bottom-0 translateX-6 d-flex justify-content-center">
						<span ></span>
						{
							function(_item,_index){	
								let __className = _index===activeIndex?"active":"";			
								return(
								<Item className="mx-1">
									<Button 
										className={"slide-indicator main-slide-indicator fs-0x fs-0em hs-6em ws-2em ws-md-4em ws-lg-6em hs-0x ws-2x "+__className}
										data-index={_index}
										data-tab="main-slide-indicator"
										onClick={handleClickIndicator}
									>							
									</Button>
								</Item>
							)}
						}
					</List>
					<List className="main-slide-buttons p-0 m-0 w-100 position-absolute end-6 bottom-6 translate-6 d-flex justify-content-between">
						<Item className="">
							<Button onClick={handleClickButton} 
								className="slide-button main-slide-button back fs-8 d-flex align-items-center justify-content-center ws-6em hs-6em translateX-6">
								<Icon className="fas fa-chevron-left"></Icon>
							</Button>
						</Item>
						<Item className="">
							<Button onClick={handleClickButton} className="slide-button main-slide-button next fs-8 d-flex align-items-center justify-content-center ws-6em hs-6em translate-X-6">
								<Icon className="fas fa-chevron-right"></Icon>
							</Button>
						</Item>
					</List>
				</div>
			</div>
		);
	};
})();
export default MainSlide;