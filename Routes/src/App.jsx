import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Profile from "./pages/DashBoard";
import NotFound from "./pages/NotFound";
import "./App.css";  // ✅ Import CSS

const App = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/profile/johndoe">Profile</Link></li>
                </ul>
            </nav>

            <div className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/profile/:username" element={<Profile />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </>
    );
};

export default App;
