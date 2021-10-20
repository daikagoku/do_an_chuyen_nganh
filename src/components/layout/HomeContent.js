import {useState} from 'react'
import GroupProduct from './GroupProduct'
import GroupPage from './GroupPage'
import GroupPost from './GroupPost'
function HomeContent(props) {
  const [data,setData] = useState(function(){
      fetch('http://example.com/movies.json')
        .then(response => response.json())
        .then(data => console.log(data));
  });
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
