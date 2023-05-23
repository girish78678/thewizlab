import Link from "next/link";
import Head from "next/head.js";
import FadeMenu from "./material";

const Header = () => {
  return(
    <header>
        <nav>
        <div className="navbar">
          <div className="logo">
            <Link href="/">
              <img src="images/homepage/header-logo.png" alt="Logo" />
            </Link>
          </div>

          <div id="mySidepanel" class="sidepanel">
                    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
                    <a class="no--border" href="#home">Home</a>
                    <a href="#" class="nav-link">Pages</a>
                    <a href="#" class="nav-link">Events </a>
                    <a href="#" class="nav-link"> Blog</a>
                    <a href="#" class="nav-link"> Shop</a>
                    <a href="#" class="nav-link"> Landing</a>
                </div>
                <button class="openbtn"> ☰ </button>
                
          <div className="nav-links">
            <ul className = "no-bullets">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="#"><FadeMenu /></Link>
              </li>
              <li>
                <Link href="/Blog">Blog</Link>
              </li>

              <li>
                <Link href="/shop">Shop</Link>
                 </li> 
              <li>
                <Link href="/grid-view">Grid Home</Link>
              </li>
              <li>
                <Link href="/Events">Events</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </header>
  )
    };
    
    export default Header;
    