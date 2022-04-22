import React, { useEffect, useState, useCallback } from "react";
// import { Link } from 'react-router-dom';
import InfiniteScroll from "react-infinite-scroll-component";
import Author from "../Components/Author/Author";
import Header from "../Components/Header/Header";
import Search from "../Components/Search/Search";
import Hint from "../Components/Hint/Hint";
import Photo from "../Components/Photo/Photo";
import List from "../Components/List/List";
// import "../Components/style.css";
import "../main.css";
import { useTranslation } from "react-i18next";
import { setSearchItem } from "../actions/search";
import { getMainImages } from "../actions/main";
import { connect } from "react-redux";

//const API_KEY = `${process.env.REACT_APP_API_KEY}`;

const Main = ({ setSearchItem, search, getMainImages, main }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [back, setBack] = useState({});
  const { t } = useTranslation();

  const fetchData = async () => {
    console.log("fetch");

    getMainImages({
      page: currentPage || 0,
      per_page: 40,
    });

  };

  const fetchBackground = async () => {

    setBack(main.data[Math.floor(Math.random() * 40)]);
  
  };

  const loadMore = useCallback(() => {
    setCurrentPage(currentPage + 1);
  }, [currentPage]);

  useEffect(() => {
    setSearchItem("");
  }, []);

  useEffect(() => {
    main.data.length !== 0 && main.page === 1 && fetchBackground();
  }, [main.data]);

  useEffect(() => {
    fetchData();
  }, [currentPage]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <Header props={1} />
       <header className="hero">
        <div className="hero__background">
          <img src={back.src && back.src.large2x} alt="header" />
        </div>
        <Author back={back} />

        <section className="hero__content hero__content--centered">
          <h1 className="hero__title">{t("searchTitle")}</h1>
          <div className="hero__search-container">
            <Search />
            <div className="hero__search-container__search-tags">
              <ul className="hero__search-container__search-tags__tag-container">
                <li className="hero__search-container__search-tags__tag-container__suggested">
                  {t("suggested")}
                  <span>:</span>
                </li>
                <li>
                  <ul>
                    <Hint />
                    &nbsp;
              
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </header> 
      <List />

      <div className="phot-col">
        <div className="phot-col__stock">
          <div className="phot-col__stock__title">{t("freeStock")}</div>
          <div className="phot-col__stock__tendention">
            <span>{t("trending")}</span>
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="18"
                viewBox="0 0 24 18"
              >
                <path d="M7 10l5 5 5-5z"></path>
              </svg>
            </i>
          </div>
        </div>

        <InfiniteScroll
          dataLength={main.data.length || 0}
          next={loadMore}
          hasMore={true}
          loader={<h4>{t("loading")}</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {/* REACT_APP_API_KEY = 563492ad6f91700001000001144a82244ce645b69edc061c1fa2e6bd; */}
          <Photo items={main.data ? main.data : []} />
        </InfiniteScroll>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  search: state.search,
  main: state.main,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getMainImages: (params) => dispatch(getMainImages(params)),
    setSearchItem: (params) => dispatch(setSearchItem(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
