import './App.css';
// import React, { Components } from 'react'
import NavBar from './components/NavBar';
import React, { Component, useState } from 'react'
import News from './components/News';
import NewsItem from './components/NewsItem';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  RouterProvider,
  Routes,
  Route
} from "react-router-dom";
export default function App() {
  const apiKey="407c5b1395e04accb74e85ffe7589e13";
  console.log(apiKey)
 const [progress,setProg]=useState(0);
  const setProgress=(progress)=>{
    setProg(progress)
  }
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <div>
            <LoadingBar
              color='#f11946'
              progress={progress}
              // onLoaderFinished={() => setProgress(0)}
            />
            <br />
          </div>
          <Routes>
            <Route path='/' element={<News setProgress={setProgress} apiKey={apiKey}   pageSize={6} category="general" key="home" />} />

            <Route exact path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey}  key="entertainment" pageSize={6} category="entertainment" />} />
            <Route exact path='/business' element={<News setProgress={setProgress} apiKey={apiKey}   key="business" pageSize={6} category="business" />} />
            <Route exact path='/general' element={<News setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={6} category="general" />} />
            <Route exact path='/health' element={<News setProgress={setProgress} apiKey={apiKey}  key="health" pageSize={6} category="health" />} />
            <Route exact path='/science' element={<News setProgress={setProgress} apiKey={apiKey}  key="science" pageSize={6} category="science" />} />

            <Route exact path='/sports' element={<News setProgress={setProgress} apiKey={apiKey}  key="sports" pageSize={6} category="sports" />} />

            <Route exact path='/technology' element={<News setProgress={setProgress} apiKey={apiKey}  key="technology" pageSize={6} category="technology" />} />




          </Routes>

        </BrowserRouter>


      </div>
    )
  }



