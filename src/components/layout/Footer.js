import FooterMenu from './FooterMenu';
import FooterSearch from './FooterSearch';
import {List,Item,Button,Icon} from '../Simple';
import '../../style/Footer.css'
function Footer(props) {
  const data=[
      {
        title:"Giới thiệu"
      },{
        title:"Giới thiệu"
      },{
        title:"Giới thiệu"
      },{
        title:"Giới thiệu"
      },{
        title:"Giới thiệu"
      }
    ];
  const info =[
      {
        title:"Copyright@"
      },{
        title:"Địa chỉ:"
      },{
        title:"Điện thoại:"
      }
    ];
  return (
      <section id="footer"className="container-fluid"{...props}>
      		<footer className="container">
      			<div className="row py-4">
                <div className="col col-3">
                  <FooterMenu data={data}title="Về chúng tôi"/>
                </div>
                <div className="col col-3">
                  <FooterMenu data={data}title="Chính sách giao hàng"/>
                </div>
                <div className="col col-3">
                  <FooterMenu data={data}title="Chính sách thanh toán"/>
                </div>
                <div className="col col-3">
                  <FooterMenu data={data}title="Chính sách bảo mật"/>
                </div>
      			</div>
      			<div className="row py-4">
                <div className="col col-6">
                  <FooterMenu data={info}title="Liên hệ"/>
                </div>
                <div className="col col-6">
                  <FooterMenu className="w-100"title="Đăng ký nhận khuyến mãi">
                      <Item>
                        <FooterSearch />
                      </Item>
                      <Item className="py-4">
                          <List className="d-flex m-0 p-0">
                              <Item>
                                <Button className="fs-3x fs-0 ws-0em hs-0em">
                                   <Icon className="fab fa-facebook-square"/>
                                </Button>
                              </Item>
                              <Item>
                                <Button className="fs-3x fs-0 ws-0em hs-0em">
                                   <Icon className="fab fa-twitter-square"/>
                                </Button>
                              </Item>
                          </List>
                      </Item>
                  </FooterMenu>
                </div>
      			</div>
      		</footer>
      </section>
  );
}

export default Footer;
