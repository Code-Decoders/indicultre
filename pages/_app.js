import '../styles/globals.css'
import Web3State from '../lib/Web3State'
import { changeAccount, initializeWeb3} from '../lib/web3Adaptor';
import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function MyApp({ Component, pageProps }) {
  const [state, setState] = React.useState({
    web3: null,
    accounts: null,
    inventory: null,
    token: null,
  });

  useEffect(() => {
    initializeWeb3().then(val => {
      setState(val)
      console.log(val)
      changeAccount(
        (accounts) => {
          setState(val => { return { ...val, accounts } })
        }
      )
    })
  }, [])
  return (
    <Web3State.Provider value={state}>
      <div>

        <Component {...pageProps} />
        <ToastContainer />
      </div>
        </Web3State.Provider>
  )
}

export default MyApp
