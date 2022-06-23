import React, { useEffect, useState, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Header from "../Components/Header/Header";
import Photo from "../Components/Photo/Photo";
import Choice from "../Components/Choice/Choice";
import Size from "../Components/Size/Size";
import "../Components/style.css";
import Orientation from "../Components/Orientation/Orientation";
import { connect, useDispatch } from "react-redux";
import { getCategoryImages, fetchImages } from "../actions/category";
import {FETCH_IMAGES} from "../constants/actions";
// import { FETCH_IMAGES } from "../actions/category";
import { setSearchItem } from "../actions/search";
import { useTranslation } from "react-i18next";
import { useTypedSelector } from "../useTypedSelecor";

//const API_KEY = `${process.env.REACT_APP_API_KEY}`;


 export const Category = () => {
  const search = useTypedSelector((state)=>{return state.search})
  const category = useTypedSelector((state)=>{return state.category})
  const dispatch = useDispatch();

  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const [word, setWord] = useState<string>(search.search ? search.search : "");
  const [orientation, setOrientation] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    dispatch(setSearchItem(t((window.location.pathname).substring(8))))
  }, []);

  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
      // event.preventDefault();
      setCurrentPage(1);
      setWord(search.search);
      localStorage.setItem("search", search.search);
      if (currentPage === 1) {
        fetchData();
      }
    },
    [currentPage, search, word]
  );

  const FilterChange = (event:React.MouseEvent<HTMLElement>, temp:string) => {
    setOrientation(temp);
    setCurrentPage(1);
  };

  const SizeChange = (event:React.MouseEvent<HTMLElement>, temp:string) => {
    setSize(temp);
    setCurrentPage(1);
  };

  const fetchData = useCallback(async () => {
    dispatch({type: FETCH_IMAGES, payload: {
      page: currentPage || 0,
      query: word || localStorage.getItem("search"),
      per_page: 40,
      orientation: orientation === `` ? null : orientation,
      size: size === `` ? null : size }}
    );
  }, [word, currentPage, orientation, size]);


      // fetchImages()
    // getCategoryImages({
    //   page: currentPage || 0,
    //   query: word || localStorage.getItem("search"),
    //   per_page: 40,
    //   orientation: orientation === `` ? null : orientation,
    //   size: size === `` ? null : size,
    // })

  const loadMore = useCallback(() => {
    setCurrentPage(currentPage + 1);
  }, [currentPage]);

  useEffect(() => {
    fetchData();
  }, [currentPage, orientation, size, word]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <Header props={0} funct={handleSubmit} />

      <div className="search-photos">
        <div className="choice">
          <Choice total_results={category.total_results} />
          <ul className="choice__element choice__params hide-when-1080">
            <Orientation orientation={orientation} fun={FilterChange} />

            <Size size={size} funt={SizeChange} />
            <li className="choice__params__color">
              <button className="choice__params--button choice__params__color">
                <i className="rd__svg-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 30"
                  >
                    <path d="M20.71 5.63l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42zM6.92 19L5 17.08l8.06-8.06 1.92 1.92L6.92 19z"></path>
                  </svg>
                </i>
                <span className="choice__params--span">{t("color")}</span>
              </button>
            </li>
          </ul>
        </div>
        <div className="search-photos__header">
          <h1>
            {word || localStorage.getItem("search")} {t("photos")}
          </h1>
        </div>
      </div>
      <InfiniteScroll
        dataLength={category.data.length || 0}
        next={loadMore}
        hasMore={category.next_page ? true : false}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>{t("could")}</b>
          </p>
        }
      >
        {/* REACT_APP_API_KEY = 563492ad6f91700001000001144a82244ce645b69edc061c1fa2e6bd; */}
        <Photo items={category.data ? category.data : []} />
      </InfiniteScroll>
    </div>
  );
};


