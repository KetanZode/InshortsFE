import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import InfoComp from "/src/app/infonow/infoComp"
import NotFound from "/src/components/NotFound";

export default function App() {
  return (
    <Router>
   <>
   <Routes>
        <Route  path="/infonow/*" element={ <InfoComp/>} />
        <Route  path="*" element={ <NotFound/>} />
    </Routes>
   </>
   </Router>
  )
}