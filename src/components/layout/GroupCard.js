import {List,Item,Button,Icon,Image} from '../Simple';
import '../../style/GroupCard.css'
import {CardVertical} from '../Toolbar'
function GroupCard({listItem,...props}) {
  return (
      <div className="group-card d-flex flex-column">
          <div className="group-card-head row px-2">
              <div className="col col-11">
                  <div className="group-card-title fs-4 h-100 d-flex align-items-center">
                      Hello
                  </div>
              </div>
              <div className="col col-1">
                  <List className="group-card-arrow d-flex m-0 p-0">
                      <Item>
                          <Button className="fs-4 w-8em h-8em d-flex align-items-center justify-content-center">
                              <Icon className="fas fa-chevron-left"></Icon>
                          </Button>
                      </Item>
                      <Item>
                          <Button className="fs-4 w-8em h-8em d-flex align-items-center justify-content-center">
                              <Icon className="fas fa-chevron-right"></Icon>
                          </Button>
                      </Item>
                  </List>
              </div>
          </div>
          <div className="group-card-body row p-2">
              <div className="col col-md-3 d-none d-md-flex"></div>
              <div className="col col-12 col-md-9">
                  <div className="overflow-x-auto overflow-y-hidden">
                  <List listItem={listItem} className="p-0 m-0 card-group flex-nowrap">
                     {
                        (item,index)=>(
                             <Item key={index}className="col col-6 col-sm-4 col-md-3 col-lg-3 p-1">
                                <CardVertical dataProduct={item}/>
                             </Item>
                        )
                     }
                  </List>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default GroupCard;
