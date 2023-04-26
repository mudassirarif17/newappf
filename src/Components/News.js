import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country:'in',
    pageSize:8,
    category:'general',
  }

  fetchMoreData = async () => {
    this.setState({page:this.state.page+1})
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    // this.setState({loading:true});
    // here I am using a await func which mean we are waiting to get data from API and convert it and it return a promise 
    let data=await fetch(url);
    let parseData=await data.json()
    console.log(parseData);
    this.setState({articles:this.state.articles.concat(parseData.articles),
       totalResults:parseData.totalResults,
      loading:false})
  };

  capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  // for passing articles as a array
  // articles=null
  articles=[]
    
  // here I am making a constructor for making states using super func b/c constructor require obja.
  constructor(props){
    super(props);
    console.log("Hello I am a constructor from newsItem componenet");
    this.state={
      articles:this.articles,
      loading:true,
      page:1,
      totalResults:0,
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - iNewsApp`;
  }
  async updateNews(){
    this.props.setProgress(0);
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    // this.setState({loading:true});
    // here I am using a await func which mean we are waiting to get data from API and convert it and it return a promise 
    let data=await fetch(url);
    // this.props.setProgress(30);
    let parseData=await data.json()
    console.log(parseData);
    // this.props.setProgress(60);
    this.setState({articles:parseData.articles,
       totalResults:parseData.totalResults,
      loading:false
    })
    this.props.setProgress(100);
  }
  // ye ek method hota hai jo lifecycle method me use hota hai or ye hamesha render k bd run hota hai
  // for making async func 
  async componentDidMount(){
    console.log("cdm");
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3caa3c3d106943f5b5fefee466f15500&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // // this.setState({loading:true});
    // // here I am using a await func which mean we are waiting to get data from API and convert it and it return a promise 
    // let data=await fetch(url);
    // let parseData=await data.json()
    // console.log(parseData);
    // this.setState({articles:parseData.articles,
    //    totalResults:parseData.totalResults,
    //   loading:false})
    this.updateNews();
  }
  // Here I am making Functions for previous and next buttons.buttons are not async but function is async

  // handlePrevClick=async()=>{
      // console.log("I am Previous Button");

      // Using pageSize Func for Set page size
    //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3caa3c3d106943f5b5fefee466f15500&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    // let data=await fetch(url);
    // let parseData=await data.json()
    // this.setState({loading:true});
    // console.log(parseData);

    // this.setState({
    //   page:this.state.page-1,
    //   articles:parseData.articles,
    //   loading:false,})
    // this.setState({page:this.state.page-1})
    // this.updateNews();
  // }

  // handleNextClick=async ()=>{
    // console.log("I am Next Button");
  //   if(!this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)){
  //   }
  //   else{
  //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3caa3c3d106943f5b5fefee466f15500&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
  //   let data=await fetch(url);
  //   let parseData=await data.json()
  //   this.setState({loading:true});
  //   console.log(parseData);
    
  //   this.setState({
  //     page:this.state.page+1,
  //     articles:parseData.articles,
  //     loading:false,
  //   })
  // }
  // this.setState({page:this.state.page+1})
  // this.updateNews();
  // }

  render() {
    console.log('render');
    return (
      <div className="my-3">
        {/* by this we are using states and looping through JSX*/}
        {/* {this.state.articles.map((element)=>console.log(element))} */}
        <h1 className='text-center' style={{margin: '30px 0px'}}>iNewsApp-Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        {/* Through this we are making the loading spinner is enable only when loading is req*/}
        {this.state.loading &&<Spinner/>}
{/* there are 12 grid in bootstrap and md mean 4  */}


<InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length != this.state.totalResults}
           loader={<Spinner/>}
        >
        {/* <div className='container'> */}
        <div className="container">
        <div className="row">
          {/* when we are using map we must a given a unique key to each item*/}
          {/* here i m say if loading is flase only show the result */}
          {/* ye spinner wla hai */}
          {/* {!this.state.loading && this.state.articles.map((element)=> */}
          {this.state.articles.map((element)=>
          <div className="col-md-4" key={element.url}>

          {/*here I am using destructring*/}
          {/* <NewsItems title="myTitle" description="myDesc" newsUrl="TODO" imageUrl="https://cdn.cnn.com/cnnnext/dam/assets/220215043412-ukraine-tank-exercises-02102022-restricted-super-tease.jpg"/> */}
          
          {/* here I am using ternary operator for making decission */}
          <NewsItems title={element.title?element.title.slice(0,44):""} description={element.description?element.description.slice(0,88):""} newsUrl={element.url} imageUrl={element.urlToImage} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
          )}
        </div>
        </div>
        </InfiniteScroll>
        {/* </div> */}
        {/* here I am making Previous and next Button */}
        {/* <div className="container d-flex justify-content-between"> */}
        {/* here I am using this because we are using class based Component*/}
        {/* <button disabled={this.state.page<=1} type="button" className="btn btn-dark " onClick={this.handlePrevClick}>&larr; Previous</button> */}
        {/* sending page size as a props not make pagesize as a hardcose */}
        {/* <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button> */}
        {/* </div> */}
    </div>
    )
  }
}

export default News