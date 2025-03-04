import React, { useEffect, useState } from 'react'
import Floater from './Floater'
import HolderTile from './HolderTile'
import LoadMore from './LoadMore'
import InfiniteScroll from "react-infinite-scroll-component"; 
import { useSelector, useDispatch } from "react-redux";
import { createArticles, fetchArticles, updateArticles, deleteArticles, loadmoreArticles } from "../../features/articleSlice";
import { uppage } from '../../features/paramslice';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';



function UserContentWarpper() {
  const dispatch = useDispatch();
  const {articles} = useSelector((state) => state.articles);
  const {count} = useSelector((state) => state.articles);
  const lang  = useSelector((state) => state.lang.language);
  // const [page, setPage]  = useState(1);
  const page = useSelector((state)=>state.param.page)
  useEffect(() => {
    dispatch(fetchArticles(val));
  }, [lang]);

  function handlepage(){
      const newPage = page + 1;
      dispatch(loadmoreArticles(`lang=${lang}&page=${newPage}`)); // ✅ Uses updated page
      dispatch(uppage())
    };
  
  const val = `lang=${lang}&page=${page}`
  console.log(count,'****************', articles)

  return (
        <>
      
            <Floater/>
      <InfiniteScroll
              dataLength={articles.length} //This is important field to render the next data
              next={handlepage}
              hasMore={true}
              // loader={        <DotLottieReact src="/assets/gifs/loader.lottie"/>}
              loader={      <div className='flex justify-center'><img src="/assets/Spinning arrows.gif"/></div>  }
              endMessage={
                <p style={{ textAlign: 'center' }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
          >
              {/* {items} */}
              {Array.isArray(articles) &&
        articles.map((article) => (
          <HolderTile key={article.id} data={article} />
      ))}
      </InfiniteScroll>
      

        {/* <div>
          <div className='flex justify-center '>
            <button onClick={handlepage} className='border px-10 py-1 mb-10 shadow-lg shadow-gray-300 rounded-md hover:scale-105 font-bold font-thin font-extralight text-gray-800'>Load More</button>
          </div>
        </div>         */}
    </>
  )
}

export default UserContentWarpper
