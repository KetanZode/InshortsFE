import React from 'react'
import Floater from "/src/app/infonow/components/UserContent/Floater"
import Footer from "/src/app/infonow/components/Footers/Footer"
import HolderTile from "/src/app/infonow/components/UserContent/HolderTile"
import LoadMore from "/src/app/infonow/components/UserContent/LoadMore"
import Navbar from "/src/app/infonow/components/Headers/Navbar"
import UserContentWarpper from "/src/app/infonow/components/UserContent/UserContentWarpper"
import AdminContentWrapper from "/src/app/infonow/components/AdminContent/AdminContentWrapper"
import {useSelector, useDispatch} from "react-redux"
import { remsg } from "/src/app/infonow/features/errorSlice"
import LoadingBar from "react-top-loading-bar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import { increment, decrement } from "/src/app/infonow/features/paramslice"
import { setLoading } from "/src/app/infonow/features/articleSlice"

function InfoComp() {

    const panel = useSelector((state)=>state.panel.panel) 
    const param = useSelector((state) => state.param)
    const errormsg = useSelector((state) => state.errormsg)
    const error  = useSelector((state) => state.articles.error);
    const loading  = useSelector((state) => state.articles.loading);
    const dispatch = useDispatch()

  return (
    <>
    <div>
    <Navbar/>
        {/* <LoadingBar
        color="#366ff4"
        progress={loading}
        onLoaderFinished={() => dispatch(setLoading())}
      /> */}
            {/* Header */}
      {/* {panel==='user' && <UserContentWarpper/>}
      {panel==='admin' && <AdminContentWrapper/>}
         */}
         <Routes>
                <Route path="admin" element={<AdminContentWrapper />} />
                <Route path="user" element={<UserContentWarpper />} />
                <Route index element={<UserContentWarpper />} /> {/* Default route */}
        </Routes>

      {/* Footer */}
      <Footer/>
      {/* Footer  */}
      </div>
    </>
  )
}

export default InfoComp
