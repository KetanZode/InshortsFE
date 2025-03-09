import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import InfoComp from "/src/app/infonow/InfoComp"
import NotFound from "/src/components/NotFound";
import DashComp from "./app/dashboard/DashComp";

export default function App() {
  return (
    <Router>
   <>
   <Routes>
        <Route  path="/" element={ <InfoComp/> } />
        <Route  path="/infonow/*" element={ <InfoComp/> } />
        <Route  path="/dashboard/" element={ <DashComp/> } />
        <Route  path="*" element={ <NotFound/>} />
    </Routes>
   </>
   </Router>
  )
}