import '../../style/HeaderSearch.css'
import {Form,Input,List,Item,Button,Icon} from '../Simple';
function HeaderSearch(props) {
  return (
      	<Form className="position-relative d-flex w-100">
      		<Input className="input-form header-search-input" placeholder="Tìm kiếm sản phẩm"/>
      		<Button type="submit"className="header-search-btn">
      			<Icon className="fas fa-search"/>
      		</Button>
      		<Button type="reset"className="header-search-btn">
      			<Icon className="fas fa-times"/>
      		</Button>
      	</Form>
  );
}

export default HeaderSearch;
