import '../../style/TopContact.css'
import {List,Item,Button,Icon} from '../Simple';
function TopContact(props) {
  return (
      <section id="top-contact"className="container-fluid d-none d-md-block"{...props}>
      		<div className="row">
      				<List className="d-flex justify-content-end m-0 p-0">
      						<Item className="d-flex">
      								<Button className="d-flex align-items-center justify-content-center py-1 px-2">
                          <Icon className="mx-2 fas fa-phone-alt"/>
      										<span>0000000000</span> 
      								</Button>	
      						</Item>
      						<Item className="d-flex">
      								<Button className="d-flex align-items-center justify-content-center py-1 px-2">
      										<Icon className="mx-2 fas fa-store"/>
      										<span>Hệ thống cửa hàng</span> 
      								</Button>	
      						</Item>
      				</List>
      		</div>
      </section>
  );
}

export default TopContact;
