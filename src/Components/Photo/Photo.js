import Masonry from "react-masonry-css";
import React from "react";
import { saveAs } from "file-saver";
import Like from "../Like/Like";
import "../style.css";

const Columns = {
  default: 4,
  1910: 3,
  1079: 2,
};

// interface ItemTypes{
//   items:{
//     photographer_url: string,
//     photographer: string
//   }
// }

const Photo = (items) => {
  return (
    <Masonry
      breakpointCols={Columns}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {items
        ? items.items.map((photo) => (
            <div key={photo.id} className="phot-col__photos__el">
              <article className="phot-col__photos__el__article">
                <a
                  className="phot-col__photos__el__link"
                  href={`https://www.pexels.com/ru-ru/photo/${photo.id}/`}
                >
                  <img
                    srcSet={photo.src ? photo.src.medium : ""}
                    className="photo-item__img"
                    alt="Фотография"
                    // style={{ backgroundColor: photo.avg_color }}
                  />
                </a>
                <div className="phot-col__photos__el--hov">
                  <a
                    className="phot-col__photos__el__author"
                    href={photo.photographer_url}
                  >
                    <img
                      alt="pexels"
                      className="phot-col__photos__el__author__avatar"
                      height="30"
                      width="30"
                      src="https://via.placeholder.com/256"
                    />
                    <span className="phot-col__photos__el__author__name">
                      {photo.photographer}
                    </span>
                  </a>
                  <div className="phot-col__photos__el__tabs">
                    <div
                      className="phot-col__photos__el__tabs__el phot-col__photos__el__tabs--download"
                      onClick={() =>
                        saveAs(photo.src ? photo.src.original : "", photo.id)
                      }
                    >
                      <i>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          height="100px"
                          width="100px"
                          fill="#000000"
                          version="1.1"
                          x="0px"
                          y="0px"
                          viewBox="0 0 100 100"
                          xmlSpace="preserve"
                        >
                          <g>
                            <path d="M72.2,43.2L58,57.4V17c0-2.2-1.8-4-4-4s-4,1.8-4,4v40.4L35.8,43.2c-1.6-1.6-4.1-1.6-5.7,0c-1.6,1.6-1.6,4.1,0,5.7l21,21   C52,70.7,53,71,54,71s2-0.4,2.8-1.2l21-21c1.6-1.6,1.6-4.1,0-5.7C76.3,41.6,73.8,41.6,72.2,43.2z"></path>
                            <path d="M32,87h44c2.2,0,4-1.8,4-4s-1.8-4-4-4H32c-2.2,0-4,1.8-4,4S29.8,87,32,87z"></path>
                          </g>
                        </svg>
                      </i>
                    </div>
                    <button className="phot-col__photos__el__tabs__el">
                      <i>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                        </svg>
                      </i>
                    </button>
                    <Like id={photo.id} />
                  </div>
                </div>
              </article>
            </div>
          ))
        : ""}
    </Masonry>
  );
};

export default Photo;
