import {List,Item,Button,Icon,Image} from '../Simple';
import {CardVertical} from '../Toolbar'
function MainContent(props) {
  return (
      <section className="container-fluid"{...props}>
      		<div className="container">
      			<div className="row py-2">
      				<div className="col col-2 py-1 px-2 h-100">
                 <CardVertical />
              </div>
              <div className="col col-2 py-1 px-2 h-100">
                 <CardVertical />
              </div>
              <div className="col col-2 py-1 px-2 h-100">
                 <CardVertical />
              </div>
              <div className="col col-2 py-1 px-2 h-100">
                 <CardVertical />
              </div>
              <div className="col col-2 py-1 px-2 h-100">
                 <CardVertical />
              </div>
              <div className="col col-2 py-1 px-2 h-100">
                 <CardVertical />
              </div>
              <div className="col col-2 py-1 px-2 h-100">
                 <CardVertical />
              </div>
              <div className="col col-2 py-1 px-2 h-100">
                 <CardVertical />
              </div>
      			</div>
      		</div>
      </section>
  );
}

export default MainContent;
