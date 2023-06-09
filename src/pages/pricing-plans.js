import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Header from "@/components/Header";
import dynamic from "next/dynamic";
import FadeMenu from "@/components/material";
import Footer from "../components/Footer";
import Slideshow from "../components/slideshow";
export default function Plans() {
  return (
    <>
      <Head>
        <title> playroom - kids Theme </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="ROP">
        <header>
          <div className="navbar navbar-grid">
            <div className="logo">
              <Link href="/">
                <img src="images/homepage/header-logo.png" alt="Logo" />
              </Link>
            </div>

            <div id="mySidepanel" className="sidepanel">
              <a
                href="javascript:void(0)"
                className="closebtn"
                onClick={() => closeNav()}
              >
                
              </a>
              <a className="no--border" href="#home">
                Home
              </a>
              <a href="#" className="nav-link">
                Pages
              </a>
              <a href="#" className="nav-link">
                Events
              </a>
              <a href="#" className="nav-link">
                Blog
              </a>
              <a href="#" className="nav-link">
                Shop
              </a>
              <a href="#" className="nav-link">
                Landing
              </a>
            </div>
            <button className="openbtn open-btn-grid" onClick={() => openNav()}>
              ...
            </button>
          </div>
          <div className="navbar navbar--ROP">
            <div className="logo">
              <Link href="/">
                <img src="images/homepage/header-logo.png" alt="Logo" />
              </Link>
            </div>

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
        </header>
        <div className="ROP--hero">
          <p> Check Out Our Offers</p>
          <h1> Pricing Plans </h1>
        </div>
        <div className="new-events--2">
          <div className="play-more-img">
            <img src="images/pricing-plans/hero.png" alt="kid image" />
          </div>
          <div className=" event-play-section event-play-section--2">
            <h2>Play and Fun kids</h2>
            <h1>
              <span className="first-color">Kid's </span> 
              <span className="second-color">Fun & Play </span> 
              <span className="third-color">Space</span>
            </h1>
            <p>
              Insolens elaboraret eum no. Persius persecuti sea, quo ad adhuc
              animals honestatis modus congue unum alienum sed.
            </p>
            <div className="fun--play--flexbox">
              <div className="fun--play-item">
                <div className="play-feat-img">
                  <img
                    src="images/pricing-plans/feature-1.png"
                    alt="features image"
                  />
                </div>
                <div className="play-feat-text">
                  <h3> Colorfull To Balloons </h3>
                </div>
              </div>
              <div className="fun--play-item">
                <div className="play-feat-img">
                  <img
                    src="images/pricing-plans/feature-2.png"
                    alt="features image"
                  />
                </div>
                <div className="play-feat-text">
                  <h3>Your 100% Private Space </h3>
                </div>
              </div>
              <div className="fun--play-item">
                <div className="play-feat-img">
                  <img
                    src="images/pricing-plans/feature-3.png"
                    alt="features image"
                  />
                </div>
                <div className="play-feat-text">
                  <h3>Candy Top Bar Center</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="qodef-pricing-plans pricing-plans--2">
          <p>
            {" "}
            <span className="sub-heading">Welcome Idea</span>
          </p>
          <h1>
            <span className="green">Events</span>{" "}
            <span className="second-color">For</span>{" "}
            <span className="third-color">May</span>
          </h1>
          <div className="pricing-flexbox pricing-flexbox--2">
            <div className="pricing-item pricing-item--2 pricing-item-1">
              <div className="pricing-image">
                <img
                  src="images/grid-home/36$.png"
                  alt="your-image-description"
                />
                <div className="pricing-image-text">
                  <h2 className="no-background ">36$</h2>
                </div>
              </div>
              <h2 className="no-background ">Garden 1Hr</h2>
              <p className="no-background ">Te sint tincidu accomo</p>
              <button>Buy Now</button>
            </div>
            <div className="pricing-item pricing-item--2 pricing-item-2">
              <div className="pricing-image ">
                <img
                  src="images/grid-home/202$.png"
                  alt="your-image-description"
                />
                <div className="pricing-image-text">
                  <h2>202$</h2>
                </div>
              </div>
              <h2>Mini Party</h2>
              <p>Te sint tincidu accomo</p>
              <button>Buy Now</button>
            </div>
            <div className="pricing-item pricing-item--2 pricing-item-3">
              <div className="pricing-image">
                <img
                  src="images/grid-home/161$.png"
                  alt="your-image-description"
                />
                <div className="pricing-image-text">
                  <h2>161$</h2>
                </div>
              </div>
              <h2>Art Class</h2>
              <p>Te sint tincidu accomo</p>
              <button>Buy Now</button>
            </div>
            <div className="pricing-item pricing-item--2 pricing-item-3">
              <div className="pricing-image">
                <img
                  src="images/pricing-plans/pricing.png"
                  alt="your-image-description"
                />
                <div className="pricing-image-text">
                  <h2>326$</h2>
                </div>
              </div>
              <h2>B-day Party</h2>
              <p>Te sint tincidu accomo</p>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
        <div className="slideshow">
          <Slideshow />
        </div>
        <div className="fun-center fun-center--3">
          <h2> Welcome For</h2>
          <h1>
            <span className="first-color"> Our </span>
            <span className="second-color"> Party </span>
            <span className="third-color"> Add On's </span>
          </h1>

          <div className="context-menu-flx">
            <div className="text--head">
              <h5 class="qodef-accordion-title">
                <span class="qodef-tab-title">Magic Birthday Party </span>
              </h5>
              <p>
                E tritani albucius vim, eam ne non umes splendide, ut ius ferri
                populo pri errem pertinax cu ei modo
              </p>
            </div>
            <div className="text--head">
              <h5 class="qodef-accordion-title">
                <span class="qodef-tab-title">Pool Party </span>
              </h5>
              <p>
              Vix ne mundi animal voluptaria, persius volumus pri id, ne eos copiosae indoctum constituam liquando
              </p>
            </div>
            <div className="text--head">
              <h5 class="qodef-accordion-title">
                <span class="qodef-tab-title"> Funny Clown Party </span>
              </h5>
              <p>
              Sea an audire oblique salutatus, solum saepe contentiones ea nec, alia natum conclusion
              </p>
            </div>
            <div className="text--head">
              <h5 class="qodef-accordion-title">
                <span class="qodef-tab-title">Dance Party </span>
              </h5>
              <p>
             

Putant adipisci patrioque in has, te quo possit persius conceptam pri ut iracundia quaerendum

              </p>
            </div>
            <div className="text--head">
              <h5 class="qodef-accordion-title">
                <span class="qodef-tab-title">Costume Party </span>
              </h5>
              <p>
              Ea vis justo invidunt, ne civibus invidunt sit. Sed impedit recusabo adolescens ea, pri erat mutat
              </p>
            </div>
            <div className="text--head">
              <h5 class="qodef-accordion-title">
                <span class="qodef-tab-title">Surprise Party </span>
              </h5>
              <p>
              Has veri simul scaevola eu, movet laudem putant nec at, eu est iusto altera iriure
              </p>
            </div>
          </div>
        </div>
      </main>
      <div className="footer-sec">
        <Footer />
      </div>
    </>
  );
}
