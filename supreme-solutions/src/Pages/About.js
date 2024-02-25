import React, { useEffect } from "react";
import Header from "../Components/Navbar";
import Services from "../Components/Services-About";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faMinus as faMinusHorizon } from "@fortawesome/free-solid-svg-icons";
import Performance from "../Images/Service-Display.jpg";
import Display from "../Images/hand.jpg";
import CopyTrade from "../Images/copy-trade.png";
import Education from "../Images/education.png";
import Profile from "../Images/Service-display1.jpg";
import risk from "../Images/risk.png";
import Port from "../Images/Portfolio-Mgt.png";
import RealEstate from "../Images/Real-estate.png";
import performance from "../Images/performance.png";
import ImageSlider from "../Components/ImageSlider";
import Copy from "../Images/copy.jpg";
import Portfolio from "../Images/Portfolio3.jpg";
import Investor from "../Images/Investor6.jpg";
import Risk from "../Images/Risk3.jpg";
import Real from "../Images/Real Estate.jpg";
/* Team Images below */
import Truly from "../Images/Steve1.png";
import Joseph from "../Images/Steve.jpg";
import Masake from "../Images/Steve3.jpg";

export default function About() {
  useEffect(() => {
    const containers = document.querySelectorAll(
      ".container, .container2, .container3, .container4, .container5, .container6"
    );
    const scrollHandler = () => {
      containers.forEach(function (container) {
        const containerTop = container.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (containerTop < windowHeight * 0.75) {
          container.style.opacity = "1";
          container.style.transform = "translateY(0)";
        }
      });
    };

    window.addEventListener("scroll", scrollHandler);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const images = [Copy, Portfolio, Investor, Portfolio, Risk, Real];
  return (
    <div className="About">
      <Header />
      <div className="container">
        <div className="section1">
          <div className="first-section">
            <section className="faminus">
              <FontAwesomeIcon icon={faMinus} className="listing-icon" />
              <FontAwesomeIcon
                icon={faMinusHorizon}
                className="listing-icon line"
              />
            </section>
            <p className="about-us-tag">About Us</p>
          </div>
          {/*End of first-section*/}
          <section id="about-info">
            <h1>
              <span id="name">Supreme</span> Investment Solutions
            </h1>

            <p>
              Your patner in building long term wealth. We know Finance
              management can seem complicated at times
            </p>
            <p>
              So we make it simple by learning exactly what you want to achieve,
              and how comfortable you feel about risk. Then our team of experts
              geek out on financial markets to customize a steady growth plan
              for you. We identify opportunities- with prudent risk-taking and
              your best interests in mind. Together, we can pave a path toward
              making your financial dreams reality. So join us on a smart
              investing journey just built for you!
            </p>
            <Link to="/Services" className="learn-more-tagline">
              View Our Profile
            </Link>
          </section>
        </div>
        <div className="image-container2">
          <img src={Display} alt="Stocks Image" className="about-image" />
        </div>
      </div>
      {/*End of section1*/}

      {/*Start of section 2*/}
      <div className="container2">
        <div className="section2">
          <div className="first-section">
            <section className="faminus">
              <FontAwesomeIcon icon={faMinus} className="listing-icon" />
              <FontAwesomeIcon
                icon={faMinusHorizon}
                className="listing-icon line"
              />
            </section>
            <p className="about-us-tag">Our expertise</p>
          </div>
          <section id="about-expertise">
            <h2>
              <span id="name2">Our</span> Tailored Solutions
            </h2>

            <p>
              We Believe in the transformative power of financial market and
              stock options in the advancement of financial growth and
              sustainability. So we offer copy trading services and portfolio
              management.
            </p>
            <p>
              Unlock financial success with our comprehensive services. Copy
              trading for hands-free profit, finacial education to help you
              stand out in the market and empower you, diverse portfolio
              management for optimal returns, meticulous risk management, and
              seamless real estate solutions. Elevate your investments with us.
            </p>
            <Link to="/Services">Our Services</Link>
          </section>
        </div>
        <div>
          <ImageSlider images={images} />
        </div>
      </div>
      {/*end of section 2*/}
      <div className="container3">
        <div className="services-container">
          <div className="horizontal-display">
            <section className="service-container1 service">
              <img src={CopyTrade} className="icon-opacity" />
              <h3>Copy Trading</h3>
              <p>Let us do the work for you</p>
            </section>
            <section className="service-container2 service">
              <img src={Education} className="icon-opacity" />
              <h3>Investor Education</h3>
              <p>Empower yourself today</p>
            </section>
            <section className="service-container5 service">
              <img src={risk} />
              <h3>Risk Management</h3>
              <p>Safeguard your investment </p>
            </section>
          </div>
          <div className="horizontal-display">
            <section className="service-container3 service">
              <img src={Port} className="icon-opacity" />
              <h3>Portfolio Management</h3>
              <p>Diversify your returns</p>
            </section>
            <section className="service-container4 service">
              <img src={RealEstate} className="icon-opacity" />
              <h3>Real Estate Management</h3>
              <p>Secure your investments</p>
            </section>
            <section className="service-container6 service">
              <img src={performance} className="icon-opacity" />
              <h3>Performance Monitoring</h3>
              <p>keep track of your performance </p>
            </section>
          </div>
        </div>
        <div className="container4">
          <section className="about-expertise big-six">
            <div className="first-section" id="third-section">
              <section className="faminus">
                <FontAwesomeIcon icon={faMinus} className="listing-icon" />
                <FontAwesomeIcon
                  icon={faMinusHorizon}
                  className="listing-icon line"
                />
              </section>
              <p className="about-us-tag">The Big Six Solutions</p>
            </div>
            <p>
              Step into a realm of financial possibilities with our top-notch
              services. Copy trading ensures effortless gains through our
              trading experts who has your best interest in mind.<br></br>
              Financial education empowers you with informed financial knowledge
              and increases stability in the financial market.<br></br> Diverse
              portfolio management optimizes returns with a strategic mix of
              investments, tailored to achieve stability and growth.<br></br>
              Risk management control safeguards, and Real estate solutions
              seamlessly secure your investments. Your path to financial success
              begins here....
            </p>
            <Link to="/Services">Our Services</Link>
          </section>
        </div>
      </div>
      <div className="container2">
        <div className="section2">
          <div className="first-section">
            <section className="faminus">
              <FontAwesomeIcon icon={faMinus} className="listing-icon" />
              <FontAwesomeIcon
                icon={faMinusHorizon}
                className="listing-icon line"
              />
            </section>
            <p className="about-us-tag">Our expertise</p>
          </div>
          <section id="about-expertise">
            <h2>
              <span id="name2">Performance </span>Monitoring
            </h2>

            <p>
              Performance monitoring involves tracking and analyzing the
              performance of your investment portfolios. Here at SIS, we assess
              the returns, risks, and overall effectiveness of your investments.
            </p>
            <p>
              Explore SIS's performance monitoring service and stay up-to-date
              on the performance of your investments through our secure online
              portal. Access customizable reports tracking your trading
              activity, portfolio performance, returns, costs, profits/losses,
              risk metrics, and more. Stay on top of every move in the market
              with and focus on what matters most. Elevate your performances
              with SIS – where vision meets excellence.
            </p>
            <Link to="/Services">Read More</Link>
          </section>
        </div>
        <div className="image-container">
          <img
            src={Performance}
            alt="this image represents performance service"
            className="p-image"
          />
        </div>
      </div>

      {/*third section*/}
      <div className="container5">
        <div className="mission-vision">
          <section className="image-container profile-image">
            <img
              src={Profile}
              alt="this image represents performance service"
              className="p-image"
            />
          </section>
          <section className="profile">
            <div className="first-section">
              <section className="faminus">
                <FontAwesomeIcon icon={faMinus} className="listing-icon" />
                <FontAwesomeIcon
                  icon={faMinusHorizon}
                  className="listing-icon line"
                />
              </section>
              <p className="about-us-tag mission-font">Our Mission</p>
            </div>
            <p className="mission-vision-info">
              To deliver state-of-the-art investment portfolio analytics that
              provide our clients invaluable, customized insights to confidently
              track, understand, and build upon their financial progress.
            </p>
            <div className="first-section">
              <section className="faminus">
                <FontAwesomeIcon icon={faMinus} className="listing-icon" />
                <FontAwesomeIcon
                  icon={faMinusHorizon}
                  className="listing-icon line"
                />
              </section>
              <p className="about-us-tag mission-font">Our Vision</p>
            </div>
            <p className="mission-vision-info">
              Becoming our clients' trusted, forward-thinking partner,
              leveraging leading technology to provide tailored investment data
              that equips them with the clarity and foresight to proactively
              enhance their portfolios and accomplish their financial goals.
            </p>
            <div className="benefits">
              <h4>Benefits of investing with Us: </h4>
              <ul>
                <li>Income growth and diversification.</li>
                <li>
                  Excellent profit and investment growth strategies in our copy
                  trading services.
                </li>
                <li>
                  Potentially high returns over the long term, dividends, and
                  the abilty to invest in various industries.
                </li>
                <li>
                  Portfolio diversification and potential higher returns with
                  strategic risk management.
                </li>
                <li>
                  Gain opportunities to invest in properties and real estate
                  investment trusts(REITs).
                </li>
                <li>
                  Access to professional investment and asset management
                  education and consultancy at discounted rates.
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      {/*End of mission and vision section*/}
      <div className="container6">
        <div className="heros">
          <section id="hero-section" className="border-radius-left">
            <h1>KES 350M+</h1>
            <p>Portfolio</p>
          </section>
          <section id="hero-section">
            <h1>12yrs+</h1>
            <p>Collective experience</p>
          </section>
          <section id="hero-section">
            <h1>10+</h1>
            <p>Professionals</p>
          </section>
          <section id="hero-section" className="border-radius-right">
            <h1>600+</h1>
            <p>Happy Clients</p>
          </section>
        </div>
      </div>
      <div className="container6">
        <div class="team-section">
          <h1>Meet Our Team</h1>
          <h2>The Minds That Deliver Your Financial Success.</h2>
        </div>
        <section id="scroller">
          <section></section>
          <div id="team-pictures" className="scroller_inner">
            <Services
              image={Truly}
              className="aboutus"
              service="Truly Steve"
              displayLink={false}
              position="Founder"
              linkage="Founder"
            />
            <Services
              image={Joseph}
              className="aboutus"
              service="Truly Steve"
              displayLink={false}
              position="Founder"
              linkage="Founder"
            />
            <Services
              image={Masake}
              className="aboutus"
              service="Truly Steve"
              displayLink={false}
              position="Founder"
              linkage="Founder"
            />
            <Services
              image={Truly}
              className="aboutus"
              service="Truly Steve"
              displayLink={false}
              position="Founder"
              linkage="Founder"
            />
            <Services
              image={Truly}
              className="aboutus"
              service="Truly Steve"
              displayLink={false}
              position="Founder"
              linkage="Founder"
            />
          </div>
        </section>
      </div>
      <div className="container6"></div>
    </div>
  );
}
