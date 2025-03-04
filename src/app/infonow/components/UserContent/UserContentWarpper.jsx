import React, { useEffect, useState } from 'react'
import Floater from './Floater'
import HolderTile from './HolderTile'
import LoadMore from './LoadMore'

import { useSelector, useDispatch } from "react-redux";
import { createArticles, fetchArticles, updateArticles, deleteArticles, loadmoreArticles } from "../../features/articleSlice";
import { uppage } from '../../features/paramslice';


function UserContentWarpper() {
  const dispatch = useDispatch();
  const { articles } = useSelector((state) => state.articles);
  const lang  = useSelector((state) => state.lang.language);
  // const [page, setPage]  = useState(1);
  const page = useSelector((state)=>state.param.page)
  useEffect(() => {
    dispatch(fetchArticles(val));
  }, [dispatch,lang]);

  function handlepage(){
      const newPage = page + 1;
      dispatch(loadmoreArticles(`lang=${lang}&page=${newPage}`)); // ✅ Uses updated page
      dispatch(uppage())
    };
  
  const val = `lang=${lang}&page=${page}`

  return (
        <>
            <Floater/>
              {articles.map((article) => (
                  <HolderTile key={article.id} data={article} />
              ))}


        <div>
          <div className='flex justify-center '>
            <button onClick={handlepage} className='border px-10 py-1 mb-10 shadow-lg shadow-gray-300 rounded-md hover:scale-105 font-bold font-thin font-extralight text-gray-800'>Load More</button>
          </div>
        </div>        
    </>
  )
}

export default UserContentWarpper
