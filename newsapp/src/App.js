import './App.css';
// import React, { Components } from 'react'
import NavBar from './components/NavBar';
import React, { Component } from 'react'
import News from './components/News';
import NewsItem from './components/NewsItem';

import {
  BrowserRouter,
  RouterProvider,
  Routes,
  Route
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <NavBar/>
          <Routes>
          <Route path='/' element={<News pageSize={15} category="general"/>}/>

          <Route exact  path='/entertainment' element={<News key="entertainment"  pageSize={15} category="entertainment"/>}/>
          <Route exact  path='/business' element={<News key="business"  pageSize={15} category="business"/>}/>
          <Route  exact path='/general' element={<News key="general"  pageSize={15} category="general"/>}/>
          <Route exact  path='/health' element={<News key="health"  pageSize={15} category="health"/>}/>
          <Route exact  path='/science' element={<News key="science"  pageSize={15} category="science"/>}/>
           
            <Route  exact path='/sports' element={<News key="sports" pageSize={15} category="sports"/>}/>
            
            
            
            <Route  exact path='/technology' element={<News key="technology"  pageSize={15} category="technology"/>}/>
           
           
            

          </Routes>
        
        </BrowserRouter>

        
      </div>
    )
  }
}



