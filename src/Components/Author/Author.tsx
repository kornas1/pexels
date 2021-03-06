import React from "react";
import { useTranslation } from "react-i18next";
import {PhotoTypes} from "../../types/types";
import "../style.css";

  interface BackTypes{
    back:PhotoTypes
  }

  const Author = (back: BackTypes) => {
  const { t } = useTranslation();
  return (
    <div className="hero__footer">
      <div className="hero__footer__item"></div>
      <div className="hero__footer__item hero__footer__item--align-right">
        <a
          href={back.back.photographer_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            {t("photoBy")}: {back.back.photographer}
          </span>
        </a>
      </div>
    </div>
  );
};

export default Author;
