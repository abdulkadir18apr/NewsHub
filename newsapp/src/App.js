import './App.css';
// import React, { Components } from 'react'
import NavBar from './components/NavBar';
import React, { Component } from 'react'
import News from './components/News';
import NewsItem from './components/NewsItem';
import LoadingBar from 'react-top-loading-bar'


import {
  BrowserRouter,
  RouterProvider,
  Routes,
  Route
} from "react-router-dom";
export default class App extends Component {
  apiKey=process.env.REACT_APP_NEWS_API;
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <div>
            <LoadingBar
              color='#f11946'
              progress={this.state.progress}
              // onLoaderFinished={() => setProgress(0)}
            />
            <br />
          </div>
          <Routes>
            <Route path='/' element={<News setProgress={this.setProgress} apiKey={this.apiKey}   pageSize={6} category="general" key="home" />} />

            <Route exact path='/entertainment' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="entertainment" pageSize={6} category="entertainment" />} />
            <Route exact path='/business' element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key="business" pageSize={6} category="business" />} />
            <Route exact path='/general' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="general" pageSize={6} category="general" />} />
            <Route exact path='/health' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="health" pageSize={6} category="health" />} />
            <Route exact path='/science' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="science" pageSize={6} category="science" />} />

            <Route exact path='/sports' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="sports" pageSize={6} category="sports" />} />

            <Route exact path='/technology' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="technology" pageSize={6} category="technology" />} />




          </Routes>

        </BrowserRouter>


      </div>
    )
  }
}



