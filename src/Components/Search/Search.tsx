import React, { useEffect } from "react";
import {  useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "../style.css";
import { useTranslation } from "react-i18next";
import { setSearchItem } from "../../actions/search";
import { connect , useDispatch } from "react-redux";
import { useTypedSelector } from "../../useTypedSelecor";

 export const Search = () => {
  const search = useTypedSelector((state)=>{return state.search});
  let [value, setValue] = useState("");
  const dispatch = useDispatch();
  const { t  } = useTranslation();

  useEffect(() => {
    setValue(search.search);
    }, [search.search])
    
  return (
    <div className="main-nav-bar__search-bar">
      <form
        onSubmit={(event) => {
          console.log("searchsubmit")
          dispatch(setSearchItem(value));
        }}
        autoComplete="off"
        className="search-bar"
        method="get"
        role="search"
      >
        <div className="search-bar__container">
          <input
              value={value}
              onChange={(event) => {
              setValue(event.target.value);
            }}
            autoCapitalize="none"
            autoComplete="off"
            id="search"
            placeholder={t("searchPlaceholder")}
            type="search"
          />
          <Link to={`/search/${value}`}>
            <button
              id="search-action"
              title="Поиск стоковых фото"
              type="submit"
              onClick={(event) => {
                dispatch(setSearchItem(value));
              }
            }
            >
                <i className="rd__svg-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                  </svg>
                </i>

            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

