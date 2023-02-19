import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';



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
        page:1,
        totalResults:0
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
     //run after render
     this.props.setProgress(10);
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pagesize=${this.props.pageSize}`
    this.setState({loading:true});
    let respose=await fetch(url)
    this.props.setProgress(30);
    let data=await respose.json()
    this.props.setProgress(70);
    this.setState({articles:data.articles,totalArticles:data.totalResults, loading:false});
    this.props.setProgress(100);

  }
  fetchMoreData=async()=>{
    this.setState({page:this.state.page+1});
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pagesize=${this.props.pageSize}`
    this.setState({loading:true});
    let respose=await fetch(url)
    let data=await respose.json()
    this.setState({articles:this.state.articles.concat(data.articles),totalArticles:data.totalResults, loading:false});
  }
  i=0
  increment=()=>{
    this.i=this.i+1;
   }

  render() {

    return (
      <div className="container my-3">
        <h2 className='text-center'>NewsHub Top {this.capitialize(this.props.category)} HeadLines </h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!=this.state.totalResults}
          loader={<Spinner/>}
          style={{display:'flex',flexWrap:'wrap'}}
        >
            {this.state.articles.map((element)=>{
            return(
                <div className="col-md-4" key={this.increment()}>
                <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage?element.urlToImage:"https://assets1.cbsnewsstatic.com/hub/i/r/2023/02/13/191b867e-6b6c-4655-ac7b-7d05f7306ee7/thumbnail/1200x630/c53519ebb168e04fba72b027a0e8a50c/gettyimages-1246627710.jpg"} newsUrl={element.url} source={element.source.name} author={element.author} date={element.publishedAt} />                

                </div>
            )

        
    })}
        </InfiniteScroll>


        
    </div>
        
      </div>
     
    )
  }
}

export default News