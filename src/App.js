import Navbar from "./Navbar"

import Home from "./Components/Home"

import { Route, Routes } from "react-router-dom"
import './Styles/App.scss'
import './Styles/Header.scss'
import './Styles/Colors.scss'
// import './Styles/Contact.scss'
import './Styles/Home.scss'
import './Styles/Footer.scss'
import './Styles/MediaQuery.scss'
import Footer from "./Footer"
import About from "./Components/About"
 
const title="Holi 2K23";
function App() {
 
  return (
    <>
      <Navbar title={title}/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home title={title}/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </div>
      <Footer title={title}/>
    </>
  )
}

export default App