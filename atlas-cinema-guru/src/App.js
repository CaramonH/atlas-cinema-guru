import './App.css';
import Button from './components/general/Button.js';
import {useState} from 'react';
import Input from './components/general/Input.js';

function App() {
  // Input Use State
  const [inputValue, setInputValue] = useState ("");

  // Input Event Handler
  return (
    <div className="App">
      <div>
        <Button label="Load More..."/>
      </div>
      <div>
        <Input
        label="Please Enter Your Name..."
        type="text"
        value={inputValue}
        setValue={setInputValue}
        />
      </div>
    </div>
  );
}

export default App;
