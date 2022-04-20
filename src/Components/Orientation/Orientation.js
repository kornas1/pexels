import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../style.css";

const Orientation = (props) => {
  const [category, setCategory] = useState(false);
  const { t } = useTranslation();
  return (
    <li
      className={`choice__params__el ${category ? "active" : ""}`}
      data-active={props.orientation === "" ? false : true}
      onMouseOver={() => {
        setCategory(true);
      }}
      onMouseOut={() => {
        setCategory(false);
      }}
    >
      <button className="choice__params--button choice__params__el active">
        <i className="rd__svg-icon-search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 30"
          >
            <path d="M16.48 2.52c3.27 1.55 5.61 4.72 5.97 8.48h1.5C23.44 4.84 18.29 0 12 0l-.66.03 3.81 3.81 1.33-1.32zm-6.25-.77c-.59-.59-1.54-.59-2.12 0L1.75 8.11c-.59.59-.59 1.54 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12L10.23 1.75zm4.6 19.44L2.81 9.17l6.36-6.36 12.02 12.02-6.36 6.36zm-7.31.29C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32z"></path>
          </svg>
        </i>
        <span className="choice__params--span">
          {props.orientation
            ? props.orientation === "landscape"
              ? t("horizontal")
              : props.orientation === "portrait"
              ? t("vertical")
              : t("square")
            : t("orientation")}
        </span>
        <div
          className="choice__params--clear"
          onClick={(event) => props.fun(event, ``)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
          </svg>
        </div>
      </button>
      <ul className="choice__params__el__options">
        <li data-active={props.orientation === "" ? true : false}>
          <div
            onClick={(event) => {
              props.fun(event, "");
              //   setOrientation("");
              //  setCurrentPage(1);
            }}
            // onClick={() =>
            //   params.update(size !== '' ? '/?size=' + size : '') }
          >
            <span>{t("all")}</span>
          </div>
        </li>
        <li data-active={props.orientation === "landscape" ? true : false}>
          <div
            //   onClick={() =>
            //  {
            //   // setOrientation(`landscape`);
            //   // setCurrentPage(1);
            //   }
            onClick={(event) => props.fun(event, `landscape`)}
          >
            <span>
              <i className="rd__svg-icon-search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="16px"
                  viewBox="0 0 24 16"
                  version="1.1"
                >
                  <g id="Page-1" stroke="none" strokeWidth="1" fill="none">
                    <g
                      transform="translate(-914.000000, -184.000000)"
                      fill="#9E9E9E"
                      fillRule="nonzero"
                    >
                      <path
                        d="M935,184 C936.656854,184 938,185.343146 938,187 L938,197 C938,198.656854 936.656854,200 935,200 L917,200 C915.343146,200 914,198.656854 914,197 L914,187 C914,185.343146 915.343146,184 917,184 L935,184 Z M935,186 L917,186 C916.487164,186 916.064493,186.38604 916.006728,186.883379 L916,187 L916,197 C916,197.512836 916.38604,197.935507 916.883379,197.993272 L917,198 L935,198 C935.512836,198 935.935507,197.61396 935.993272,197.116621 L936,197 L936,187 C936,186.487164 935.61396,186.064493 935.116621,186.006728 L935,186 Z"
                        id="Rectangle"
                      ></path>
                    </g>
                  </g>
                </svg>
              </i>
              <span>{t("horizontal")}</span>
            </span>
          </div>
        </li>
        <li data-active={props.orientation === "portrait" ? true : false}>
          <div
            //  onClick={() =>
            //     {
            //       // setOrientation(`portrait`);
            //       // setCurrentPage(1);
            //   }
            onClick={(event) => props.fun(event, `portrait`)}
            // }
          >
            <span>
              <i className="rd__svg-icon-search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="16px"
                  height="24px"
                  viewBox="0 0 16 24"
                  version="1.1"
                >
                  <g id="Page-1" stroke="none" strokeWidth="1" fill="none">
                    <g
                      transform="translate(-918.000000, -220.000000)"
                      fill="#9E9E9E"
                      fillRule="nonzero"
                    >
                      <path
                        d="M935,224 C936.656854,224 938,225.343146 938,227 L938,237 C938,238.656854 936.656854,240 935,240 L917,240 C915.343146,240 914,238.656854 914,237 L914,227 C914,225.343146 915.343146,224 917,224 L935,224 Z M935,226 L917,226 C916.487164,226 916.064493,226.38604 916.006728,226.883379 L916,227 L916,237 C916,237.512836 916.38604,237.935507 916.883379,237.993272 L917,238 L935,238 C935.512836,238 935.935507,237.61396 935.993272,237.116621 L936,237 L936,227 C936,226.487164 935.61396,226.064493 935.116621,226.006728 L935,226 Z"
                        id="Rectangle"
                        transform="translate(926.000000, 232.000000) rotate(-270.000000) translate(-926.000000, -232.000000) "
                      ></path>
                    </g>
                  </g>
                </svg>
              </i>
              <span>{t("vertical")}</span>
            </span>
          </div>
        </li>
        <li data-active={props.orientation === "square" ? true : false}>
          <div
            //  onClick={() =>
            // //   { setOrientation(`square`);
            // //  setCurrentPage(1);}
            // }
            onClick={(event) => props.fun(event, `square`)}
          >
            <span>
              <i className="rd__svg-icon-search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="20px"
                  height="20px"
                  viewBox="0 0 20 20"
                  version="1.1"
                >
                  <g id="Page-1" stroke="none" strokeWidth="1" fill="none">
                    <g
                      transform="translate(-916.000000, -262.000000)"
                      fill="#9E9E9E"
                      fillRule="nonzero"
                    >
                      <path
                        d="M933,262 C934.656854,262 936,263.343146 936,265 L936,279 C936,280.656854 934.656854,282 933,282 L919,282 C917.343146,282 916,280.656854 916,279 L916,265 C916,263.343146 917.343146,262 919,262 L933,262 Z M933,264 L919,264 C918.487164,264 918.064493,264.38604 918.006728,264.883379 L918,265 L918,279 C918,279.512836 918.38604,279.935507 918.883379,279.993272 L919,280 L933,280 C933.512836,280 933.935507,279.61396 933.993272,279.116621 L934,279 L934,265 C934,264.487164 933.61396,264.064493 933.116621,264.006728 L933,264 Z"
                        id="Rectangle"
                      ></path>
                    </g>
                  </g>
                </svg>
              </i>
              <span>{t("square")}</span>
            </span>
          </div>
        </li>
      </ul>
    </li>
  );
};

export default Orientation;
