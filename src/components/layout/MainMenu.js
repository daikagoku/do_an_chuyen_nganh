import {List,Item,Button,Link,Icon} from '../Simple';
import {Dropdown} from '../Toolbar';
import {useState,useRef} from 'react'
import '../../style/MainMenu.css';
function MainMenu(props) {
  const ref = useRef(null);
  let offsetTop;
  const body = document.documentElement;
  document.addEventListener('scroll',function(event){
    if(ref.current !== null){
        if(offsetTop === undefined){
            offsetTop=ref.current.offsetTop;
        };
        if(offsetTop <= body.scrollTop){
            ref.current.classList.add('position-fixed','top-0');
        }else{
            ref.current.classList.remove('position-fixed','top-0');
        };
    }
  });
  function MenuItem({children,onClick,className,text,icon,buttonClass,listItem,...props}){
      const _button = {
          ...props,
          className:buttonClass+" main-menu-button h-100 px-2 py-1 d-flex flex-md-column flex-lg-row align-items-center justify-content-center"
      };
      const _item={
          className:className="w-fit-content flex-grow-1 main-menu-item d-flex justify-content-center fs-6 fs-md-0 fs-lg-1 fs-lg-0 "+className
      };
      if(listItem!==undefined){
         return(
            <Dropdown 
                DropContainer={function(attr){
                    return (<Item {..._item} />);
                }}
                DropToggle={function(attr){
                    return (
                      <Button {..._button}>
                          <Icon className={icon+" fs-2 mx-1"}/>
                          <span className="text d-none d-md-flex">{text}</span>
                      </Button>
                  );
                }}
            />
        );
      }else{
          return(
            <Item {..._item}>
                <Button {..._button}>
                    <Icon className={icon+" fs-2 mx-1"}/>
                    <span className="text d-none d-md-flex">{text}</span>
                </Button>
            </Item>
        );
      }
  };
  function RenderItem(props){
    return(
      <MenuItem {...props}/>
    )
  }
  return (
      <section ref={ref}id="main-menu"className={"container-fluid"}>
      		<div className="container">
      			<div className="row">
      				<nav className="main-menu position-relative">	
      					<List className="p-0 m-0 d-flex justify-content-center">
                  <RenderItem 
                    className="main-menu-brand border-end px-5 "
                    buttonClass="fw-bold fs-4"
                    icon="fas fa-home"
                    text="Trang chủ"
                    href=" "
                  />
                  <RenderItem 
                    listItem ={[]}
                    icon="fas fa-mobile-alt"
                    text="Điện thoại"
                  />
                  <RenderItem 
                    icon="fas fa-laptop"
                    text="Laptop"
                  />
                  <RenderItem 
                    icon="fas fa-tablet-alt"
                    text="Tablet"
                  />
      						<RenderItem 
                    icon="fas fa-headphones-alt"
                    text="Phụ kiện"
                  />
                  <RenderItem 
                    icon="fas fa-tools"
                    text="Sửa chữa"
                  />
                  <RenderItem 
                    icon="fas fa-bolt"
                    text="Flash Sale"
                  />
                  <RenderItem 
                    icon="fas fa-clipboard-list"
                    text="Tin tức"
                  />
      					</List>
      				</nav>
      			</div>
      		</div>
      </section>
  );
}

export default MainMenu;
