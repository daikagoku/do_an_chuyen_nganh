
import GroupProduct from './GroupProduct'
import GroupPage from './GroupPage'
import GroupPost from './GroupPost'
function HomeContent(props) {
  const data = [
      {
        img:"https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-sierra-blue-600x600.jpg",
        title:"Iphone 13 Pro Max",
        price:1000,
        salePrice:900
      },{
        img:"https://cdn.tgdd.vn/Products/Images/42/251216/xiaomi-11t-grey-1-600x600.jpg",
        title:"Xiaomi 11T 5G",
        price:600,
        salePrice:550
      },{
        img:"https://cdn.tgdd.vn/Products/Images/42/153856/iphone-xi-xanhla-600x600.jpg",
        title:"Iphone 11 Pro Max",
        price:500,
        salePrice:400
      },{
        img:"https://cdn.tgdd.vn/Products/Images/42/224859/samsung-galaxy-s20-fan-edition-090320-040338-600x600.jpg",
        title:"Samsung Galaxy S20",
        price:500,
        salePrice:400
      },{
        img:"https://cdn.tgdd.vn/Products/Images/42/230630/vivo-y12s-den-new-600x600-600x600.jpg",
        title:"Vivo Y12s",
        price:500,
        salePrice:400
      },{
        img:"https://cdn.tgdd.vn/Products/Images/42/239747/oppo-reno6-z-5g-aurora-1-600x600.jpg",
        title:"Oppo Reno 6z 5G",
        price:500,
        salePrice:400
      },{
        img:"https://cdn.tgdd.vn/Products/Images/42/235653/oppo-a74-blue-9-600x600.jpg",
        title:"Oppo A74",
        price:500
      },{
        img:"https://cdn.tgdd.vn/Products/Images/42/241265/realme-c21y-black-600x600.jpg",
        title:"Realme C21Y",
        price:500,
        salePrice:400
      },{
        img:"https://cdn.tgdd.vn/Products/Images/42/240286/vivo-y53s-xanh-600x600.jpg",
        title:"Vivo Y53S",
        price:500
      },{
        img:"https://cdn.tgdd.vn/Products/Images/44/251824/asus-expertbook-b9400cea-i7-1165g7-16gb-1tb-600x600.jpg",
        title:"Asus ExpertBook B9400CEA i7 1165G7 (KC0790T)",
        price:500,
        category:"laptop"
      },{
        img:"https://cdn.tgdd.vn/Products/Images/44/251997/asus-vivobook-s433ea-i7-1165g7-16gb-512gb-600x600.jpg",
        title:"Asus VivoBook S433EA i7 1165G7 (AM885T)",
        price:500,
        category:"laptop"
      },{
        img:"https://cdn.tgdd.vn/Products/Images/44/239552/macbook-air-m1-2020-gray-600x600.jpg",
        title:"Macbook Air M1 2020",
        price:500,
        category:"laptop"
      },{
        img:"https://cdn.tgdd.vn/Products/Images/44/231253/macbook-pro-m1-2020-gray-600x600.jpg",
        title:" MacBook Pro M1 2020",
        price:500,
        category:"laptop"
      },{
        img:"https://cdn.tgdd.vn/Products/Images/42/235986/realme-8-pro-balck-600x600.jpg",
        title:"Realme 8 Pro",
        price:500
      },{
        img:"https://cdn.tgdd.vn/Products/Images/42/226218/nokia-24-xam-600x600.jpg",
        title:"Nokia 2.4",
        price:500
      },{
        img:"https://cdn.tgdd.vn/Products/Images/42/227626/nokia-34-xam-600x600-600x600.jpg",
        title:"Nokia 3.4",
        price:500
      }
  ];
  return (
      <section className="container-fluid"{...props}>
            <div className="container"> 
              <GroupPage listItem={data} viewItem="12"/>
              <GroupProduct 
                title="Khuyến mãi"
                listItem={data} 
                filter={function(item){
                  return item.salePrice !== undefined
                }}
              />
              <GroupProduct 
                title="Laptop"
                listItem={data} 
                filter={function(item){
                    return item.category === 'laptop'
                  }
                }
              />
              <GroupPost 
                title="Tin tức"
                listItem={data} 
              /> 

            </div>
      </section>
  );
}

export default HomeContent;
