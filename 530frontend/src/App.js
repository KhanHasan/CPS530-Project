import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';

function App() {
  
    const [userName, setUsername] = useState('')

    useEffect(() => {
      getNames();
    }, [])

    const getNames = async() => {
      const response = await axios.get('/names')
      console.log(response);
      setUsername(response.data)
    }

    return (
      <Router>
        <div className="App">
        <Navbar />
          <div className="content">
            <Switch>
            <Route path="/Page6">
                <Page6 />
              </Route>
            <Route path="/Page5">
                <Page5 />
              </Route>
            <Route path="/Page4">
                <Page4 />
              </Route>
            <Route path="/Page3">
                <Page3 />
              </Route>
            <Route path="/Page2">
                <Page2 />
              </Route>
              <Route path="/">
                <Page1 />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
}

export default App;
