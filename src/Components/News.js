import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps ={
        country: 'in',
        category: 'sports',
        pageSize: 6
    }
    static propTypes={
            country: PropTypes.string,
            category: PropTypes.string,
            pageSize: PropTypes.number
    }
    Capitalise = (string)=>{
        // let lower = string.toLowerCase();
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
    }
    constructor(props){
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
        document.title = 'News Diary - '+ this.Capitalise(this.props.category);
    }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apiKey}&pagesize=${this.props.pageSize}`;
        this.setState({
            loading: true
        })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            totalResults : parsedData.totalResults,
            articles : parsedData.articles,
            loading : false
        })
    }
    handlePrevClick = async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apiKey}&pagesize=${this.props.pageSize}&page=${this.state.page-1}`;
        this.setState({
            loading: true
        })
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles : parsedData.articles,
            page : this.state.page-1,
            loading : false
        })
    }
    handleNextClick = async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apiKey}&pagesize=${this.props.pageSize}&page=${this.state.page+1}`;
        this.setState({
            loading: true
        })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles : parsedData.articles,
            page : this.state.page+1,
            loading : false
        })
    }
    
    
    render() {
        return (
            <div className='container' style={{marginTop:'60px'}}>
                <h2 className='text-center my-3'>News Diary - Top {this.Capitalise(this.props.category)} Headlines</h2>
                <div className="row justify-content-between">
                    {!this.state.loading && this.state.articles.map((element)=>{
                        return <div className="col-md-4" key={element.url}><NewsItem title={element.title?element.title.slice(0,45):""} dateTime={element.publishedAt.slice(0,10)+" "+element.publishedAt.slice(11,19)} description={element.description?element.description.slice(0,80):''} img={element.urlToImage} newsUrl={element.url}/></div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page<=1} className="btn btn-primary" onClick={this.handlePrevClick}> &larr; Previous</button>
                    {this.state.loading && <Spinner/>}
                    <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)}className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
