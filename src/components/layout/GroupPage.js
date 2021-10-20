import {List,Item,Button,Icon} from '../Simple';
import {ProductCardVertical,Paging} from '../Toolbar';
import State from '../../core/State';
const GroupPage = (function(){
  let count = 0;
  return function({title,viewItem,filter,listItem,...props}) {
    const _State = new State(function(){
        viewItem= Number.parseInt(viewItem);
        if(Number.isNaN(viewItem)){
            viewItem = listItem.length;
        };
        return {
            'currentIndex':0,
            'viewItem':viewItem
        };
    });
    function _handleSetIndex(page){
        _State.set('currentIndex',page * _State.get('viewItem'));
    };
  	function _filter(item,index){
        const tmpa = index >= _State.get('currentIndex');
        const tmpb = index < _State.get('currentIndex')+_State.get('viewItem');
        return tmpa && tmpb;
    };
    const _key= count ++;
    return (
        <div data-key={_key}className="my-2 group-card group-page d-flex flex-column">
            <div className="group-card-head group-page-head row">
                <div className="col col-10 col-lg-11 justify-content-center align-items-start">
                    <div className="group-card-title fs-4 h-100 d-flex align-items-center">
                        {title??"Sản phẩm"}
                    </div>
                </div>
            </div>
            <div className="group-card-body group-page-body row">
                <div className="d-flex flex-column px-1">
                    <List listItem={listItem}filter={_filter} className="p-0 mx-0 my-2 card-group">
                        {
                           function(__item,__index){
                                return(
                                    <Item key={__index}className="col col-6 col-sm-4 col-md-3 col-lg-3 p-1">
                                        <ProductCardVertical dataProduct={__item}/>
                                    </Item>
                                )
                           }
                        }
                    </List>
	                <div className="group-page-paging d-flex align-items-center justify-content-center my-2">
	            		<Paging 
                            totalItem ={listItem.length}
                            viewItem={viewItem}
                            getCurrentPage={_handleSetIndex}
                        />
	            	</div>
                </div>
            </div>
        </div>
    );
  };
})();
export default GroupPage;
