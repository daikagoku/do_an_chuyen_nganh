
import './App.css';
import {Button,Link,List,Icon,Badge,Input} from './components/Simple';

function App() {
  return (
    <div className="App">
      <form action="#" className="form control">
          <Input className="form-control"type="number" isRequired/>
          <Input className="form-control"/>
          <Input className="form-control"/>
      </form>
    </div>
  );
}

export default App;
