import React, {useEffect, useState, useCallback} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
 import Header from '../Components/Header/Header';
 import Photo from '../Components/Photo/Photo';
 import Choice from '../Components/Choice/Choice';
 import Size from '../Components/Size/Size';
 import { useTranslation } from "react-i18next";
 import { useSearchTerm } from '../models/SearchTerm/use';
 import '../Components/style.css';
import Orientation from '../Components/Orientation/Orientation';
//import { getValue } from '@testing-library/user-event/dist/utils';

const API_KEY=`${process.env.REACT_APP_API_KEY}`

const Category = () => {

  const { t, i18n } = useTranslation();
  const [items, setItems] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
  const [, setFetching] = useState(true);

  const searchTerm = useSearchTerm();
  const [value, setValue] = useState(searchTerm);

  const [word, setWord] = useState("");
  const [totalresults, setTotalPhotos] = useState(0);
  const [orientation, setOrientation] = useState("");
  // const [category, setCategory] = useState(false);
 //   const [open, setOpen] = useState(false);
  const [size, setSize]= useState("");
  let str="";

  const handleSubmit= useCallback((event) =>{
     event.preventDefault();
     setCurrentPage(1);
     setWord(value);
     if (currentPage === 1) {
         fetchData()
      }
    }, [currentPage, value])
  
    const handleChange=(event) =>{
      setValue(event.target.value);
    }

    const FilterChange=(event,temp) =>{
      setOrientation(temp);
      setCurrentPage(1);
     
    }
    
    const SizeChange=(event,temp) =>{
      setSize(temp);
      setCurrentPage(1);
    }
    
     str = (orientation===``? ``: `&orientation=`)+orientation+(size===``? ``: `&size=`)+size;

    const fetchData = useCallback(async () => {
     console.log(orientation);
     console.log("fetch");
      await fetch(
        `https://api.pexels.com/v1/search?page=${currentPage || 0}&query=${value}&per_page=40${str}`,
        {
          method: 'GET',
          headers: {
            Authorization: API_KEY,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          if(data && data.photos){
              if (currentPage === 1) {
                  setItems(data.photos);
              } else {
                  setItems([...items, ...data.photos]);
              }
              setTotalPhotos(data.total_results);
          }
        })
        .finally(() => setFetching(false));

    
    }, [value, currentPage, orientation, size]);


  const loadMore = useCallback(() => {
      setCurrentPage(currentPage + 1);
  }, [currentPage])

  useEffect(() => {
    fetchData();
  }, [currentPage, orientation, size]); // eslint-disable-line react-hooks/exhaustive-deps


  return (
    <body>
    <Header props={0} 
     fun={handleSubmit} 
     funct={handleChange}
     value={value}/>

<div className="search-photos">
        <div className="choice">
          <Choice total_results={totalresults}/>
          <ul className="choice__element choice__params hide-when-1080">
            <Orientation orientation={orientation} 
            fun={FilterChange}
            />
     
      <Size size={size} 
      funt={SizeChange}/>
      <li className="choice__params__color">
        <button className="choice__params--button choice__params__color">
          <i className="rd__svg-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 30">
              <path d="M20.71 5.63l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42zM6.92 19L5 17.08l8.06-8.06 1.92 1.92L6.92 19z"></path>
            </svg>
          </i>
          <span className="choice__params--span">
          {t("color")} 
           
          </span>
        </button>
      </li>
    </ul>
        </div>
        <div className="search-photos__header">
            <h1>
              {word} {t("photos")} 
            </h1>
         
        </div>
</div>
        <InfiniteScroll
          dataLength={items.length} 
          next={loadMore}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          } >
          {/* REACT_APP_API_KEY =  563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf; */}
           <Photo items={items}/>
       </InfiniteScroll>
  </body>
        );
};

export default Category;