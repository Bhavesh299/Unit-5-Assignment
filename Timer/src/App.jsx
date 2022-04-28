import './App.css';
import { useState } from 'react';
import Stopwatch from './components/Timer';

function App() {
  const [show, setShow] = useState()
  const initial = 1
  const end = 12
  return (
    <div className="App">
      {show ? <Stopwatch initial = {initial} end = {end}/> : ""}
      <button className='btn'
       onClick={() => {setShow(!show)}}>{show ? "STOP" : "START"}
       </button>
    </div>
  );
}
export default App;