import {Button} from '../Simple';
import {Logo} from '../Toolbar';
import '../../style/HeaderLogo.css'
function HeaderMenu(props) {
  return (
      <div>
      	 <Button id="logo"className="d-flex align-items-center justify-content-center"href="index.html"onClick={function(event,defaultEvent){}}>
            <Logo className="ws-8em ws-9x fs-0 fs-sm-1 fs-md-2 fs-lg-3 fs-xl-4 "/>
         </Button>
      </div>
  );
}

export default HeaderMenu;
