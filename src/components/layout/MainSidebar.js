import {List,Item,Button,Icon,Image} from '../Simple';
import {Thumbnail} from '../Toolbar';
import MainSlide from './MainSlide'
import MainCategory from './MainCategory'
function MainSidebar(props) {
  return (
      <section className="container-fluid"{...props}>
      		<div className="container">
      			<div className="row py-2">
      				<MainSlide />
      			</div>
      			<div className="row py-2">
      				<MainCategory />
      			</div>
      		</div>
      </section>
  );
}

export default MainSidebar;
