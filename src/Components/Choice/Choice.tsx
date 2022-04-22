import React from "react";
import { useTranslation } from "react-i18next";
import "../style.css";

interface ChoiceTypes{
  total_results:number
}

const Choice = (props: ChoiceTypes) => {
  const { t } = useTranslation();
  return (
    <ul className="choice__element choice__format">
      <li>
        <a className="active" href="/search">
          <i className="rd__svg-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 30"
            >
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"></path>
            </svg>
          </i>
          <span>{t("photos")}</span>
          <small>
            {" "}
            ·{" "}
            {props.total_results
              ? props.total_results < 1000
                ? props.total_results
                : (props.total_results / 1000).toFixed(2) + "K"
              : 0}
          </small>
        </a>
      </li>
      <li>
        <a href="https://www.pexels.com/search/videos">
          <i className="rd__svg-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 30"
            >
              <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"></path>
            </svg>
          </i>
          <span>{t("video")}</span>
          <small> · 0</small>
        </a>
      </li>
      <li>
        <a href="https://www.pexels.com/search/users/">
          <i className="rd__svg-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 30"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
            </svg>
          </i>
          <span>{t("users")}</span>
          <small> · 0</small>
        </a>
      </li>
    </ul>
  );
};

export default Choice;
