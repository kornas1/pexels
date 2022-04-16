import React, { useState, useEffect } from "react";
import "../style.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
//import { useSetSearchTerm } from '../../models/SearchTerm/use';
//import { useSearchTerm } from '../../models/SearchTerm/use';
import { setSearchItem } from "../../actions/search";
import { connect } from "react-redux";
// import { getCategoryImages } from '../../actions/category';

const list = [
  "4k",
  "фрукты",
  "ночь",
  "картины",
  "природа",
  "праздник",
  "океан",
  "дизайн",
  "друзья",
  "лес",
  "горы",
  "работа",
  "финляндия",
  "европа",
  "рождество",
  "цветы",
  "женщина",
  "зима",
  "лошади",
  "собаки",
  "peacock",
  "минимализм",
  "корабль",
  "услыбка",
  "звезды",
  "королева",
  "семья",
  "студент",
  "маникюр",
  "самолет",
  "лето",
  "луна",
  "мебель",
  "торт",
  "огонь",
  "конфеты",
  "эстетика",
  "вино",
  "зеркало",
  "пончик",
  "ваза",
  "пикник",
];

const Hint = ({ setSearchItem }) => {
  //const [search, setSearch] = useState(props.value);
  // const setSearchTerm = useSetSearchTerm();

  //  const [word, setwords] = useState([]);
  const [words, setwords] = useState([]);
  const { t, i18n } = useTranslation();
  ////////////////////////
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
      if (!words.includes(rand)) {
        rands.push(rand);
        i++;
      }
    }
    return rands;
  };

  return words.map((word) => (
    <Link to="search" onClick={() => handleLinkClick(word)}>
      <li className="hero__search-container__search-tags__tag-container__tag">
        <a
          className="#"
          data-popular-search-value="4k"
          data-track-action="popular-search"
          data-track-label="4k"
        >
          {word}{" "}
        </a>
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
