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


export interface HintType{
  setSearchItem:(params:Params)=>{payload: Params, type: string}
}

export interface Params{
  search: { search: string }
}
const Hint = ({ setSearchItem }:HintType) => {
  const { t } = useTranslation();
  const [words, setwords] = useState<string[]>([]);
 
  const handleLinkClick = (word:string) => {
    setSearchItem(t(word as unknown as TemplateStringsArray) as unknown as Params);
    //@ts-ignore
    localStorage.setItem("search", t(word));
  };

  useEffect(() => {
    console.log(randomizer())
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

    return words.map((word:string , index:number) => (
    <Link key={index} to="search" onClick={() => handleLinkClick(word)}>
      <li
        key={index}
        className="hero__search-container__search-tags__tag-container__tag"
      >
        <div
        >
          {
          //@ts-ignore
          t(word)}
        </div>
      </li>
    </Link>
  ));
};

const mapStateToProps = (state:any) => ({});

const mapDispatchToProps = (dispatch:any) => {
  return {
    setSearchItem: (params:Params) => dispatch(setSearchItem(params)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Hint as any);

