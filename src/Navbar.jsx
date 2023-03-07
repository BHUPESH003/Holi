import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link";

export default function Navbar(props) {

  
  return (
    <>
    <nav >
      <h1>
        {props.title}
      </h1>
      <ul>
      <HashLink to={"/"}>Home</HashLink>
        <HashLink to={"/#what"}>Cultural Significance</HashLink>
        <HashLink to={"/#brands"}>Celebrations</HashLink>
        <Link to="/about">About</Link>
     
      </ul>
    </nav>
   
    </>
  )
}
