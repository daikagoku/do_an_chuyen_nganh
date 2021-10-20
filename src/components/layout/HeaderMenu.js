import '../../style/HeaderMenu.css'
import {List,Item,Button,Icon,Badge} from '../Simple';
function HeaderMenu(props) {
  return (
      	<List className="d-flex m-0 p-0 justify-content-around">
          <Item className="d-flex d-md-none">
            <Button className="header-menu-btn fs-4 ws-0em hs-0em ws-2x hs-2x rounded-circle mx-1 mx-md-2 d-flex align-items-center justify-content-center">
                <Icon className="fas fa-search"/>
            </Button> 
          </Item>
      		<Item className="d-flex">
      			<Button className="header-menu-btn fs-4 ws-0em hs-0em ws-2x hs-2x rounded-circle mx-1 mx-md-2 d-flex align-items-center justify-content-center">
      					<Icon className="fas fa-cog"/>
      			</Button>	
      		</Item>
      		<Item className="d-flex">
      			<Button className="header-menu-btn fs-4 ws-0em hs-0em ws-2x hs-2x rounded-circle mx-1 mx-md-2 d-flex align-items-center justify-content-center position-relative">
      					<Icon className="fab fa-opencart"/>
      					<Badge className="header-menu-cart-number fs-0x fs-6 position-absolute top-0 end-0 translateX-6 rounded-pill"text="0"/>
      			</Button>	
      		</Item>
          <Item className="d-flex">
            <Button className="header-menu-btn fs-4 ws-0em hs-0em ws-2x hs-2x rounded-circle mx-1 mx-md-2 d-flex align-items-center justify-content-center position-relative">
                <Icon className="fas fa-user"/>
            </Button> 
          </Item>
      	</List>
  );
}

export default HeaderMenu;
