import {List,Item,Button,Icon} from '../Simple';
import '../../style/GroupCard.css'
import {ProductCardVertical,ProductCardHorizontal} from '../Toolbar'
import GroupProductArrow from './GroupProductArrow'
const GroupProduct = (function(){
  let count = 0;    
  return function({title,listItem,filter,...props}) {
    const key= count ++;
    return (
        <div data-key={key}className="my-1 group-card group-product d-flex flex-column">
            <div className="group-card-head row px-2">
                <div className="col col-10 col-lg-11 justify-content-center align-items-start">
                    <div className="group-card-title fs-4 h-100 d-flex align-items-center">
                        {title??"Sản phẩm"}
                    </div>
                </div>
                <div className="col col-2 col-lg-1 justify-content-center align-items-center">
                    <GroupProductArrow key={key} />
                </div>
            </div>
            <div className="group-card-body row pb-2">
                <div className="overflow-hidden px-1">
                    <div className="overflow-x-auto overflow-y-hidden">
                        <List listItem={listItem}filter={filter} className="p-0 mx-0 my-2 card-group flex-nowrap">
                           {
                              (item,index)=>(
                                   <Item key={index}className="col col-6 col-sm-4 col-md-3 col-lg-3 p-1">
                                        <ProductCardVertical dataProduct={item}/>
                                   </Item>
                              )
                           }
                        </List>
                    </div>
                </div>
            </div>
        </div>
    );
  };
})();
export default GroupProduct;
