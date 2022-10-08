
import './App.css';
import { Link } from 'react-router-dom';
import { clearActiveAccount, connectAccount, getActiveAccount, getAuctionContractStorage } from './adaptors/tezos';
import React,{ useState, useEffect } from 'react';
import BigNumber from 'bignumber.js';


function App() {

  const [isShown, setIsShown] = useState(false);
  const [wallet, setWallet] = useState(null);
  const [nfts, setNfts] = useState([])

  const handleLogin = async () => {
    if (!wallet) {
      console.log("connecting to tezos");
      let wallet = await connectAccount();
      setWallet(wallet);
    } else {
      console.log("clearing active account");
      await clearActiveAccount();
      setWallet(null);
    }
  };


  return (
    <div className="App">
      <div className="ic-header">
        <div className="ic-header-flex">
          <div className="ic-header-logo">
            <img src="images/logo/horizontal-logo.png" alt="" />
          </div>
          <div className="ic-header-links">
            <ul>
              <li>
                <a href="javascript:void(0);">
                  <p>
                    How It Works?
                  </p>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <p>
                    Features
                  </p>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <p>
                    FAQs
                  </p>
                </a>
              </li>
              <li>
                <button className="select-wallet-header-button" onClick={handleLogin}>
                  <p>
                    {wallet ? wallet.address :'Select Wallet'}
                  </p>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="page-view">
        <div className="indiculture-main-wrapper">
          <div id="ic-home-wrapper" className="relative" style={{ 'overflowX': 'hidden' }}>
            <section className="ic-section ic-section-padding" id="ic-section-1-homepage">
              <div className="ic-container">
                <div className="section-1-flex">
                  <div>
                    <h1>
                      Create, Sell & Collect Your Own Creative NFT
                    </h1>
                    <p>
                      Lorem ipsum dolor sit,<br />amet consectetur adipisicing elit.
                    </p>
                    <div className="explore-button">
                      <Link to={'/explore'}>
                        <button>
                          <p>
                            Explore Now
                          </p>
                        </button>
                      </Link>
                    </div>
                    <div className="count-down-div">
                      <div>
                        <h1>
                          37k+
                        </h1>
                        <h3>
                          Artworks
                        </h3>
                      </div>
                      <div>
                        <h1>
                          20k+
                        </h1>
                        <h3>
                          Artists
                        </h3>
                      </div>
                      <div>
                        <h1>
                          99k+
                        </h1>
                        <h3>
                          Auctions
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="banner-grid-images">
                    <div>
                      <img src="https://dummyimage.com/524x524/956614/956614" alt="" />
                    </div>
                    <div>
                      <img src="https://dummyimage.com/524x524/000000/000000" alt="" />
                    </div>
                    <div>
                      <img src="https://dummyimage.com/524x524/956614/956614" alt="" />
                    </div>
                    <div>
                      <img src="https://dummyimage.com/524x524/956614/956614" alt="" />
                    </div>
                    <div>
                      <img src="https://dummyimage.com/524x524/956614/956614" alt="" />
                    </div>
                    <div>
                      <img src="https://dummyimage.com/524x524/000000/000000" alt="" />
                    </div>

                  </div>
                </div>
              </div>
            </section>

            <section className="ic-section ic-section-padding" id="ic-section-2-homepage">
              <div className="section-title">
                <h6>
                  How It Works?
                </h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="ic-container">
                <div className="section-2-grid">
                  <div>
                    <div className="works-icon">
                      <img src="https://dummyimage.com/150x150/956614/956614" alt="" />
                    </div>
                    <div>
                      <div className="works-content">
                        <p>
                          If the museum does not already have the high-de inition digital format of the
                          artwork, we will making a digital copy using our 3D scanners.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="works-icon">
                      <img src="https://dummyimage.com/150x150/956614/956614" alt="" />
                    </div>
                    <div>
                      <div className="works-content">
                        <p>
                          INDICultur creates two digital copies; the resulting files are edited to obtain a
                          file in the desired definition
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="works-icon">
                      <img src="https://dummyimage.com/150x150/956614/956614" alt="" />
                    </div>
                    <div>
                      <div className="works-content">
                        <p>
                          The rights holder of the work digitally signs the copies, authenticating them
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="works-icon">
                      <img src="https://dummyimage.com/150x150/956614/956614" alt="" />
                    </div>
                    <div>
                      <div className="works-content">
                        <p>
                          The resulting files are linked to a smart contract becoming which acts an an NFT
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="works-icon">
                      <img src="https://dummyimage.com/150x150/956614/956614" alt="" />
                    </div>
                    <div>
                      <div className="works-content">
                        <p>
                          One copy remains at the museum for exposition usage while the other is
                          commercialized via auction
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="ic-section ic-section-padding" id="ic-section-3-homepage">
              <div className="section-title">
                <h6>
                  Features
                </h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="ic-container">
                <div className="section-3-grid-feature-grid">
                  <div className="feature-card">
                    <div className="feature-icon">
                      <img src="https://dummyimage.com/150x150/956614/956614" alt="" />
                    </div>
                    <div className="feature-title">
                      <p>
                        Collecting
                      </p>
                    </div>
                    <div className="feature-content">
                      <p>
                        The chance to enjoy exclusive ownership of masterpieces that cannot be acquired in the
                        physical world is an unprecedented opportunity for collectors around the world.
                      </p>
                    </div>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon">
                      <img src="https://dummyimage.com/150x150/956614/956614" alt="" />
                    </div>
                    <div className="feature-title">
                      <p>
                        Exposition
                      </p>
                    </div>
                    <div className="feature-content">
                      <p>
                        The metaverse reinforces the novelty by providing a new social space of fruition where
                        the most important private collections can be appreciated and valued.
                      </p>
                    </div>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon">
                      <img src="https://dummyimage.com/150x150/956614/956614" alt="" />
                    </div>
                    <div className="feature-title">
                      <p>
                        Network
                      </p>
                    </div>
                    <div className="feature-content">
                      <p>
                        The NFT acts as a membership card for access to an elite community of art enthusiasts,
                        professionals and emerging artists connected through INDIA Culture's network.
                      </p>
                    </div>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon">
                      <img src="https://dummyimage.com/150x150/956614/956614" alt="" />
                    </div>
                    <div className="feature-title">
                      <p>
                        Events
                      </p>
                    </div>
                    <div className="feature-content">
                      <p>
                        To own a INDIA Culture's NFT grants access to online rendezvous in the main metaverses
                        and offline events in exclusive locations where holders can meet and connect with
                        like-minded people.
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
                <p>
                  info@codedecoders.io
                </p>
              </a>
            </div>
            <div>
              <p>
                All Rights Reserved - &copy; INDICultur
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
