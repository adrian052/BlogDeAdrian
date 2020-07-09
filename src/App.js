import React from 'react';
import './App.css';
import Home from './containers/Home/Home';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import ContactUs from './containers/ContactUs/ContactUs';
import Post from './components/Post/Post';

function App() {
  return (
    <Router>
        <div className="App"> 
      <Header/>
      <Hero/>
      <Route exact path='/' component={Home}/>
      <Route path='/contact-us' component={ContactUs}/>
      <Route path='/post/:postid' component={Post}/>
      </div>
    </Router>
    
  );
}

export default App;
