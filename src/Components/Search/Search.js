// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// // import { useSetSearchTerm } from '../../models/SearchTerm/use'
// // import { useSearchTerm } from '../../models/SearchTerm/use';
// import '../style.css';

// import { useTranslation } from "react-i18next";

// const Search = (props) => {
//    const [search, setSearch] = useState(props.value);
//   // const searchTerm = useSearchTerm();
//   //const [search, setSearch] = useState(searchTerm);
//   // const setSearchTerm = useSetSearchTerm();
//   const { t, i18n } = useTranslation();

//   const handleLinkClick = () => {
//     console.log(search, 'search');
//     setSearchTerm(search);
//   }

//   const handleSearchChange = (event) => {
//     props.funct && props.funct(event);
//     setSearch(event.target.value);
//   }

//   return (
//     <div className='main-nav-bar__search-bar'>
//     <form
//     // action={`/search/${search}/`}
//     onSubmit={(event)=>{
//       props.fun(event);

//     }}
//     autocomplete='off'
//     className='search-bar'
//     data-search-urls-photo='/ru-ru/search/---query/' data-search-urls-query-placeholder='---query' data-search-urls-video='/ru-ru/search/videos/---query/' method='get' role='search'>
//         <div className='search-bar__container'>
//             <input
//              value={search}

//             onChange={handleSearchChange}
//             autocapitalize='none'
//             autocomplete='off'
//             id='search'
//             name='s'
//             placeholder={t("searchPlaceholder")}
//             required='required'
//             type='search'
//             />

//                 <button id='search-action'
//                 title='Поиск стоковых фото'
//                 type="submit"
//                 >
//                   <Link to="search" onClick={handleLinkClick} >
//                  <i className='rd__svg-icon'>
//                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
//                           <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
//                         </svg>
//                     </i>
//                     </Link>
//                 </button>

//         </div>
//     {/* <!-- <div className='js-search-bar-dropdown'></div> --> */}
//     </form>
//     </div>
//   );
// };

// export default Search;

import React from "react";
import { Link } from "react-router-dom";
import "../style.css";
import { useTranslation } from "react-i18next";
import { setSearchItem } from "../../actions/search";
import { connect } from "react-redux";

const Search = ({ search, setSearchItem, onSubmit=null }) => {
  const { t,  } = useTranslation();
  return (
    <div className="main-nav-bar__search-bar">
      <form
        // action={`/search/${search}/`}
        onSubmit={(event) => {
          onSubmit(event);
        }}
        autoComplete="off"
        className="search-bar"
        data-search-urls-photo="/ru-ru/search/---query/"
        data-search-urls-query-placeholder="---query"
        data-search-urls-video="/ru-ru/search/videos/---query/"
        method="get"
        role="search"
      >
        <div className="search-bar__container">
          <input
            value={search.search}
            onChange={(event) => {
              setSearchItem(event.target.value);
            }}
            autoCapitalize="none"
            autoComplete="off"
            id="search"
            name="s"
            placeholder={t("searchPlaceholder")}
            required="required"
            type="search"
          />

          <button
            id="search-action"
            title="Поиск стоковых фото"
            type="submit"
            onClick={(event) => {onSubmit!==null && onSubmit(event)}}
          >
            <Link to="/search">
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
            </Link>
          </button>
        </div>
        {/* <!-- <div className='js-search-bar-dropdown'></div> --> */}
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  search: state.search,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchItem: (params) => dispatch(setSearchItem(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
