import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Route,Router} from 'react-router-dom';
import { Link } from 'react-router-dom';


export class NewsItem extends Component {
  static propTypes = {}

  render() {
    const {title,description,imageUrl,newsUrl}=this.props;
    return (
      <div className="my-3">
        <div className="card">
        <img src={imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )   
  }
}

export default NewsItem