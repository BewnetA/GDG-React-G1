import AboutUs from "./pages/AboutUs"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import {Routes, Route, Link} from "react-router-dom"

function NotFound(){
  return <h2>Sorry man Nothing to see here.</h2>
}
function App() {

  return (
    <>
     <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      </nav>
        {/* <Router> */}
          <Routes>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<AboutUs/>}/>
            <Route path="/contact" element={<Contact/>}/>
            </Routes>
        {/* </Router> */}

        <h1>Routers</h1>
    </>
  );
}

export default App;
