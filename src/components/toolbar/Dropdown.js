import {Component,List,Button} from '../Simple'
import '../../style/Rating.css'
function Dropdown({tag,DropContainer,DropToggle,DropContent,...props}){
	if(DropToggle === undefined){
		DropToggle =()=>(<></>);
	};
	if(DropContent === undefined){
		DropContent =()=>(<></>);
	};
	if(DropContainer !== undefined){
		return(
			<DropContainer className="dropdown">
			  	<DropToggle className="dropdown-toggle"/>
			  	<DropContent className="dropdown-content"/>
			</DropContainer>
		);
	}else{
		return (<></>)
	}
	
};

export default Dropdown