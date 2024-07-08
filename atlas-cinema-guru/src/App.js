import './App.css';
import {useState, useEffect} from 'react';
import Input from './components/general/Input.js';
import Button from './components/general/Button.js';
import SearchBar from './components/general/SearchBar.js';
import SelectInput from './components/general/SelectInput.js';
import Dashboard from './routes/dashboard/Dashboard';
import Authentication from './routes/auth/Authentication';

function App() {
  // Input Use State
  const [inputValue, setInputValue] = useState("");
  // Search Bar Use State
  const [title, setTitle] = useState("");
  // Selected Input Use State
  const [selectedOption, setSelectedOption] = useState("");
  // Login State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState("");

  // Select Input Options
  const options = [
    { label: 'Default', value: '1' },
    { label: 'Latest', value: '2' },
    { label: 'Oldest', value: '3' },
    { label: 'Highest Rated', value: '4' },
    { label: 'Lowest Rated', value: '5' },
  ];

  // useEffect to check for access token and authenticate user
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      fetch('/api/auth/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        }
      })
      .then(response => response.json())
      .then(data => {
        setIsLoggedIn(true);
        setUserUsername(data.username);
      })
      .catch(error => {
        console.error('Authentication failed:', error);
      });
    }
  }, []);

  // Render based on isLoggedIn state
  if (isLoggedIn) {
    return <Dashboard username={userUsername} />;
  }

  return (
    <div className="App">
      <Authentication />
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