import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../style.css";

interface SizeTypes{
  size: string,
  funt: (event:React.MouseEvent<HTMLElement>, temp:string) => void  
  // onClick: (event: React.MouseEvent<HTMLElement>) => void,
}


const Size = (props: SizeTypes) => {
  const [open, setOpen] = useState(false);
  const { t} = useTranslation();
  return (
    <li
      className={`choice__params__el ${open ? "active" : ""}`}
      data-active={props.size === "" ? false : true}
      onMouseOver={() => {
        setOpen(true);
      }}
      onMouseOut={() => {
        setOpen(false);
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
            <path d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 11.5V13H9v2.5L5.5 12 9 8.5V11h6V8.5l3.5 3.5-3.5 3.5z"></path>
          </svg>
        </i>
        <span className="choice__params--span">
          {props.size
            ? props.size === "large"
              ? t("large")
              : props.size === "medium"
              ? t("medium")
              : t("small")
            : t("size")}
        </span>
        <div
          className="choice__params--clear"
          onClick={(event) => props.funt(event, ``)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 24 24"
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
          </svg>
        </div>
      </button>
      <ul className="choice__params__el__options">
        <li data-active={props.size === "" ? true : false}>
          <div
            onClick={(event) => props.funt(event, ``)}
          >
            <span>{t("allS")}</span>
          </div>
        </li>
        <li data-active={props.size === "large" ? true : false}>
          <div
            onClick={(event) => props.funt(event, `large`)}
          >
            <span>
              <i className="rd__svg-icon-search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="18px"
                  viewBox="0 0 24 18"
                  version="1.1"
                >
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Search-Filters->-Desktop->-Filter-Click"
                      transform="translate(-1094.000000, -183.000000)"
                      fill="#9E9E9E"
                    >
                      <g
                        id="Group-7"
                        transform="translate(1094.000000, 183.000000)"
                      >
                        <path
                          d="M21,0 C22.6568542,0 24,1.34314575 24,3 L24,15 C24,16.6568542 22.6568542,18 21,18 L3,18 C1.34314575,18 0,16.6568542 0,15 L0,3 C0,1.34314575 1.34314575,0 3,0 L21,0 Z M21,2 L3,2 C2.48716416,2 2.06449284,2.38604019 2.00672773,2.88337887 L2,3 L2,15 C2,15.5128358 2.38604019,15.9355072 2.88337887,15.9932723 L3,16 L21,16 C21.5128358,16 21.9355072,15.6139598 21.9932723,15.1166211 L22,15 L22,3 C22,2.48716416 21.6139598,2.06449284 21.1166211,2.00672773 L21,2 Z"
                          id="Rectangle-Copy-28"
                          fillRule="nonzero"
                        ></path>
                        <path
                          d="M5,4 L19,4 C19.5522847,4 20,4.44771525 20,5 L20,13 C20,13.5522847 19.5522847,14 19,14 L5,14 C4.44771525,14 4,13.5522847 4,13 L4,5 C4,4.44771525 4.44771525,4 5,4 Z"
                          id="Rectangle-Copy-27"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </i>
              <span>
                {t("large")}&nbsp;24&nbsp;{t("mp")}
              </span>
            </span>
          </div>
        </li>
        <li data-active={props.size === "medium" ? true : false}>
          <div
            onClick={(event) => props.funt(event, `medium`)}
          >
            <span>
              <i className="rd__svg-icon-search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="18px"
                  viewBox="0 0 24 18"
                  version="1.1"
                >
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Search-Filters->-Desktop->-Filter-Click"
                      transform="translate(-1094.000000, -223.000000)"
                      fill="#9E9E9E"
                    >
                      <g
                        id="Group-8"
                        transform="translate(1094.000000, 223.000000)"
                      >
                        <path
                          d="M21,0 C22.6568542,0 24,1.34314575 24,3 L24,15 C24,16.6568542 22.6568542,18 21,18 L3,18 C1.34314575,18 0,16.6568542 0,15 L0,3 C0,1.34314575 1.34314575,0 3,0 L21,0 Z M21,2 L3,2 C2.48716416,2 2.06449284,2.38604019 2.00672773,2.88337887 L2,3 L2,15 C2,15.5128358 2.38604019,15.9355072 2.88337887,15.9932723 L3,16 L21,16 C21.5128358,16 21.9355072,15.6139598 21.9932723,15.1166211 L22,15 L22,3 C22,2.48716416 21.6139598,2.06449284 21.1166211,2.00672773 L21,2 Z"
                          id="Rectangle-Copy-22"
                          fillRule="nonzero"
                        ></path>
                        <path
                          d="M10,6 L19,6 C19.5522847,6 20,6.44771525 20,7 L20,13 C20,13.5522847 19.5522847,14 19,14 L10,14 C9.44771525,14 9,13.5522847 9,13 L9,7 C9,6.44771525 9.44771525,6 10,6 Z"
                          id="Rectangle-Copy-20"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </i>
              <span>
                {t("medium")}&nbsp;12&nbsp;{t("mp")}
              </span>
            </span>
          </div>
        </li>
        <li data-active={props.size === "small" ? true : false}>
          <div
            onClick={(event) => props.funt(event, `small`)}
          >
            <span>
              <i className="rd__svg-icon-search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="18px"
                  viewBox="0 0 24 18"
                  version="1.1"
                >
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Search-Filters->-Desktop->-Filter-Click"
                      transform="translate(-1094.000000, -263.000000)"
                      fill="#9E9E9E"
                    >
                      <g
                        id="Group-9"
                        transform="translate(1094.000000, 263.000000)"
                      >
                        <path
                          d="M21,0 C22.6568542,0 24,1.34314575 24,3 L24,15 C24,16.6568542 22.6568542,18 21,18 L3,18 C1.34314575,18 0,16.6568542 0,15 L0,3 C0,1.34314575 1.34314575,0 3,0 L21,0 Z M21,2 L3,2 C2.48716416,2 2.06449284,2.38604019 2.00672773,2.88337887 L2,3 L2,15 C2,15.5128358 2.38604019,15.9355072 2.88337887,15.9932723 L3,16 L21,16 C21.5128358,16 21.9355072,15.6139598 21.9932723,15.1166211 L22,15 L22,3 C22,2.48716416 21.6139598,2.06449284 21.1166211,2.00672773 L21,2 Z"
                          id="Rectangle-Copy-19"
                          fillRule="nonzero"
                        ></path>
                        <path
                          d="M13,8 L19,8 C19.5522847,8 20,8.44771525 20,9 L20,13 C20,13.5522847 19.5522847,14 19,14 L13,14 C12.4477153,14 12,13.5522847 12,13 L12,9 C12,8.44771525 12.4477153,8 13,8 Z"
                          id="Rectangle"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </i>
              <span>
                {t("small")}&nbsp;4&nbsp;{t("mp")}
              </span>
            </span>
          </div>
        </li>
      </ul>
    </li>
  );
};

export default Size;
