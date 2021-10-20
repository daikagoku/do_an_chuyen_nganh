import React,{useState} from 'react';
	  	let handleSet;
	  	let handleGet;
	  	let handleUpdate;
	  	let handleRemove;
const State = function(defaultValue){
	const [state,setState] = useState(defaultValue);
			handleSet=(function(){
				if(typeof(state) === 'object'){
					return function(selector,value){
						const newValue={...state};
						newValue[selector]=value;
						setState(newValue);
					}
				}else{
					return function(value){
						setState(value);
					}
				};
			})();
			handleGet=(function(){
				if(typeof(state) === 'object'){
					return function(selector){
						return state[selector];
					}
				}else{
					return function(){
						return state;
					}
				};
			})();
			handleUpdate=(function(){
				return function(value){
					setState(value);
				}
			})();
			handleRemove=(function(){
				if(typeof(defaultValue) === 'object'){
					return function(selector){
						const newValue={...state};
						delete newValue[selector];
						setState(newValue);
					}
				}else{
					return function(){
						setState(undefined);
					}
				}
			})();
	return {
		set:handleSet,
		get:handleGet,
		this:state,
		update:handleUpdate,
		remove:handleRemove
	}
};
export default State;