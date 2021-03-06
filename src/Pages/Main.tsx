import React, { useEffect, useState, useCallback } from "react";
// import { Link } from 'react-router-dom';
import InfiniteScroll from "react-infinite-scroll-component";
import Author from "../Components/Author/Author";
import Header from "../Components/Header/Header";
import {Search} from "../Components/Search/Search";
import {Hint} from "../Components/Hint/Hint";
import Photo from "../Components/Photo/Photo";
import List from "../Components/List/List";
import "../main.css";
import { FETCH_MAIN } from "../constants/actions";
import { useTranslation } from "react-i18next";
import { setSearchItem } from "../actions/search";
import { getMainImages } from "../actions/main";
import { useTypedSelector } from "../useTypedSelecor";
import { connect , useDispatch} from "react-redux";
import {PhotoTypes} from "../types/types";

  export const Main = () => {
    const search = useTypedSelector((state)=>{return state.search});
    const main = useTypedSelector((state)=>{return state.main});
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);

  const [back, setBack] = useState<PhotoTypes>({
     id: 0,
    width: 0,
    height: 0,
    url: "",
    photographer: "",
    photographer_url: "",
    photographer_id: 0,
    avg_color: "",
    src:{
      original: "",
      large2x: "",
      large: "",
      medium: "",
      small: "",
      portrait: "",
      landscape: "",
      tiny: "",
    },
    liked: false,
    alt: "",
    // map:""
  });
  const { t } = useTranslation();

  const fetchData = useCallback(async () => {
    dispatch({type: FETCH_MAIN, payload:{
      page: currentPage || 0,
      per_page: 40 }}
       );
  }, [currentPage]);

  const fetchBackground = async () => {
    setBack(main.data[Math.floor(Math.random() * 40)]);
  };

  const loadMore = useCallback(() => {
    setCurrentPage(currentPage + 1);
  }, [currentPage]);

  useEffect(() => {
    localStorage.setItem("search", "");
    dispatch(setSearchItem(""));
  }, []);

  useEffect(() => {
    main.data.length !== 0 && main.page === 1 && fetchBackground();
  }, [main.data]);

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  return (
    <div>
      <Header props={1}/>
      <header className="hero">
        <div className="hero__background">
          <img src={back.src && back.src.large2x} alt="header" />
        </div>
        <Author back={back}/>

        <section className="hero__content hero__content--centered">
          <h1 className="hero__title">{t("searchTitle")}</h1>
          <div className="hero__search-container">
            <Search/>
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
              <b>{t("could")}</b>
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

