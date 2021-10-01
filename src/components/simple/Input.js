import React,{useState,useEffect,useRef} from 'react';
import '../../style/Input.css'
const Input = (function(){
	let count = 0;
	const listType={
		number:{
			regex:"^[0-9]+$",
			message:"chỉ bao gồm các số 0-9"
		}
	};
	const Validation = {
		isRequired:function(value){
			if(value.trim() === ""){
				return "Trường này không bỏ trống!";
			};
		},
		isType:function(type){
			const _type = listType[type];
			if(_type !== undefined){
				_type.regex= new RegExp(_type.regex);				
			};
			return function(value){
				if(_type !== undefined && !_type.regex.test(value)){
					return "Trường này "+_type.message;
				};
			};
		},
		minLength:function(length){
			const _length = length;
			return function(value){
				if(value.trim(" ").length < _length){
					return "Trường này phải lớn hơn "+_length+" kí tự!";
				}
			}
		},
		maxLength:function(length){
			const _length = length;
			return function(value){
				if(value.trim(" ").length > _length){
					return "Trường này phải nhỏ hơn "+_length+" kí tự!";
				}
			}
		}
	};
	return function({type,value,onChange,setValue,placeholder,...props}){
		const _ref  = useRef(null);
		const [_value,_setValue] = useState("");
		const _Valid ={
			error:[],
			ruler:{}
		};
		const _Attr = {
			'data-type':'input',
			type:"text",
			placeholder:" "
		};
		if(placeholder !== undefined){
			_Attr.placeholder = placeholder;
		};
		if(value !== undefined){
			_handleSetValue(value);
		};
		function _handleSetValue(value){
			let newValue = value;
			if(setValue !== undefined && typeof(setValue)==='function'){
				newValue=setValue(value);
			};
			_setValue(newValue);

		};
		function _handleChange(event){
			if(onChange !== undefined && typeof(onChange)==='function'){
				onChange(event);
			};
			_handleSetValue(event.target.value);
		};
		return(
			<input 
				data-key={count++}
				ref={_ref}
				{..._Attr}
				{...props}
				onChange ={_handleChange}
				value={_value}
			/>
		)
	};	
})();
export default Input;



