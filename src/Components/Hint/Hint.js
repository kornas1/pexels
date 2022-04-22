// import React, { useState, useEffect } from "react";
// import "../style.css";
// import { Link } from "react-router-dom";
// import { setSearchItem } from "../../actions/search";
// import { connect } from "react-redux";
// import { useTranslation } from "react-i18next";

// let list = [
//   "4k",
//   "fruits",
//   "night",
//   "paintings",
//   "nature",
//   "holiday",
//   "ocean",
//   "design",
//   "friends",
//   "forest",
//   "mountains",
//   "work",
//   "finland",
//   "europe",
//   "christmas",
//   "flowers",
//   "woman",
//   "winter",
//   "horses",
//   "dogs",
//   "minimalism",
//   "ship",
//   "smile",
//   "stars",
//   "queen",
//   "family",
//   "student",
//   "manicure",
//   "airplane",
//   "summer",
//   "moon",
//   "furniture",
//   "cake",
//   "fire",
//   "candy",
//   "aesthetics",
//   "wine",
//   "mirror",
//   "donut",
//   "vase",
//   "picnic",
// ];


// // interface HintType{
// //   setSearchItem:(params:Params)=>{payload: Params, type: string}
// // }
// // interface Params{
// //   search: string
// // }
// // const Hint = ({ setSearchItem }:HintType) => {
//   const Hint = ({ setSearchItem }) => {
//   const { t } = useTranslation();
//   // const [words, setwords] = useState<string[]>([]);
//   const [words, setwords] = useState([]);

//   // const handleLinkClick = (word:Params) => {
//   //   setSearchItem(word);
//   // };
//   const handleLinkClick = (word) => {
//     setSearchItem(word);
//   };

//   useEffect(() => {
//     console.log(randomizer())
//     setwords(randomizer());
//   }, []);

//   // const randomizer:()=>string[] = () => {
//   //   let rand:string = "";
//   //   let i:number = 0;
//   //   let rands:string[] = [];
//   const randomizer = () => {
//     let rand= "";
//     let i = 0;
//     let rands = [];
//     while (i < 7) {
//       rand = list[Math.floor(Math.random() * 39)];
//       if (!rands.includes(rand)) {
//         rands.push(rand);
//         i++;
//       }
//     }
//     return rands;
//   };

//   return words.map((word, index) => (
//     // return words.map((word: , index:number) => (
//     <Link key={index} to="search" onClick={() => handleLinkClick(word)}>
//       <li
//         key={index}
//         className="hero__search-container__search-tags__tag-container__tag"
//       >
//         <div
//         >
//           {t(word)}
//         </div>
//       </li>
//     </Link>
//   ));
// };

// // const mapStateToProps = (state:any) => ({});

// // const mapDispatchToProps = (dispatch:any) => {
// //   return {
// //     setSearchItem: (params:string) => dispatch(setSearchItem(params)),
// //   };
// // };
// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setSearchItem: (params) => dispatch(setSearchItem(params)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Hint);

import React, { useState, useEffect } from "react";
import "../style.css";
import { Link } from "react-router-dom";
//import { useTranslation } from "react-i18next";
//import { useSetSearchTerm } from '../../models/SearchTerm/use';
//import { useSearchTerm } from '../../models/SearchTerm/use';
import { setSearchItem } from "../../actions/search";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
// import { getCategoryImages } from '../../actions/category';

let list = [
  "4k",
  "fruits",
  "night",
  "paintings",
  "nature",
  "holiday",
  "ocean",
  "design",
  "friends",
  "forest",
  "mountains",
  "work",
  "finland",
  "europe",
  "christmas",
  "flowers",
  "woman",
  "winter",
  "horses",
  "dogs",
  "minimalism",
  "ship",
  "smile",
  "stars",
  "queen",
  "family",
  "student",
  "manicure",
  "airplane",
  "summer",
  "moon",
  "furniture",
  "cake",
  "fire",
  "candy",
  "aesthetics",
  "wine",
  "mirror",
  "donut",
  "vase",
  "picnic",
];

const Hint = ({ setSearchItem }) => {
  const { t } = useTranslation();

  //const [search, setSearch] = useState(props.value);
  // const setSearchTerm = useSetSearchTerm();

  //  const [word, setwords] = useState([]);
  const [words, setwords] = useState([]);
  // const { t, i18n } = useTranslation();
  ////////////////////////

  const handleLinkClick = (word) => {
    setSearchItem(t(word));
  };

  useEffect(() => {
    setwords(randomizer());
  }, []);

  const randomizer = () => {
    let rand = "";
    let i = 0;
    let rands = [];
    while (i < 8) {
      rand = list[Math.floor(Math.random() * 39)];

      if (!rands.includes(rand)) {
        rands.push(rand);
        i++;
      }
    }
    return rands;
  };

  return words.map((word, index) => (
    <Link key={index} to="search" onClick={() => handleLinkClick(word)}>
      <li
        key={index}
        className="hero__search-container__search-tags__tag-container__tag"
      >
        <div
          className="#"
          data-popular-search-value="4k"
          data-track-action="popular-search"
          data-track-label="4k"
          // className="#"
          // data-popular-search-value="4k"
          // data-track-action="popular-search"
          // data-track-label="4k"
        >
          {t(word)}
          {/* {word}{" "} */}
        </div>
      </li>
    </Link>
  ));
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchItem: (params) => dispatch(setSearchItem(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hint);
