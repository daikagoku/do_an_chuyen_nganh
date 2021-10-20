import {useState} from 'react';
import HomeContent from './HomeContent'
function MainContent(props) {
  return (
      <section className="container-fluid"{...props}>
      		<div className="container"> 
               <HomeContent />  
      		</div>
      </section>
  );
}

export default MainContent;
