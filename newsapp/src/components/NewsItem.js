import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Route,Router} from 'react-router-dom';
import { Link } from 'react-router-dom';


export class NewsItem extends Component {
  static propTypes = {}

  render() {
    const {title,description,imageUrl,newsUrl,author,date,source}=this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div>
          <span class="badge rounded-pill bg-danger" style={{display:'flex',justifyContent:"flexEnd",position:"absolute",right:'0'}}>{source}</span>

          </div>
       
        <img src={imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-success">By {author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )   
  }
}

export default NewsItem


