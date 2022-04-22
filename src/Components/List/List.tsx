import React from "react";
import { useTranslation } from "react-i18next";
import "../style.css";

const List: React.FC = () => {
  const { t} = useTranslation();
  return (
    <div className="list">
      <a className="list__el list__el--active" href="/">
        {t("home")}
      </a>
      <a className="list__el" href="https://www.pexels.com/discover/">
        {t("discov")}
      </a>
      <a className="list__el" href="https://www.pexels.com/videos/">
        {t("video")}
      </a>
      <a className="list__el " href="https://www.pexels.com/leaderboard/">
        {t("leaderboard")}
      </a>
      <a className="list__el" href="https://www.pexels.com/challenges/">
        {t("challenges")}
      </a>
    </div>
  );
};

export default List;
