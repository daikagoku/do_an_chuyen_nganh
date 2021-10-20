import '../../style/FooterMenu.css'
import {List,Item,Link,Button} from '../Simple';
function FooterMenu({data,title,children,className,...props}) {
  return (
      	<List className={"m-0 p-0 "+className}>
      		<Item className="d-flex">
      			<Button className="h5 my-2 hs-0em footer-menu-title d-flex align-items-center justify-content-start">
      				{title}
      			</Button>	
      		</Item>
      		<Item className="d-flex">
      			<List className="m-0 p-0 w-100"listItem={data}>
      				{
      					(item,index)=>(
      						<Item className="d-flex">
				      			<Link className="footer-menu-item d-flex align-items-center justify-content-start">
				      				{item.title}
				      			</Link>	
				      		</Item>
      					)
      				}
      				{children}
      			</List>
      		</Item>
      	</List>
  );
}

export default FooterMenu;
