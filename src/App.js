import Dictionary from './Dictionary';
import  './App.css'; 
import logo from "./logo1.jpg"

function App() {

  return (
    <div className='App'>
    <div style={{backgroundImage: `url(${logo})`
    }} >
    <Dictionary defaultKeyword="love"/>
    </div>
    </div>
  );
}

export default App;
