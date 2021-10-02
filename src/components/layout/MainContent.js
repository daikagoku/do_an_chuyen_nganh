import {useState} from 'react';
import {List,Item,Button,Icon,Image} from '../Simple';
import {CardVertical} from '../Toolbar'
function MainContent(props) {
  const data=[
      {
         img:"https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000",
         title:"Samsung Galaxy Note 21",
         price:1000,
         salePrice:990
      },{
         img:"https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000",
         title:"Samsung Galaxy Note 21",
         price:1000,
         salePrice:990
      },{
         img:"https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000",
         title:"Samsung Galaxy Note 21",
         price:1000,
         salePrice:900
      },{
         img:"https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000",
         title:"Samsung Galaxy Note 21",
         price:1000,
         salePrice:900
      },{
         img:"https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000",
         title:"Samsung Galaxy Note 21",
         salePrice:2000
      },{
         img:"https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000",
         title:"Samsung Galaxy Note 21",
         price:2000
      },{
         img:"https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000",
         title:"Samsung Galaxy Note 21",
         price:2000
      },{
         img:"https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000",
         title:"Samsung Galaxy Note 21",
         price:2000
      },{
         img:"https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000",
         title:"Samsung Galaxy Note 21",
         price:2000
      },{
         img:"https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000",
         title:"Samsung Galaxy Note 21",
         price:999
      },{
         img:"https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000",
         title:"Samsung Galaxy Note 21",
         price:999
      },{
         img:"https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000",
         title:"Samsung Galaxy Note 21",
         price:999
      },{
         img:"https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000",
         title:"Samsung Galaxy Note 21",
         price:999
      },{
         img:"https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000",
         title:"Samsung Galaxy Note 21",
         price:999
      },{
         img:"https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000",
         title:"Samsung Galaxy Note 21",
         price:999
      },{
         img:"https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000",
         title:"Samsung Galaxy Note 21"
      },{
         img:"https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000",
         title:"Samsung Galaxy Note 21"
      },{
         img:"https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000",
         title:"Samsung Galaxy Note 21"
      },{
         img:"https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000",
         title:"Samsung Galaxy Note 21"
      },{
         img:"https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000",
         title:"Samsung Galaxy Note 21"
      },{
         img:"https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000",
         title:"Samsung Galaxy Note 21"
      },{
         img:"https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000",
         title:"Samsung Galaxy Note 21"
      }
  ];
  return (
      <section className="container-fluid"{...props}>
      		<div className="container">
               <div className="row py-2">
                  <List listItem={data} className="card-group">
                     {
                        (item,index)=>(
                             <Item className="col col-2 p-1">
                                <CardVertical dataProduct={item}/>
                             </Item>
                        )
                     }
                  </List>
               </div>    
      		</div>
      </section>
  );
}

export default MainContent;
