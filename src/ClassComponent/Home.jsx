import React, { Component } from 'react'
import NewsItem from "./NewsItem"
import InfiniteScroll from "react-infinite-scroll-component"
export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      articles: [],
      totalResults: 0,
      page: 1

    }
  }
  getApiData = async () => {
    try {
      var response = ""
      if (this.props.search !== "")
        response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search}&page=1&pageSize=10&sortBy=publishedAt&language=${this.props.language}&apiKey=1b93c7e0118b4d6497acb09dc5706ccf`)
      else
        response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.item}&page=1&pageSize=10&sortBy=publishedAt&language=${this.props.language}&apiKey=1b93c7e0118b4d6497acb09dc5706ccf`)
      response = await response.json()
      console.log(response);
      this.setState({
        articles: response.articles,
        totalResults: response.totalResults
      })
    }
    catch (error) {
    }
  }

  fetchMoreData = async () => {
    try {
      this.setState({ page: this.state.page + 1 })
      var response = ""
      if (this.props.search !== "")
        response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search}&page=${this.state.page}&pageSize=10&sortBy=publishedAt&language=${this.props.language}&apiKey=1b93c7e0118b4d6497acb09dc5706ccf`)
      else
        response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.item}&page=${this.state.page}&pageSize=10&sortBy=publishedAt&language=${this.props.language}&apiKey=1b93c7e0118b4d6497acb09dc5706ccf`)
      response = await response.json()
      console.log(response);

      this.setState({
        articles: this.state.articles.concat(response.articles)
      })
    }
    catch (error) {
    }
  }
  componentDidMount() {
    this.getApiData()
  }
  componentDidUpdate(old) {
    if (this.props !== old)
      this.getApiData()
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className="headline background p-1">
          <h5 className='newsheadline text-center '> {this.props.item}-News</h5>
        </div>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={
            <div className='my-5 text-center'>
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          }
        >
          <div className="row">
            {
              this.state.articles.map((item, index) => {
                return <NewsItem
                  key={index}
                  source={item.source.name}
                  title={item.title}
                  description={item.description}
                  url={item.url}
                  pic={item.urlToImage}
                  date={item.publishedAt}
                />
              })
            }
          </div>
        </InfiniteScroll>
      </div>
    )
  }
}
