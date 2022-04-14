import React, { useState, useEffect } from 'react';
import '../style.css';
import { useTranslation } from "react-i18next";

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
    
 const [word, setwords] = useState([]);
 const { t, i18n } = useTranslation();
 useEffect(() => {
     let rand=0;
        rand = list[Math.floor(Math.random()*39)];

    setwords(rand);
  }, []);

  return (
            <li className='hero__search-container__search-tags__tag-container__tag'>
                <a className='#' data-popular-search-value='4k' data-track-action='popular-search' data-track-label='4k' href='/ru-ru/search/4k/'>
                {word},
                </a>
            </li>     
  );
};

export default Hint;