  import {List,Item,Button,Icon} from '../Simple';
  import '../../style/GroupCard.css'
  function GroupProductArrow({key,...props}){
    return(
        <List className="group-product-arrow d-flex m-0 p-0">
            <Item>
                <Button className="fs-4 ws-8em hs-8em d-flex align-items-center justify-content-center">
                    <Icon className="fas fa-chevron-left"></Icon>
                </Button>
            </Item>
            <Item>
                <Button className="fs-4 ws-8em hs-8em d-flex align-items-center justify-content-center">
                    <Icon className="fas fa-chevron-right"></Icon>
                </Button>
            </Item>
        </List>
    )
  };
  export default GroupProductArrow;