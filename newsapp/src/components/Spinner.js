
import React, { Component } from 'react';
import loading from "./loading.gif";

const Spinner=()=>{
    return (
      <div className='text-center container'>
        <img src={loading} alt="Loading....." />
        
      </div>
    )
  }

export default Spinner