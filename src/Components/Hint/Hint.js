import React, { useState, useEffect } from 'react';
import '../style.css';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { useSetSearchTerm } from '../../models/SearchTerm/use';
//import { useSearchTerm } from '../../models/SearchTerm/use';

const list = [
    '4k',
    'фрукты',
    'ночь',
    'картины',
    'природа',
    'праздник',
    'океан',
    'дизайн',
    'друзья',
    'лес',
    'горы',
    'работа',
    'финляндия',
    'европа',
    'рождество',
    'цветы',
    'женщина',
    'зима',
    'лошади',
    'собаки',
    'peacock',
    'минимализм',
    'корабль',
    'услыбка',
    'звезды',
    'королева',
    'семья',
    'студент',
    'маникюр',
    'самолет',
    'лето',
    'луна',
    'мебель',
    'торт',
    'огонь',
    'конфеты',
    'эстетика',
    'вино',
    'зеркало',
    'пончик',
    'ваза',
    'пикник',
  ];


const Hint = () => {
  //const [search, setSearch] = useState(props.value);
  const setSearchTerm = useSetSearchTerm();

 const [word, setwords] = useState([]);
 const { t, i18n } = useTranslation();
////////////////////////
 const handleLinkClick = () => {
  setSearchTerm(word);
  console.log(setSearchTerm);
}

 useEffect(() => {
     let rand=0;
        rand = list[Math.floor(Math.random()*39)];

    setwords(rand);
  }, []);

  return ( 
     <Link to="search" onClick={handleLinkClick}>
            <li className='hero__search-container__search-tags__tag-container__tag' >
                <a className='#' data-popular-search-value='4k' data-track-action='popular-search' data-track-label='4k' >
                {word} </a>
            </li> 
            </Link>    
  );
};

export default Hint;