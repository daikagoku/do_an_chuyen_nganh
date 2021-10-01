import '../../style/HeaderMenu.css'
import {Form,Input,List,Item,Button,Icon,Badge} from '../Simple';
function HeaderMenu(props) {
  return (
      	<List className="d-flex m-0 p-0">
      		<Item className="d-flex">
      			<Button className="header-menu-btn fs-4 w-0em h-0em w-2x h-2x rounded-circle mx-3 d-flex align-items-center justify-content-center">
      					<Icon className="fas fa-cog"/>
      			</Button>	
      		</Item>
      		<Item className="d-flex">
      			<Button className="header-menu-btn fs-4 w-0em h-0em w-2x h-2x rounded-circle mx-3 d-flex align-items-center justify-content-center position-relative">
      					<Icon className="fab fa-opencart"/>
      					<Badge className="header-menu-cart-number fs-0x fs-6 position-absolute top-0 end-0 translateX-6 rounded-pill"text="0"/>
      			</Button>	
      		</Item>
          <Item className="d-flex">
            <Button className="header-menu-btn fs-4 w-0em h-0em w-2x h-2x rounded-circle mx-3 d-flex align-items-center justify-content-center position-relative">
                <Icon className="fas fa-user"/>
            </Button> 
          </Item>
      	</List>
  );
}

export default HeaderMenu;
