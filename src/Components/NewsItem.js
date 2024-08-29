import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,dateTime,description,img,newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "20rem"}}>
          <img src={img?img:'https://media.istockphoto.com/id/1055079680/vector/black-linear-photo-camera-like-no-image-available.jpg?s=612x612&w=0&k=20&c=P1DebpeMIAtXj_ZbVsKVvg-duuL0v9DlrOZUvPG6UJk='} className="card-img-top" alt="..." style={{width:'100%',height:'150px'}}/>
          <div className="card-body">
            <h5 className="card-title">{title+'...'}</h5>
            <p className="card-text" style={{fontSize:'10px'}}>{dateTime}</p>
            <p className="card-text" style={{fontSize:'15px'}}>{description+'...'}</p>
            <a href={newsUrl} target='_blank' rel='noreferrer' className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
