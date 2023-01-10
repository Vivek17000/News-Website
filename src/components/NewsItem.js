/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import React, { Component } from 'react'

export class NewsItem extends Component {
   


  render() {

      
    let {title, description, imageUrl, newsUrl, author , date, source} = this.props;
    return (
      <div className="my-3">
        <div className="card" >
        <div style={{
          display : 'flex',
          justifyContent : 'flex-end',
          position : 'absolute',
          right : 0

        }}>
        
        <span className=" badge rounded-pill bg-danger" >
            {source}</span>
        </div>     
          
        <img src={imageUrl} className="card-img-top " alt=".." />
        <div className="card-body">
            <h5 className="card-title">{title}...  </h5>
            <p className="card-text">{description}....</p>
            <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary" rel="noreferrer">Read more</a>
        </div>
</div>
      </div>
    )
  }
}

export default NewsItem


