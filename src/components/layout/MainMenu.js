import {List,Item,Button,Link,Icon} from '../Simple';
import '../../style/MainMenu.css';
function MainMenu(props) {
  return (
      <section className="container-fluid">
      		<div className="container">
      			<div className="row">
      				<nav className="main-menu">	
      					<List className="p-0 m-0 d-flex align-items-center justify-content-center fs-2">
      						<Item className="fs-2">
      							<Link className=" border-end px-2 py-1 d-flex align-items-center justify-content-center">
      								<Icon className="mx-2 fas fa-home"/>Trang chủ
      							</Link>
      						</Item>
      						<Item>
      							<Link className="px-2 py-1 d-flex align-items-center justify-content-center">
      								<Icon className="mx-2 fas fa-mobile-alt"/>
      								Điện thoại
      							</Link>
      						</Item>
      						<Item>
      							<Link className="px-2 py-1 d-flex align-items-center justify-content-center">
      								<Icon className="mx-2 fas fa-laptop"/>
      								Laptop
      							</Link>
      						</Item>
      						<Item>
      							<Link className="px-2 py-1 d-flex align-items-center justify-content-center">
      								<Icon className="mx-2 fas fa-tablet-alt"/>
      								Tablet
      							</Link>
      						</Item>
      						<Item>
      							<Link className="px-2 py-1 d-flex align-items-center justify-content-center">
      								<Icon className="mx-2 fas fa-headphones-alt"/>
      								Tai nghe
      							</Link>
      						</Item>
      					</List>
      				</nav>
      			</div>
      		</div>
      </section>
  );
}

export default MainMenu;
