// import React, {useEffect, useState, useRef, useCallback} from 'react';
// // import { Link } from 'react-router-dom';
// import InfiniteScroll from 'react-infinite-scroll-component';
//  import Header from '../Components/Header/Header';
//  import Photo from '../Components/Photo/Photo';
//  import Choice from '../Components/Choice/Choice';
//  import Size from '../Components/Size/Size';
// import { useSearchTerm } from '../models/SearchTerm/use';
//  import '../Components/style.css';
// import Orientation from '../Components/Orientation/Orientation';
// //import { getValue } from '@testing-library/user-event/dist/utils';

// const API_KEY=`${process.env.REACT_APP_API_KEY}`

// const Categorys = () => {

//   const [items, setItems] = useState([]);
//    const [currentPage, setCurrentPage] = useState(1);
//   const [, setFetching] = useState(true);
//   const [value, setValue] = useState("people");
//   const [word, setWord] = useState("");
//   const [totalresults, setTotalPhotos] = useState(0);
//   const [orientation, setOrientation] = useState("");
//   // const [category, setCategory] = useState(false);
//   const [open, setOpen] = useState(false);
//   const [size, setSize]= useState("");
//   let str="";

//   const handleSubmit= useCallback((event) =>{
//      event.preventDefault();
//      setCurrentPage(1);
//      setWord(value);
//      if (currentPage === 1) {
//          fetchData()
//       }
//     }, [currentPage, value])

//     const handleChange=(event) =>{
//       setValue(event.target.value);
//     }

//     const FilterChange=(event,temp) =>{
//       setOrientation(temp);
//       setCurrentPage(1);
//     }

//     const SizeChange=(event,temp) =>{
//       setSize(temp);
//       setCurrentPage(1);
//     }

//      str = (orientation===``? ``: `&orientation=`)+orientation+(size===``? ``: `&size=`)+size;

//     const fetchData = useCallback(async () => {
//      console.log(orientation);
//      console.log("fetch");
//       await fetch(
//         `https://api.pexels.com/v1/search?page=${currentPage || 0}&query=${value}&per_page=40${str}`,
//         {
//           method: 'GET',
//           headers: {
//             Authorization: API_KEY,
//           },
//         }
//       )
//         .then((response) => response.json())
//         .then((data) => {
//           if(data && data.photos){
//               if (currentPage === 1) {
//                   setItems(data.photos);
//               } else {
//                   setItems([...items, ...data.photos]);
//               }
//               setTotalPhotos(data.total_results);
//           }
//         })
//         .finally(() => setFetching(false));

//     }, [value, currentPage, orientation, size]);

//   const loadMore = useCallback(() => {
//       setCurrentPage(currentPage + 1);
//   }, [currentPage])

//   useEffect(() => {
//     fetchData();
//   }, [currentPage, orientation, size]); // eslint-disable-line react-hooks/exhaustive-deps

//   return (
//     <body>
//     <Header props={0}
//      fun={handleSubmit}
//      funct={handleChange}
//      value={value}/>

// <div className="search-photos">
//         <div className="choice">

//          <Choice total_results={totalresults}/>
//           <ul className="choice__element choice__params hide-when-1080">
//             <Orientation orientation={orientation}
//             fun={FilterChange}
//             />
//       {/* <li
//         className={`choice__params__el ${category ? 'active' : ''}`}
//         data-active={orientation === '' ? false : true}
//         onMouseOver={() => {
//           setCategory(true);
//         }}
//         onMouseOut={() => {
//           setCategory(false);
//         }}
//         >
//         <button className="choice__params--button choice__params__el active">
//           <i className="rd__svg-icon-search">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 30">
//               <path d="M16.48 2.52c3.27 1.55 5.61 4.72 5.97 8.48h1.5C23.44 4.84 18.29 0 12 0l-.66.03 3.81 3.81 1.33-1.32zm-6.25-.77c-.59-.59-1.54-.59-2.12 0L1.75 8.11c-.59.59-.59 1.54 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12L10.23 1.75zm4.6 19.44L2.81 9.17l6.36-6.36 12.02 12.02-6.36 6.36zm-7.31.29C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32z"></path>
//             </svg>
//           </i>
//           <span className="choice__params--span">
//             {orientation
//               ? orientation=== 'landscape'
//                 ? 'Horizontal'
//                 : orientation=== 'portrait'
//                   ? 'Vertical'
//                   : 'Square'
//               : 'Orientation'}
//           </span>
//           <div
//             className="choice__params--clear"
//              onClick={() => setOrientation("")}
//             >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="16"
//               height="16"
//               viewBox="0 0 24 24">
//               <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
//             </svg>
//           </div>
//         </button>
//         <ul className="choice__params__el__options">
//           <li
//            data-active={orientation === '' ? true : false}
//           >
//             <div
//                onClick={() => {
//                 setOrientation("");
//                setCurrentPage(1);}
//               }
//               // onClick={() =>
//               //   params.update(size !== '' ? '/?size=' + size : '') }
//                 >
//               <span>
//                 All

//              </span>
//             </div>
//           </li>
//           <li
//             data-active={orientation === 'landscape' ? true : false}
//            >
//             <div
//                 onClick={() =>
//                {
//                 setOrientation(`landscape`);
//                 setCurrentPage(1);
//                 }
//               }
//               >
//               <span>
//                 <i className="rd__svg-icon-search">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     xmlnsXlink="http://www.w3.org/1999/xlink"
//                     width="24px"
//                     height="16px"
//                     viewBox="0 0 24 16"
//                     version="1.1">
//                     <g id="Page-1" stroke="none" strokeWidth="1" fill="none">
//                       <g
//                         transform="translate(-914.000000, -184.000000)"
//                         fill="#9E9E9E"
//                         fillRule="nonzero">
//                         <path
//                           d="M935,184 C936.656854,184 938,185.343146 938,187 L938,197 C938,198.656854 936.656854,200 935,200 L917,200 C915.343146,200 914,198.656854 914,197 L914,187 C914,185.343146 915.343146,184 917,184 L935,184 Z M935,186 L917,186 C916.487164,186 916.064493,186.38604 916.006728,186.883379 L916,187 L916,197 C916,197.512836 916.38604,197.935507 916.883379,197.993272 L917,198 L935,198 C935.512836,198 935.935507,197.61396 935.993272,197.116621 L936,197 L936,187 C936,186.487164 935.61396,186.064493 935.116621,186.006728 L935,186 Z"
//                           id="Rectangle"></path>
//                       </g>
//                     </g>
//                   </svg>
//                 </i>
//                 <span>
//                   Горизонтальная

//                 </span>
//               </span>
//             </div>
//           </li>
//           <li
//            data-active={orientation=== 'portrait' ? true : false}
//            >
//             <div
//                onClick={() =>
//                   {
//                     setOrientation(`portrait`);
//                     setCurrentPage(1);
//                 }
//               }
//               >
//               <span>
//                 <i className="rd__svg-icon-search">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     xmlnsXlink="http://www.w3.org/1999/xlink"
//                     width="16px"
//                     height="24px"
//                     viewBox="0 0 16 24"
//                     version="1.1">
//                     <g id="Page-1" stroke="none" strokeWidth="1" fill="none">
//                       <g
//                         transform="translate(-918.000000, -220.000000)"
//                         fill="#9E9E9E"
//                         fillRule="nonzero">
//                         <path
//                           d="M935,224 C936.656854,224 938,225.343146 938,227 L938,237 C938,238.656854 936.656854,240 935,240 L917,240 C915.343146,240 914,238.656854 914,237 L914,227 C914,225.343146 915.343146,224 917,224 L935,224 Z M935,226 L917,226 C916.487164,226 916.064493,226.38604 916.006728,226.883379 L916,227 L916,237 C916,237.512836 916.38604,237.935507 916.883379,237.993272 L917,238 L935,238 C935.512836,238 935.935507,237.61396 935.993272,237.116621 L936,237 L936,227 C936,226.487164 935.61396,226.064493 935.116621,226.006728 L935,226 Z"
//                           id="Rectangle"
//                           transform="translate(926.000000, 232.000000) rotate(-270.000000) translate(-926.000000, -232.000000) "></path>
//                       </g>
//                     </g>
//                   </svg>
//                 </i>
//                 <span>
//                   Вертикально

//                 </span>
//               </span>
//             </div>
//           </li>
//           <li
//             data-active={orientation=== 'square' ? true : false}
//            >
//             <div
//                onClick={() =>
//                 { setOrientation(`square`);
//                setCurrentPage(1);}}
//               >
//               <span>
//                 <i className="rd__svg-icon-search">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     xmlnsXlink="http://www.w3.org/1999/xlink"
//                     width="20px"
//                     height="20px"
//                     viewBox="0 0 20 20"
//                     version="1.1">
//                     <g id="Page-1" stroke="none" strokeWidth="1" fill="none">
//                       <g
//                         transform="translate(-916.000000, -262.000000)"
//                         fill="#9E9E9E"
//                         fillRule="nonzero">
//                         <path
//                           d="M933,262 C934.656854,262 936,263.343146 936,265 L936,279 C936,280.656854 934.656854,282 933,282 L919,282 C917.343146,282 916,280.656854 916,279 L916,265 C916,263.343146 917.343146,262 919,262 L933,262 Z M933,264 L919,264 C918.487164,264 918.064493,264.38604 918.006728,264.883379 L918,265 L918,279 C918,279.512836 918.38604,279.935507 918.883379,279.993272 L919,280 L933,280 C933.512836,280 933.935507,279.61396 933.993272,279.116621 L934,279 L934,265 C934,264.487164 933.61396,264.064493 933.116621,264.006728 L933,264 Z"
//                           id="Rectangle"></path>
//                       </g>
//                     </g>
//                   </svg>
//                 </i>
//                 <span>
//                   Квадрат

//                 </span>
//               </span>
//             </div>
//           </li>
//         </ul>
//       </li> */}

//       {/* <li
//         className={`choice__params__el ${open ? 'active' : ''}`}
//         data-active={size === '' ? false : true}
//         onMouseOver={() => {
//           setOpen(true);
//         }}
//         onMouseOut={() => {
//           setOpen(false);
//         }}
//         >
//         <button className="choice__params--button choice__params__el active">
//           <i className="rd__svg-icon-search">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 30">
//               <path d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 11.5V13H9v2.5L5.5 12 9 8.5V11h6V8.5l3.5 3.5-3.5 3.5z"></path>
//             </svg>
//           </i>
//           <span className="choice__params--span">
//             {size
//               ? size=== 'large'
//                 ? 'Large'
//                 : size=== 'medium'
//                   ? 'Medium'
//                   : 'Small'
//               : 'Size'}
//             </span>
//           <div
//             className="choice__params--clear"
//             onClick={() => setSize("")}
//             >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="17"
//               height="17"
//               viewBox="0 0 24 24">
//               <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
//             </svg>
//           </div>
//         </button>
//         <ul className="choice__params__el__options">
//           <li
//             data-active={size === '' ? true : false}
//            >
//             <div
//               onClick={() =>
//                 { setSize(``);
//                setCurrentPage(1);}}
//               >
//               <span>
//                 Alls

//               </span>
//             </div>
//           </li>
//           <li
//             data-active={size === 'large' ? true : false}
//            >
//             <div
//               onClick={() =>
//                 { setSize(`large`);
//                setCurrentPage(1);}}
//               >
//               <span>
//                 <i className="rd__svg-icon-search">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     xmlnsXlink="http://www.w3.org/1999/xlink"
//                     width="24px"
//                     height="18px"
//                     viewBox="0 0 24 18"
//                     version="1.1">
//                     <g
//                       id="Page-1"
//                       stroke="none"
//                       strokeWidth="1"
//                       fill="none"
//                       fillRule="evenodd">
//                       <g
//                         id="Search-Filters->-Desktop->-Filter-Click"
//                         transform="translate(-1094.000000, -183.000000)"
//                         fill="#9E9E9E">
//                         <g
//                           id="Group-7"
//                           transform="translate(1094.000000, 183.000000)">
//                           <path
//                             d="M21,0 C22.6568542,0 24,1.34314575 24,3 L24,15 C24,16.6568542 22.6568542,18 21,18 L3,18 C1.34314575,18 0,16.6568542 0,15 L0,3 C0,1.34314575 1.34314575,0 3,0 L21,0 Z M21,2 L3,2 C2.48716416,2 2.06449284,2.38604019 2.00672773,2.88337887 L2,3 L2,15 C2,15.5128358 2.38604019,15.9355072 2.88337887,15.9932723 L3,16 L21,16 C21.5128358,16 21.9355072,15.6139598 21.9932723,15.1166211 L22,15 L22,3 C22,2.48716416 21.6139598,2.06449284 21.1166211,2.00672773 L21,2 Z"
//                             id="Rectangle-Copy-28"
//                             fillRule="nonzero"></path>
//                           <path
//                             d="M5,4 L19,4 C19.5522847,4 20,4.44771525 20,5 L20,13 C20,13.5522847 19.5522847,14 19,14 L5,14 C4.44771525,14 4,13.5522847 4,13 L4,5 C4,4.44771525 4.44771525,4 5,4 Z"
//                             id="Rectangle-Copy-27"></path>
//                         </g>
//                       </g>
//                     </g>
//                   </svg>
//                 </i>
//                 <span>
//                   Большой&nbsp;24&nbsp;MP
//                 </span>
//               </span>
//             </div>
//           </li>
//           <li
//            data-active={size === 'medium' ? true : false}
//           >
//             <div
//               onClick={() =>
//                 { setSize(`medium`);
//                setCurrentPage(1);}}
//               >
//               <span>
//                 <i className="rd__svg-icon-search">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     xmlnsXlink="http://www.w3.org/1999/xlink"
//                     width="24px"
//                     height="18px"
//                     viewBox="0 0 24 18"
//                     version="1.1">
//                     <g
//                       id="Page-1"
//                       stroke="none"
//                       strokeWidth="1"
//                       fill="none"
//                       fillRule="evenodd">
//                       <g
//                         id="Search-Filters->-Desktop->-Filter-Click"
//                         transform="translate(-1094.000000, -223.000000)"
//                         fill="#9E9E9E">
//                         <g
//                           id="Group-8"
//                           transform="translate(1094.000000, 223.000000)">
//                           <path
//                             d="M21,0 C22.6568542,0 24,1.34314575 24,3 L24,15 C24,16.6568542 22.6568542,18 21,18 L3,18 C1.34314575,18 0,16.6568542 0,15 L0,3 C0,1.34314575 1.34314575,0 3,0 L21,0 Z M21,2 L3,2 C2.48716416,2 2.06449284,2.38604019 2.00672773,2.88337887 L2,3 L2,15 C2,15.5128358 2.38604019,15.9355072 2.88337887,15.9932723 L3,16 L21,16 C21.5128358,16 21.9355072,15.6139598 21.9932723,15.1166211 L22,15 L22,3 C22,2.48716416 21.6139598,2.06449284 21.1166211,2.00672773 L21,2 Z"
//                             id="Rectangle-Copy-22"
//                             fillRule="nonzero"></path>
//                           <path
//                             d="M10,6 L19,6 C19.5522847,6 20,6.44771525 20,7 L20,13 C20,13.5522847 19.5522847,14 19,14 L10,14 C9.44771525,14 9,13.5522847 9,13 L9,7 C9,6.44771525 9.44771525,6 10,6 Z"
//                             id="Rectangle-Copy-20"></path>
//                         </g>
//                       </g>
//                     </g>
//                   </svg>
//                 </i>
//                 <span>
//                   Средний&nbsp;12&nbsp;МП
//                 </span>
//               </span>
//             </div>
//           </li>
//           <li
//             data-active={size === 'small' ? true : false}
//            >
//             <div
//               onClick={() =>
//                 { setSize(`small`);
//                setCurrentPage(1);}
//               }
//               >
//               <span>
//                 <i className="rd__svg-icon-search">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     xmlnsXlink="http://www.w3.org/1999/xlink"
//                     width="24px"
//                     height="18px"
//                     viewBox="0 0 24 18"
//                     version="1.1">
//                     <g
//                       id="Page-1"
//                       stroke="none"
//                       strokeWidth="1"
//                       fill="none"
//                       fillRule="evenodd">
//                       <g
//                         id="Search-Filters->-Desktop->-Filter-Click"
//                         transform="translate(-1094.000000, -263.000000)"
//                         fill="#9E9E9E">
//                         <g
//                           id="Group-9"
//                           transform="translate(1094.000000, 263.000000)">
//                           <path
//                             d="M21,0 C22.6568542,0 24,1.34314575 24,3 L24,15 C24,16.6568542 22.6568542,18 21,18 L3,18 C1.34314575,18 0,16.6568542 0,15 L0,3 C0,1.34314575 1.34314575,0 3,0 L21,0 Z M21,2 L3,2 C2.48716416,2 2.06449284,2.38604019 2.00672773,2.88337887 L2,3 L2,15 C2,15.5128358 2.38604019,15.9355072 2.88337887,15.9932723 L3,16 L21,16 C21.5128358,16 21.9355072,15.6139598 21.9932723,15.1166211 L22,15 L22,3 C22,2.48716416 21.6139598,2.06449284 21.1166211,2.00672773 L21,2 Z"
//                             id="Rectangle-Copy-19"
//                             fillRule="nonzero"></path>
//                           <path
//                             d="M13,8 L19,8 C19.5522847,8 20,8.44771525 20,9 L20,13 C20,13.5522847 19.5522847,14 19,14 L13,14 C12.4477153,14 12,13.5522847 12,13 L12,9 C12,8.44771525 12.4477153,8 13,8 Z"
//                             id="Rectangle"></path>
//                         </g>
//                       </g>
//                     </g>
//                   </svg>
//                 </i>
//                 <span>
//                   Маленький&nbsp;4&nbsp;МП

//                 </span>
//               </span>
//             </div>
//           </li>
//         </ul>
//       </li> */}
//       <Size size={size}
//       funt={SizeChange}/>
//       <li className="choice__params__color">
//         <button className="choice__params--button choice__params__color">
//           <i className="rd__svg-icon">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 30">
//               <path d="M20.71 5.63l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42zM6.92 19L5 17.08l8.06-8.06 1.92 1.92L6.92 19z"></path>
//             </svg>
//           </i>
//           <span className="choice__params--span">
//             color
//             {/* <FormattedMessage id="color" /> */}
//           </span>
//         </button>
//       </li>
//     </ul>
//         </div>
//         <div className="search-photos__header">
//             <h1>
//               {word} фото
//             </h1>

//         </div>
// </div>
//         <InfiniteScroll
//           dataLength={items.length}
//           next={loadMore}
//           hasMore={true}
//           loader={<h4>Loading...</h4>}
//           endMessage={
//             <p style={{ textAlign: 'center' }}>
//               <b>Yay! You have seen it all</b>
//             </p>
//           } >
//           {/* REACT_APP_API_KEY = 563492ad6f91700001000001144a82244ce645b69edc061c1fa2e6bd; */}
//            <Photo items={items}/>
//        </InfiniteScroll>
//   </body>
//         );
// };

// //export default Categorys;

import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useSetSearchTerm } from '../../models/SearchTerm/use'
// import { useSearchTerm } from '../../models/SearchTerm/use';
import "../style.css";

import { useTranslation } from "react-i18next";

const Search = (props) => {
  const [search, setSearch] = useState(props.value);
  // const searchTerm = useSearchTerm();
  //const [search, setSearch] = useState(searchTerm);
  // const setSearchTerm = useSetSearchTerm();
  const { t, i18n } = useTranslation();

  const handleLinkClick = () => {
    console.log(search, "search");
    setSearchTerm(search);
  };

  const handleSearchChange = (event) => {
    props.funct && props.funct(event);
    setSearch(event.target.value);
  };

  return (
    <div className="main-nav-bar__search-bar">
      <form
        // action={`/search/${search}/`}
        onSubmit={(event) => {
          props.fun(event);
        }}
        autocomplete="off"
        className="search-bar"
        data-search-urls-photo="/ru-ru/search/---query/"
        data-search-urls-query-placeholder="---query"
        data-search-urls-video="/ru-ru/search/videos/---query/"
        method="get"
        role="search"
      >
        <div className="search-bar__container">
          <input
            value={search}
            onChange={handleSearchChange}
            autocapitalize="none"
            autocomplete="off"
            id="search"
            name="s"
            placeholder={t("searchPlaceholder")}
            required="required"
            type="search"
          />

          <button id="search-action" title="Поиск стоковых фото" type="submit">
            <Link to="search" onClick={handleLinkClick}>
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

export default Search;
