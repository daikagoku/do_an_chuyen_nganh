const StyleCss =[	
		'color',
		'background',
		'transform',
		'opacity',
		'display',
		'visibility',
		'transition',
		'fontSize',
		'fontWeight',
		'fontStyle',
		'border',
		'borderColor',
		'borderWidht',
		'borderStyle',
		'width',
		'height',
		'lineHeight'
	];
function Component({tag,className,style,children,...props}){
	const Attr = 	{};
	let Style  =	{};
	let ComponentTag = "div";
	if(tag !== undefined){
		ComponentTag= tag;
	};
	if(className !== undefined){
		Attr.className = className;
	};
	if(style!==undefined){
		Style = style;
	};
	StyleCss.forEach(function(key){
		if(props[key] !== undefined){
			Style[key]=props[key];
			delete props[key];
		};
	});
	return(
		<ComponentTag {...Attr}style={Style}{...props}>
			{children}
		</ComponentTag>
	)
};

export default Component;