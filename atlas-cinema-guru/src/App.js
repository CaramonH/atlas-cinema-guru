import './App.css';
import Button from './components/general/Button.js';
import {useState} from 'react';
import Input from './components/general/Input.js';
import SearchBar from './components/general/SearchBar.js';
import SelectInput from './components/general/SelectInput.js';
import { selectSeries } from 'async';

function App() {
  // Input Use State
  const [inputValue, setInputValue] = useState ("");
  // Search Bar Use State
  const [title, setTitle] = useState ("");
  // Selected Input Use State
  const [selectedOption, setSelectedOption] = useState ("");
  // Select Input Options
  const options = [
    { label: 'Default', value: '1' },
    { label: 'Latest', value: '2' },
    { label: 'Oldest', value: '3' },
    { label: 'Highest Rated', value: '4' },
    { label: 'Lowest Rated', value: '5' },
  ];
  // Input Event Handler
  return (
    <div className="App">
      <div>
        <SearchBar 
        title={title}
        setTitle={setTitle}/>
      </div>
      <div>
        <Button label="Load More..."/>
      </div>
      <div>
        <Input 
        label="Please enter a name..." 
        type="text" 
        value={inputValue} 
        setValue={setInputValue}/>
      </div>
      <div>
        <SelectInput
        label="Choose an option"
        options={options}
        value={selectedOption}
        setValue={setSelectedOption} />
      </div>
    </div>
  );
}

export default App;
