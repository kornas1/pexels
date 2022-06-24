import React, { useState, useEffect } from "react";
import "../style.css";
import { Link } from "react-router-dom";
import { setSearchItem } from "../../actions/search";
import { connect, useDispatch } from "react-redux";
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



export const Hint = () => {
  const { t } = useTranslation();
  const [words, setwords] = useState<string[]>([]);
  const dispatch = useDispatch();

  const handleLinkClick = (word:string) => {
   dispatch(setSearchItem(t(word as unknown as TemplateStringsArray) as string));
  };

  useEffect(() => {
    setwords(randomizer());
  }, []);

  const randomizer:()=>string[] = () => {
    let rand:string = "";
    let i:number = 0;
    let rands:string[] = [];
    while (i < 7) {
      rand = list[Math.floor(Math.random() * 39)];
      if (!rands.includes(rand)) {
        rands.push(rand);
        i++;
      }
    }
    return rands;
  };

    const fun = () =>{
     return words.map((word:string , index:number) => (
        <Link key={index} to={`/search/${word}`} onClick={() => handleLinkClick(word)}>
          <li
            key={index}
            className="hero__search-container__search-tags__tag-container__tag"
          >
            <div
            >
              {t(word)}
            </div>
          </li>
        </Link>
      ));
    }

    return <>{fun()}</>
};



