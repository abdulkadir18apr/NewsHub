import PropTypes from 'prop-types'
import { useEffect,useState } from 'react';
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';


const News =(props)=> {
  const [articles,setArticle]=useState([]);
  const [loading,setLoading]=useState(false);
  const [page,setPage]=useState(1);
  const [totalResults,setTotalResults]=useState(0);
  console.log(props)



  //   document.title=`${capitialize(props.category)}- NewsHub`
 const capitialize=(str)=>str.charAt(0).toUpperCase()+str.slice(1)

 const upDateNews=async()=>{

    props.setProgress(10);
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`
    setLoading(true)
    let respose=await fetch(url)
    props.setProgress(30);
    let data=await respose.json()
    props.setProgress(70);
    setArticle(data.articles);
    setTotalResults(data.totalResults);
    setLoading(false);
    props.setProgress(100);
 }

  
  useEffect(()=>{
    console.log("HELLO")
    upDateNews();
  },[])

  const fetchMoreData=async()=>{
    setPage(page+1)
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`
    setLoading(true);
    let respose=await fetch(url)
    let data=await respose.json()
    setArticle(articles.concat(data.articles));
    setTotalResults(data.totalResults);
    setLoading(false);
  }
  let i=0
  const increment=()=>{
    i=i+1;
   }

    return (
     
      <div className="container my-3">
        <h2 className='text-center'>NewsHub Top {capitialize(props.category)} HeadLines </h2>
        {loading && <Spinner/>}
        <div className="row">
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
          style={{display:'flex',flexWrap:'wrap'}}
        >
            {articles.map((element)=>{
            return(
                <div className="col-md-4" key={increment()}>
                <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage?element.urlToImage:"https://assets1.cbsnewsstatic.com/hub/i/r/2023/02/13/191b867e-6b6c-4655-ac7b-7d05f7306ee7/thumbnail/1200x630/c53519ebb168e04fba72b027a0e8a50c/gettyimages-1246627710.jpg"} newsUrl={element.url} source={element.source.name} author={element.author} date={element.publishedAt} />                

                </div>
            )

        
    })}
        </InfiniteScroll>
      </div>
    </div>
  )
}

News.propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string
}
News.defaultProps = {
  country: 'in',
  pageSize:6,
  category:'general'
}


export default News