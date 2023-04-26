import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class NewsItems extends Component {
  static propTypes = {}
  render() {
    // here I am using destructuring in JS.Its a concept of JS(through this we are using props in class based component)
    let {title , description ,imageUrl ,newsUrl ,author ,date ,source }= this.props;
    return (
      <><span class="badge rounded-pill bg-success">{source}</span>
       {/* here I am using two karli braces one for JS and one for Obj width is a key and 18rem its value */}
        <div className="card my-3">
        <img src={!imageUrl?"https:www.onmsft.com/wp-content/uploads/2021/01/Microsoft-Edge-1.jpg":imageUrl}className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small class="text-muted"> By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
          <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-danger">Read More</a>
        </div>
</div>
</>
    )
  }
}

export default NewsItems