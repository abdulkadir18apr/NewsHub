import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize:6,
        category:'general'
      }
      static propTypes={
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string
      }
    
    articles=[] ;
    static propTypes = {}
    constructor(props){
    super(props);
    this.state={
        articles:this.articles,
        loading:false,
        page:1
    }
    document.title=`${this.capitialize(this.props.category)}- NewsHub`
  }
 capitialize=(str)=>str.charAt(0).toUpperCase()+str.slice(1)
  async upateNews(){
         //run after render
         const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=407c5b1395e04accb74e85ffe7589e13&page=${this.state.page}&pagesize=${this.props.pageSize}`
         this.setState({loading:true});
         let respose=await fetch(url)
         let data=await respose.json()
         this.setState({articles:data.articles,totalArticles:data.totalResults, loading:false});
         console.log(data)


  }
  
  async componentDidMount(){
    this.upateNews();
  }
   HandleNext=async()=>{
        this.setState({
            page:this.page+1
        })
        this.upateNews();
  }
  HandlePrev=async()=>{
    this.setState({
        page:this.state.page-1
        
    })
    this.upateNews();

  }


  

  render() {
    // let{pageSize}=this.props;

    return (
      <div className="container my-3">
        <h2 className='text-center'>NewsHub Top {this.capitialize(this.props.category)} HeadLines </h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
        {this.state.articles.map((element)=>{
            return(
                !this.state.loading && <div className="col-md-4" key={element.url}>
                <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage?element.urlToImage:"https://assets1.cbsnewsstatic.com/hub/i/r/2023/02/13/191b867e-6b6c-4655-ac7b-7d05f7306ee7/thumbnail/1200x630/c53519ebb168e04fba72b027a0e8a50c/gettyimages-1246627710.jpg"} newsUrl={element.url} author={element.author?element.author:"Unknown"} date={element.publishedAt} source={element.source.name} />                
                </div>
            )

        
    })}
    </div>
    <div className="d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.HandlePrev}>&laquo; Previous </button>
        <button disabled={Math.ceil(this.totalArticles/this.props.pageSize)<=this.state.page} type="button" className="btn btn-dark" onClick={this.HandleNext}>Next &raquo;</button>

    </div>
        
      </div>
     
    )
  }
}

export default News