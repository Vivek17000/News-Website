/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);


  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const UpdateNews = async () => {
    props.setProgress(10);

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1362cb4677f14cfc9a0577f16ba9ffd7&page=${page}&pageSize=${props.pageSize}`;

    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);

    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);

    props.setProgress(100);
  };

  useEffect(() => {
      document.title=`${capitalizeFirstLetter(props.category)} - NewsMonkey`

    UpdateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1362cb4677f14cfc9a0577f16ba9ffd7&page=${page}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
      <h1
        className="text-center"
        style={{ margin: "35px 0px", marginTop: "90px" }}
      >
        NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  {/* {element.urlToImage && */}
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={
                      element.urlToImage ? element.urlToImage : props.pic
                    }
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />

                  {/* }  */}
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>

    -
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
  pic: "https://media.istockphoto.com/id/119838172/photo/close-up-of-mixed-breed-monkey-between-chimpanzee-and-bonobo-smiling.jpg?s=612x612&w=0&k=20&c=k48IdB7w0kJHFhtWcYIlKQxqxENXJwZ66qAcX_BuBjg=",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
