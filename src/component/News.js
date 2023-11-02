import React, { useEffect,useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
  const [articles, setArticles] =  useState([])
  const [loading, setLoading] =  useState(true)
  const [page, setPage] =  useState(1)
  const [totalResults, setTotalResults] =  useState(0)

  const fetchMoreData = async () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=4f15388d58744148a9c1919e674b054e&page=${page+1}&pageSize=${props.pageSize}`;
    // this.setState({ loading: true });
    setPage( page + 1 );

    let data = await fetch(url);
    let parseData = await data.json();
    // console.log(data)

    setArticles(articles.concat(parseData.articles))
    setTotalResults(parseData.totalResults)
    setLoading(false)
  };

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  // constructor(props) {
  //   super(props);


  //   };

  
  const  updateNews = async() => {
    props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=4f15388d58744148a9c1919e674b054e&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    
    let data = await fetch(url);
    let parseData = await data.json();
    
    setArticles(parseData.articles)
    setTotalResults(parseData.totalResults)
    setLoading(false)
    // console.log(data)
    props.setProgress(100)
  }
  useEffect(() =>{
    document.title = `${capitalize(props.category)} - NewsMonkey`;
    updateNews();
    }, [])
   
      // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b1f4f5a2fb4841f580177a51a6e7285c&page=1&pageSize=${props.pageSize}`
      // this.setState({loading: true})
      
      // let data = await fetch(url)
      // let parseData = await data.json()
      // // console.log(data)
      // this.setState({articles: parseData.articles,
      //      totalResults: parseData.totalResults,
      //       loading:false})
    
     const handlePrevClick = async () => {
      // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b1f4f5a2fb4841f580177a51a6e7285c&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
      // this.setState({loading: true})
      // let data = await fetch(url)
    // let parseData = await data.json()
    // this.setState({
      //     page: this.state.page - 1,
      //     articles: parseData.articles,
      //     loading: false
      // })
      
      setPage(page - 1);
      updateNews();
    };
    const handleNextClick = async () => {
      // if(!this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize))
      // {
        //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b1f4f5a2fb4841f580177a51a6e7285c&page=${this.state.page + 1}&pageSize=${props.pageSize}`
        //     this.setState({loading: true})
        //     let data = await fetch(url)
        //     let parseData = await data.json()
        //     this.setState({
          //         page: this.state.page + 1,
          //         articles: parseData.articles,
          //         loading: false
          //     })
          // }
          setPage(page + 1 );
          updateNews();
        };
        
        return (
          <div>
        <h1 className="text-center" style={{margin: '35px 0px', marginTop:'90px'}}>News Monkey - Top Headlines</h1>
        {loading && <Spinner/>}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
          >
          <div className="container">
            <div className="row">
              {
                /*!this.state.loading &&*/ articles.map(
                  (element) => {
                    return (
                      <div className="col-md-4" key={element.url}>
                        <NewsItem
                          title={element.title ? element.title : ""}
                          description={
                            element.description ? element.description : ""
                          }
                          imageUrl={element.urlToImage}
                          newsUrl={element.url}
                          author={element.author}
                          date={element.publishedAt}
                          source={element.source.name}
                          />
                      </div>
                    );
                  }
                  )
              }
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button
          disabled={this.state.page <= 1}
          type="button"
          className="btn btn-dark"
          onClick={this.handlePrevClick}
          >
          {" "}
          &larr; Previous
          </button>
          
          <button
          disabled={
            this.state.page + 1 >
            Math.ceil(this.state.totalResults / props.pageSize)
          }
          type="button"
          className="btn btn-dark"
          onClick={this.handleNextClick}
          >
            Next &rarr;{" "}
          </button> */}
      {/* </> */}
      </div>
    );
  }

  export default News;
  
  News.defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
