import '../../style/FooterSearch.css'
import {Form,Input,Button,Icon} from '../Simple';
function FooterSearch(props) {
  return (
      	<Form className="footer-search position-relative w-100 d-flex">
      		<Input type="email"className="w-100 input-form footer-search-input" placeholder="Tìm kiếm sản phẩm"/>
      		<Button type="submit"className="h-100 footer-search-btn">
      			Đăng ký
      		</Button>
      		<Button type="reset"className="h-100 footer-search-btn">
      			<Icon className="fas fa-times"/>
      		</Button>
      	</Form>
  );
}

export default FooterSearch;
