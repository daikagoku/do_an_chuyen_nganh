import {List,Item,Button,Icon} from '../Simple';
import HeaderLogo from './HeaderLogo';
import HeaderSearch from './HeaderSearch';
import HeaderMenu from './HeaderMenu';
function Header(props) {
  return (
      <section {...props}>
      		<header className="container">
      			<div className="row">
      				<div className="col col-3"></div>
      				<div className="col col-6 align-items-center justify-content-center">
      					<HeaderSearch id="HeaderSearch" />
      				</div>
      				<div className="col col-3">
      					<HeaderMenu />
      				</div>
      			</div>
      		</header>
      </section>
  );
}

export default Header;
