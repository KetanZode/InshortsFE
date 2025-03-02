import Floater from "./components/UserContent/Floater"
import Footer from "./components/Footers/Footer"
import HolderTile from "./components/UserContent/HolderTile"
import LoadMore from "./components/UserContent/LoadMore"
import Navbar from "./components/Headers/Navbar"
import UserContentWarpper from "./components/UserContent/UserContentWarpper"
import AdminContentWrapper from "./components/AdminContent/AdminContentWrapper"
import {useSelector, useDispatch} from "react-redux"
import { remsg } from "./features/errorSlice"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import { increment, decrement } from "./features/paramslice"


export default function App() {
  const panel = useSelector((state)=>state.panel.panel) 
  const param = useSelector((state) => state.param)
  const errormsg = useSelector((state) => state.errormsg)
  const dispatch = useDispatch()
  return (
    <Router>
    <>
    <div>
      {/* Header */}
        <Navbar/>
      {/* Header */}
      {/* {panel==='user' && <UserContentWarpper/>}
      {panel==='admin' && <AdminContentWrapper/>}
         */}

      <Routes>
        <Route path="/admin" element={<AdminContentWrapper />} />
        <Route path="/" element={<UserContentWarpper />} />
      </Routes>
      {/* Footer */}
      <Footer/>
      {/* Footer  */}
      </div>
    </>
    </Router>
  )
}