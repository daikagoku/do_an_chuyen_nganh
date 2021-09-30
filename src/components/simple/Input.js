import React,{useState,useEffect,useRef} from 'react';
// import '../../style/Input.css'
const Input = (function(){
	let count = 0;
	const listInput={
		text:"",
		number:"[0-9]"
	};
	return function({type,value,className,onChange,onBlur,setValue,...props}){
		const _Ref  = useRef(null);
		const [_state,_setState] = useState({
			value:"",
			valid:{}
		});
		const _Attr = {
			'data-type':'input',
			className:'input-value',
			type:"text",
			'input-type':'text'
		};
		if(props.isRequired !== undefined && props.isRequired==true){
			props.isRequired='true'
			
		};
		if(type !== undefined){
			_Attr['input-type']=type;
		};
		if(value !== undefined){
			_handleSetValue(value);
		};
		if(className !== undefined){
			_Attr.className +=" "+ className;
		};
		// useEffect(function(){

		// },[_value]);
		function _handleSetValue(value){
			if(setValue !== undefined){
				_setState({
					..._state,
					value:setValue(value)
				});
			}else{
				_setState({
					..._state,
					value:value
				});
			}
		};
		function _handleChange(event){
			if(onChange !== undefined && typeof(onChange)==='function'){
				onChange(event);
			};
			_handleSetValue(event.target.value);
		};
		function _handleBlur(event){
			if(onBlur !== undefined && typeof(onBlur)==='function'){
				onBlur(event);
			};
			console.log(_state)
		};
		return(
			<input 
				data-key={count++}
				ref={_Ref}
				{..._Attr}
				{...props}
				onChange={_handleChange}
				onBlur={_handleBlur}
				value={_state.value}
			/>
		)
	};	
})();
export default Input;



