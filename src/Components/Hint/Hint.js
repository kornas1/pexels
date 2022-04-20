import React, { useState, useEffect } from "react";
import "../style.css";
import { Link } from "react-router-dom";
import { setSearchItem } from "../../actions/search";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

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
  const [words, setwords] = useState([]);

  const handleLinkClick = (word) => {
    setSearchItem(word);
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
          // className="#"
          // data-popular-search-value="4k"
          // data-track-action="popular-search"
          // data-track-label="4k"
        >
          {t(word)}
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
