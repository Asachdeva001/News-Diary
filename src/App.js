import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_DIARY_API_KEY
  render() {
    return (
      <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/home' element={<News key='home' apiKey={this.apiKey} category='general' country='in'/>}/>
          <Route exact path='/business' element={<News key='business' apiKey={this.apiKey} category='business' country='in'/>}/>
          <Route exact path='/ent' element={<News key='ent' apiKey={this.apiKey} category='entertainment' country='in'/>}/>
          <Route exact path='/general' element={<News key='general' apiKey={this.apiKey} category='general' country='in'/>}/>
          <Route exact path='/health' element={<News key='health' apiKey={this.apiKey} category='health' country='in'/>}/>
          <Route exact path='/science' element={<News key='science' apiKey={this.apiKey} category='science' country='in'/>}/>
          <Route exact path='/sports' element={<News key=' sports' apiKey={this.apiKey} category='sports' country='in'/>}/>
          <Route exact path='/tech' element={<News key='tech' apiKey={this.apiKey} category='technology' country='in'/>}/>
        </Routes>
      </Router>
      </>
    )
  }
}
