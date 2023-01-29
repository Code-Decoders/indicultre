
import Link from 'next/link';
import React,{ useState, useEffect, useContext } from 'react';
import { initializeWeb3 } from '../lib/web3Adaptor';
import Web3State from '../lib/Web3State';
import Image from 'next/image';

function App() {

  const [isShown, setIsShown] = useState(false);
  const { web3, accounts, contract } = useContext(Web3State);


  const handleLogin = async () => {
    initializeWeb3()
  }


  return (
    <div className="App">
      <div className="ic-header" onScroll={(e) => {

        // convert to javascript above code
        var scrollTop = window.scrollY;
        if (scrollTop <= 0) {
          e.currentTarget.removeClass("webmenu_hidden");
  
        }
        else {
          e.currentTarget.toggleClass("webmenu_hidden");
  
        }
      }}>
        <div className="ic-header-flex">
          <div className="ic-header-logo">
            <img src="images/logo/horizontal-logo.png" alt="" />
          </div>
          <div className="ic-header-links">
            <ul>
              <li>
                <a href="javascript:void(0);">
                  <p>How It Works?</p>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <p>Features</p>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <p>FAQs</p>
                </a>
              </li>
              <li>
                <button
                  className="select-wallet-header-button"
                  onClick={handleLogin}
                >
                  <p>{accounts?.length > 0 ? accounts[0] :"Select Wallet"}</p>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="page-view">
        <div className="indiculture-main-wrapper">
          <div
            id="ic-home-wrapper"
            className="relative"
            style={{ overflowX: "hidden" }}
          >
            <section
              className="ic-section ic-section-padding"
              id="ic-section-1-homepage"
            >
              <div className="ic-container">
                <div className="section-1-flex">
                  <div>
                    <h1>Create, Sell & Collect Your Own Creative NFT</h1>
                    <p>
                      Lorem ipsum dolor sit,
                      <br />
                      amet consectetur adipisicing elit.
                    </p>
                    <div className="explore-button">
                      <Link href={"/explore"}>
                        <button>
                          <p>Explore Now</p>
                        </button>
                      </Link>
                    </div>
                    <div className="count-down-div">
                      <div>
                        <h1>37k+</h1>
                        <h3>Artworks</h3>
                      </div>
                      <div>
                        <h1>20k+</h1>
                        <h3>Artists</h3>
                      </div>
                      <div>
                        <h1>99k+</h1>
                        <h3>Auctions</h3>
                      </div>
                    </div>
                  </div>
                  <div className="banner-grid-images">
                    <div>
                      <img
                        src="https://th.bing.com/th/id/OIP.QRZ3ciaM7T4FlcqwXyW3FwHaEK?pid=ImgDet&rs=1"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://th.bing.com/th/id/OIP.gvZFAxKuCXN2-oxPHB47lgHaE_?pid=ImgDet&rs=1"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://th.bing.com/th/id/OIP.lhijq8kW1dSleNu9LgsfsAHaE8?pid=ImgDet&rs=1"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://th.bing.com/th/id/OIP.lhijq8kW1dSleNu9LgsfsAHaE8?pid=ImgDet&rs=1"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://wallpapercave.com/wp/wp5281250.jpg"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://www.outlookindia.com/outlooktraveller/public/uploads/2018/07/Dwarkadhish-Temple.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section
              className="ic-section ic-section-padding"
              id="ic-section-2-homepage"
            >
              <div className="section-title">
                <h6>How It Works?</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="ic-container">
                <div className="section-2-grid">
                  <div>
                    <div className="works-icon">
                      <img
                        src="https://www.indianholiday.com/pictures/tourgallery/586/gujarat-heritage-tour-3169.jpg"
                        alt=""
                      />
                    </div>
                    <div>
                      <div className="works-content">
                        <p>
                          If the museum does not already have the high-de
                          inition digital format of the artwork, we will making
                          a digital copy using our 3D scanners.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="works-icon">
                      <img
                        src="https://th.bing.com/th/id/OIP.sWqqCbySVFZfcQm9wR37NAHaDb?pid=ImgDet&rs=1"
                        alt=""
                      />
                    </div>
                    <div>
                      <div className="works-content">
                        <p>
                          INDICultur creates two digital copies; the resulting
                          files are edited to obtain a file in the desired
                          definition
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="works-icon">
                      <img
                        src="https://i.pinimg.com/originals/82/8d/4d/828d4d94171019c6505fe97e13e37837.jpg"
                        alt=""
                      />
                    </div>
                    <div>
                      <div className="works-content">
                        <p>
                          The rights holder of the work digitally signs the
                          copies, authenticating them
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="works-icon">
                      <img
                        src="https://th.bing.com/th/id/OIP.VFw07RqI9gjgsTaoeGnOmwHaFH?pid=ImgDet&rs=1"
                        alt=""
                      />
                    </div>
                    <div>
                      <div className="works-content">
                        <p>
                          The resulting files are linked to a smart contract
                          becoming which acts an an NFT
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="works-icon">
                      <img
                        src="https://th.bing.com/th/id/OIP.l6Q1muET-cxUYjroPMQj2gHaE5?pid=ImgDet&w=926&h=613&rs=1"
                        alt=""
                      />
                    </div>
                    <div>
                      <div className="works-content">
                        <p>
                          One copy remains at the museum for exposition usage
                          while the other is commercialized via auction
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              className="ic-section ic-section-padding"
              id="ic-section-3-homepage"
            >
              <div className="section-title">
                <h6>Features</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="ic-container">
                <div className="section-3-grid-feature-grid">
                  <div className="feature-card">
                    <div className="feature-icon">
                      <img
                        src="https://static.india.com/wp-content/uploads/2020/09/KERALA1200.jpg"
                        alt=""
                      />
                    </div>
                    <div className="feature-title">
                      <p>Collecting</p>
                    </div>
                    <div className="feature-content">
                      <p>
                        The chance to enjoy exclusive ownership of masterpieces
                        that cannot be acquired in the physical world is an
                        unprecedented opportunity for collectors around the
                        world.
                      </p>
                    </div>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon">
                      <img
                        src="https://thatstunningguy.com/wp-content/uploads/2020/03/Dwarka.jpg"
                        alt=""
                      />
                    </div>
                    <div className="feature-title">
                      <p>Exposition</p>
                    </div>
                    <div className="feature-content">
                      <p>
                        The metaverse reinforces the novelty by providing a new
                        social space of fruition where the most important
                        private collections can be appreciated and valued.
                      </p>
                    </div>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon">
                      <img
                        src="https://i1.wp.com/thetravelertwins.com/wp-content/uploads/2019/10/The-famous-temples-of-Gujarat.jpg?fit=819%2C1024&ssl=1" height={10} width={50}
                        alt=""
                      />
                    </div>
                    <div className="feature-title">
                      <p>Network</p>
                    </div>
                    <div className="feature-content">
                      <p>
                        {"The NFT acts as a membership card for access to an elite community of art enthusiasts, professionals and emerging artists connected through INDIA Culture's network."}
                      </p>
                    </div>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon">
                      <img
                        src="https://images4.alphacoders.com/562/thumb-1920-562137.jpg"
                        alt=""
                      />
                    </div>
                    <div className="feature-title">
                      <p>Events</p>
                    </div>
                    <div className="feature-content">
                      <p>
                        {"To own a INDIA Culture's NFT grants access to online rendezvous in the main metaverses and offline events in exclusive locations where holders can meet and connect with like-minded people."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="ic-footer">
        <div className="ic-container">
          <div className="footer-flex">
            <div>
              <a href="mailto:info@codedecoders.io">
                <p>info@codedecoders.io</p>
              </a>
            </div>
            <div>
              <p>All Rights Reserved - &copy; INDICultur</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
