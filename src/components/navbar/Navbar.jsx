import { useContext, useState } from "react"
import "./navbar.scss"
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Navbar () {

  const [open, setOpen] = useState(false);

  const {currentUser} = useContext(AuthContext)


  return (
    <nav>
        <div className="left">
          <a href="/" className="logo">
            <img src="/logo.png" alt="" />
            <span>DormFinder</span>
          </a>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Faqs</a>
        </div>
        <div className="right">
          {currentUser ? (
            <div className="user">
              <img
                src={currentUser.avatar || "/noavatar.png"}
                alt=""
              />
              <span>{currentUser.username}</span>
              <Link to="/profile" className="profile">
                <div className="notification">3</div>
                <span>Profile</span>
              </Link>
            </div>
          ) : (
            <>
              <a href="/login">Login</a>
              <a href="/register" className="register">
                Register
              </a>
            </>
          )}
          <div className="menuIcon">
            <img
              src="/menu.png"
              alt="menu icon"
              onClick={() => setOpen((prev) => !prev)}
            />
          </div>
          <div className={open ? "menu active" : "menu"}>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Faqs</a>
            <a href="/">Login</a>
            <a href="/">Register</a>
          </div>
        </div>
    </nav>
  )
}

export default Navbar

//https://youtu.be/eJ3YysWaP_A?list=PLj-4DlPRT48njIa8I19ftTjUxyys9ebcf&t=6364