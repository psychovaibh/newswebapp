import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NewsItem extends Component {
    render() {
        return (
            <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 p-2 main-page'>
                <div className="card border-2 border-dark rounded-top-30">
                    {
                        this.props.pic ?
                            <img src={this.props.pic} height="180px" className="card-img-top" alt="..." /> :
                            <img src={"/no-image-available-icon-6.jpg"} height="180px" className="card-img-top" alt="..." />
                    }
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <div className="card-source p-1">
                            <h5 className='card-date'>{`${(new Date(this.props.date)).toDateString()}`}</h5>
                            <h5 className='card-date'>{this.props.source}</h5>
                        </div>
                        <hr />


                        <p className="card-text">{this.props.description}</p>
                        <Link to={this.props.url} target='_blank' className="btn btn-color w-100">Read Full Article</Link>
                    </div>
                </div>
            </div>
        )
    }
}
