import './App.css';
import Background from './Components/Background/Background';
import First from './Components/First/First';
import Fourth from './Components/Fourth/Fourth';
import Second from './Components/Second/Second';
import Social from './Components/Social/Social';
import Third from './Components/Third/Third';


function App() {
  return (
     <>
  <Social/>
  <First/>
  <Third variable={1.5}/>
  <Second/>
  <Background/>
  <Third variable={1.7}/>
  <Fourth/>
  <Third variable={2}/>
  

    
     </>
  );
}

export default App;
