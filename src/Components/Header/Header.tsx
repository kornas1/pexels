import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {Search} from "../Search/Search";
import "../style.css";
import { useTranslation } from "react-i18next";


interface SizeTypes{
  props: number,
  funct?: any,
  // onClick: (event: React.MouseEvent<HTMLElement>) => void,
}

const Header = (props:SizeTypes) => {
  const [header, setHeader] = useState("header");
  const [open, setOpen] = useState(false);

  const { t, i18n } = useTranslation();

  const changeLanguage = (language:string) => {
    i18n.changeLanguage(language);
  };

  const listenScrollEvent = (event: Event) => {
    if (window.scrollY < 170) {
      return setHeader(
        "js-main-nav-bar js-main-nav-bar--transparent main-nav-bar"
      );
    } else if (window.scrollY > 170) {
      return setHeader("js-main-nav-bar  main-nav-bar ");
    }
  };

  useEffect(() => {
    setHeader("js-main-nav-bar js-main-nav-bar--transparent main-nav-bar");
    if (props.props === 1) {
      window.addEventListener("scroll", listenScrollEvent);
      return () => window.removeEventListener("scroll", listenScrollEvent);
    } else setHeader("js-main-nav-bar main-nav-bar");
  }, []);

  return (
    <nav className={header}>
      <Link to="/">
        <div
          className="main-nav-bar__logo"
          title="Бесплатные стоковые фото"
        >
          <div className="main-nav-bar__logo__img">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32px"
              height="32px"
              viewBox="0 0 32 32"
            >
              <path
                d="M2 0h28a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"
                fill="#05A081"
              ></path>
              <path
                d="M13 21h3.863v-3.752h1.167a3.124 3.124 0 1 0 0-6.248H13v10zm5.863 2H11V9h7.03a5.124 5.124 0 0 1 .833 10.18V23z"
                fill="#fff"
              ></path>
            </svg>
          </div>

          <div
            className="hide-when-mid-size-and-smaller main-nav-bar__logo__text"
          >
            Pexels
          </div>
        </div>
      </Link>
      <Search
     // @ts-ignore
       submitprops={props.funct}
      
        />
      <ul className="main-nav-bar__sub-nav dots">
        <li className="hide-when-mid-size-and-smaller">
          <div data-dropdown="explore">
            <a
              className="main-nav-bar__sub-nav__item"
              href="/ru-ru/discover/"
            >
              {t("explore")}
            </a>
          </div>
        </li>
        <li className="hide-when-mid-size-and-smaller">
          <a
            className="main-nav-bar__sub-nav__item"
            href="/ru-ru/license/"
          >
            {t("license")}
          </a>
        </li>

        <li className="hide-when-mid-size-and-smaller">
          <a
            className="main-nav-bar__sub-nav__item"
            href="/ru-ru/join-contributor/"
          >
            {t("upload")}
          </a>
        </li>
        <li
          className={`${open ? "drop active" : "drop"}`}
          onMouseOver={() => {
            setOpen(true);
          }}
          onMouseOut={() => {
            setOpen(false);
          }}
          style={{ marginRight: 2.15 + "rem" }}
        >
          <div className="dropdown">
            <button
              className="navbar__elements__el navbar__elements__el__a"
              style={{ marginRight: 0 }}
            >
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                </svg>
              </i>
            </button>
            <div className="dropdown__el">
              <div className="dropdown__el__content">
                <div className="dropdown__el__content-triangle"></div>

                <ul className="dropdown__el__content__elements">
                  <li className="dropdown__el__content__el">
                    <a
                      href="https://www.pexels.com/login/"
                      rel="nofollow noreferrer"
                    >
                      {t("login")}
                    </a>
                  </li>
                  <li className="dropdown__el__content__el">
                    <a
                      href="https://www.pexels.com/onboarding/"
                      rel="nofollow noreferrer"
                    >
                      {t("join")}
                    </a>
                  </li>
                  <li
                    className="dropdown__el__content__el"
                  >
                    {" "}
                    <span className="language">
                      <div className="flag">
                        {t("language")}
                        &nbsp;
                        <span
                          onClick={() => {
                            changeLanguage("en");
                          }}
                        >
                          <img
                            width="36"
                            height="26"
                            className="locale__flag"
                            alt="flag"
                            src="https://www.pexels.com/assets/flags/en-US-9ac49f52fbe3cc86ef500da8d7dfac4468c0e98419808425a9cdc1af7714cee1.png"
                          />
                        </span>
                        <span
                          onClick={() => {
                            changeLanguage("ru");
                          }}
                        >
                          <img
                            width="36"
                            height="26"
                            className="locale__flag"
                            alt="flag"
                            src="https://www.pexels.com/assets/flags/ru-RU-95c9aa90687ba690ada7173b898561d1bdde41742b76b28c396255f2f200fe98.png"
                          />
                        </span>
                      </div>
                    </span>
                  </li>
                  <li className="dropdown__el__content__el">
                    <a href="https://www.pexels.com/api/">{t("api")}</a>
                  </li>
                  <li className="dropdown__el__content__el">
                    <a href="https://www.pexels.com/pro/">
                      {t("appsPlugins")}
                    </a>
                  </li>
                  <li className="dropdown__el__content__el">
                    <a
                      href="https://help.pexels.com/hc"
                      rel="nofollow noreferrer"
                    >
                      {t("faq")}
                    </a>
                  </li>
                  <li className="dropdown__el__content__el">
                    <a href="https://www.pexels.com/become-a-partner/">
                      {t("parthnerships")}
                    </a>
                  </li>
                  <li className="dropdown__el__content__el">
                    <a
                      href="https://www.pexels.com/imprint/"
                      rel="nofollow noreferrer"
                    >
                      {t("imprint")}
                    </a>
                  </li>
                </ul>
                <div className="dropdown__el__content__footer">
                  <div className="rd__button-group">
                    <a
                      className="rd__button button__drop"
                      href="https://www.facebook.com/pexels"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Facebook"
                    >
                      <svg
                        version="1.1"
                        viewBox="0 0 512 512"
                        width="24"
                        height="20"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <path
                          d="M276.1,462V343.9h39.7l5.9-46h-45.6v-29.4c0-13.3,3.7-22.4,22.8-22.4l24.4,0v-41.2  c-4.2-0.6-18.7-1.8-35.5-1.8c-35.2,0-59.2,21.5-59.2,60.9v34h-39.8v46h39.8V462H276.1z"
                          id="f"
                        />
                      </svg>
                    </a>
                    <a
                      className="rd__button button__drop"
                      href="https://twitter.com/pexels"
                      rel="noopener noreferrer"
                      target="_blank"
                      title="Twitter"
                    >
                      <svg
                        enableBackground="new 0 0 128 128"
                        width="17"
                        height="17"
                        id="Social_Icons"
                        version="1.1"
                        viewBox="0 0 128 128"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <g id="_x37__stroke">
                          <g id="Twitter">
                            <rect
                              clipRule="evenodd"
                              fill="none"
                              fillRule="evenodd"
                              height="128"
                              width="128"
                            />
                            <path
                              clipRule="evenodd"
                              d="M128,23.294    c-4.703,2.142-9.767,3.59-15.079,4.237c5.424-3.328,9.587-8.606,11.548-14.892c-5.079,3.082-10.691,5.324-16.687,6.526    c-4.778-5.231-11.608-8.498-19.166-8.498c-14.493,0-26.251,12.057-26.251,26.927c0,2.111,0.225,4.16,0.676,6.133    C41.217,42.601,21.871,31.892,8.91,15.582c-2.261,3.991-3.554,8.621-3.554,13.552c0,9.338,4.636,17.581,11.683,22.412    c-4.297-0.131-8.355-1.356-11.901-3.359v0.331c0,13.051,9.053,23.937,21.074,26.403c-2.201,0.632-4.523,0.948-6.92,0.948    c-1.69,0-3.343-0.162-4.944-0.478c3.343,10.694,13.035,18.483,24.53,18.691c-8.986,7.227-20.315,11.533-32.614,11.533    c-2.119,0-4.215-0.123-6.266-0.37c11.623,7.627,25.432,12.088,40.255,12.088c48.309,0,74.717-41.026,74.717-76.612    c0-1.171-0.023-2.342-0.068-3.49C120.036,33.433,124.491,28.695,128,23.294"
                              fillRule="evenodd"
                              id="Twitter_1_"
                            />
                          </g>
                        </g>
                      </svg>
                    </a>
                    <a
                      className="rd__button button__drop"
                      href="https://instagram.com/pexels/"
                      rel="noopener noreferrer"
                      target="_blank"
                      title="Instagram"
                    >
                      <i className="rd__svg-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                        </svg>
                      </i>
                    </a>
                    <a
                      className="rd__button button__drop"
                      href="https://www.pinterest.com/pexels"
                      rel="noopener noreferrer"
                      target="_blank"
                      title="Pinterest"
                    >
                      <svg
                        enableBackground="new 0 0 512 512"
                        version="1.1"
                        width="17"
                        height="17"
                        viewBox="0 0 512 512"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <g>
                          <path d="M236.3,335.8c-1.9,7.7-3.6,14.5-5.3,21.3c-1.9,7.8-3.7,15.6-5.5,23.4c-2.2,9.5-3.9,19.1-6.7,28.3c-4,13.1-8,26.2-13.4,38.7   c-5,11.5-11.6,22.4-17.9,33.3c-5.2,8.9-11.1,17.5-16.9,26.1c-0.9,1.3-3.4,2.6-4.5,2.2c-1.4-0.5-3-2.7-3.2-4.3   c-3.8-30.3-5.8-60.8-1.8-91.2c1.6-12.3,4.9-24.3,7.4-36.5c1.6-8,3.2-16.1,4.9-24.2c2.1-9.9,4.3-19.9,6.5-29.8   c3.2-14.6,6.5-29.1,9.8-43.7c2.7-11.7,5.3-23.5,8.2-35.2c1.4-5.6-1.5-10.2-2.8-15.2c-4.3-17.2-7-34.3-3.8-52.2   c2.3-12.9,5.7-25.2,13-36.1c9.5-14.2,22.3-23.5,40.4-22.5c15.5,0.9,26.3,11,30.3,25.3c4.5,15.8,2.5,31.6-1.6,47.2   c-4.4,17-9.1,33.8-13.4,50.8c-2.7,10.6-6.6,21.2-7.2,32c-0.9,16.1,5.4,30.2,19.5,39.3c11.2,7.2,23.1,8.6,36.3,5.4   c17.5-4.3,29.6-15.2,39.8-29c12.1-16.3,18.9-34.8,24.2-54.3c6.5-24.2,9-48.6,8.5-73.5c-0.4-23-6.5-44.3-19.5-63.3   c-9.8-14.2-22.7-24.8-38.7-31.8c-10.2-4.5-20.3-8.4-31.5-8.9c-12.1-0.5-24.3-2.6-36.2-1.4c-35.9,3.9-65.6,19.7-88,48.5   c-8.9,11.5-16,24-20.7,37.5c-7.2,20.8-10.4,42.4-8.3,64.5c1.5,15.5,6,30.4,16.2,42.4c7,8.2,5.7,16.2,3.3,25   c-1.3,4.6-2.5,9.2-3.5,13.9c-1.7,8.4-6.4,12.7-16.1,8c-19.4-9.4-31.7-24.9-40.3-44.1c-12-26.9-14.1-55.3-11.3-83.9   c3.3-32.4,15.8-61.7,35-88c13.9-19,31.2-34.4,51.4-46.5c15.8-9.5,32.6-16.2,50.4-20.8c23.1-6,46.5-7.8,70-5.9   c17.6,1.4,34.6,5.6,51.1,12.4c28.5,11.8,51.8,29.9,70,54.6c10.8,14.7,19.1,30.8,24.5,48.4c3.2,10.4,5.9,20.8,6.2,31.7   c0.4,12.3,1.8,24.6,1.1,36.7c-0.7,12.9-3.3,25.8-5.3,38.6c-3.3,21.2-10.4,41.2-19.9,60.3c-8.2,16.4-18.5,31.3-31.8,44.2   c-13.4,13-28.8,22.7-46.4,29.1c-16.7,6.1-33.8,8.3-51.2,6.2c-20.7-2.6-38.2-11.9-51.3-28.7C239.4,339.1,238,337.7,236.3,335.8z" />
                        </g>
                      </svg>
                    </a>
                    <a
                      className="rd__button button__drop"
                      href="https://www.youtube.com/c/PexelsPhotos"
                      rel="noopener noreferrer"
                      target="_blank"
                      title="YouTube"
                    >
                      <i className="rd__svg-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="17"
                          viewBox="-21 -117 682.66672 682"
                          width="17"
                        >
                          <path d="m626.8125 64.035156c-7.375-27.417968-28.992188-49.03125-56.40625-56.414062-50.082031-13.703125-250.414062-13.703125-250.414062-13.703125s-200.324219 0-250.40625 13.183593c-26.886719 7.375-49.03125 29.519532-56.40625 56.933594-13.179688 50.078125-13.179688 153.933594-13.179688 153.933594s0 104.378906 13.179688 153.933594c7.382812 27.414062 28.992187 49.027344 56.410156 56.410156 50.605468 13.707031 250.410156 13.707031 250.410156 13.707031s200.324219 0 250.40625-13.183593c27.417969-7.378907 49.03125-28.992188 56.414062-56.40625 13.175782-50.082032 13.175782-153.933594 13.175782-153.933594s.527344-104.382813-13.183594-154.460938zm-370.601562 249.878906v-191.890624l166.585937 95.945312zm0 0"></path>
                        </svg>
                      </i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="buttonjoin">
          <a
            className="main-nav-bar__sub-nav__item main-nav-bar__sub-nav__item--button"
            href="/ru-ru/onboarding/"
          >
            {" "}
            {t("join")}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
