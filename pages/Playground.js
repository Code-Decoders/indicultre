/* eslint-disable no-undef */
import React, { useState, useEffect, useCallback } from 'react'
import { Unity, useUnityContext, } from 'react-unity-webgl';
// import { getActiveAccount, getAuctionContractStorage } from './adaptors/tezos';
// import BigNumber from 'bignumber.js'

const Playground = () => {
    const {
        unityProvider,
        isLoaded,
        unload,
        loadingProgression,
        addEventListener,
        initialisationError,
        removeEventListener,
        sendMessage,
    } = useUnityContext({
        loaderUrl: "build/Build.loader.js",
        dataUrl: "build/Build.data",
        frameworkUrl: "build/Build.framework.js",
        codeUrl: "build/Build.wasm",
    });

    const [called ,setCalled] = useState(null)



    const token_metadata = [
        {
            id: 1,
            title: 'Abstract',
            description: 'This is Abstract'
        },
        {
            id: 2,
            title: 'Abstract',
            description: 'This is Abstract'
        },
        {
            id: 3,
            title: 'Abstract',
            description: 'This is Abstract'
        },
        {
            id: 4,
            title: 'Abstract',
            description: 'This is Abstract'
        },
        {
            id: 5,
            title: 'Abstract',
            description: 'This is Abstract'
        },
        {
            id: 6,
            title: 'Abstract',
            description: 'This is Abstract'
        },
        {
            id: 7,
            title: 'Abstract',
            description: 'This is Abstract'
        },
        {
            id: 8,
            title: 'Abstract',
            description: 'This is Abstract'
        },
        {
            id: 9,
            title: 'Abstract',
            description: 'This is Abstract'
        },
        {
            id: 10,
            title: 'Abstract',
            description: 'This is Abstract'
        },
    ]





    const init = async () => {
        // var val = await getAuctionContractStorage()
        // let data = []
        // for (let index = 1; index <= 10; index++) {

        //     var token_data = await val.get(index)
        //     if (token_data) {
        //         var id = BigNumber(token_data.token_id).toNumber()
        //         var amt = BigNumber(token_data.bid_amount).toNumber()
        //         var parseData = {
        //             'id': id,
        //             'title': token_metadata.find(e => e.id == id).title,
        //             'description': token_metadata.find(e => e.id == id).description,
        //             'end_timestamp': new Date(token_data.end_timestamp).getTime().toString(),
        //             'highest_bidder': token_data.bidder,
        //             'min_bid': amt.toString(),
        //             'owner': token_data.bidder,
        //         };
        //         console.log(parseData)
        //         data.push(parseData)
        //         console.log(data)
        //     }
        //     else {
        //     }
        // }
        // sendMessage("FirstPersonController", "SetData", JSON.stringify({ nfts: data }));
    };





    const handleGetData = async (val) => {
        // var map = await getAuctionContractStorage()
        // console.log(map)
        // var token_data = await map.get(val + 1)
        // console.log(token_data)
        // if (token_data) {
        //     var id = BigNumber(token_data.token_id).toNumber()
        //     var amt = BigNumber(token_data.bid_amount).toNumber()
        //     var parseData = {
        //         'id': id,
        //         'title': token_metadata.find(e => e.id == id).title,
        //         'description': token_metadata.find(e => e.id == id).description,
        //         'end_timestamp': new Date(token_data.end_timestamp).getTime().toString(),
        //         'highest_bidder': token_data.bidder,
        //         'min_bid': amt.toString(),
        //         'owner': token_data.bidder,
        //     };
        //     console.log(parseData)
        // }
        // if (called && called != val) {
        //     setTimeout(() => {
        //         console.log(val)
        //     }, 2000)
        //     setCalled(val)
        }
        // interval = setInterval(async () => {
        // var map = await getAuctionContractStorage()
        // var token_data = await map.get(val)
        // if (token_data) {
        //     var id = BigNumber(token_data.token_id).toNumber()
        //     var amt = BigNumber(token_data.bid_amount).toNumber()
        //     var parseData = {
        //         'id': id,
        //         'title': token_metadata.find(e => e.id == id).title,
        //         'description': token_metadata.find(e => e.id == id).description,
        //         'end_timestamp': new Date(token_data.end_timestamp).getTime().toString(),
        //         'highest_bidder': token_data.bidder,
        //         'min_bid': amt.toString(),
        //         'owner': token_data.bidder,
        //     };
        //     console.log(parseData)
        // }
        // }, 5000);
    }

    const handleGetUser = () => {
        // getActiveAccount().then(wallet => {
        //     if (wallet)
        //         sendMessage("FirstPersonController", "SetUser", wallet.address);
        // })
    }
    const handleWithdraw = (val) => {
        console.log(val)
    }
    const handleBid = (val) => {
        console.log(val)
    }

    const handleRemove = () => {
        // if (interval) {
        //     clearInterval(interval);
        // }
    }


    useEffect(() => {
        if (isLoaded) {
            console.log(initialisationError)
            window.OnMessage = sendMessage;
            addEventListener("OnNFTCall", handleGetData);
            addEventListener("OnRemove", handleRemove);
            addEventListener("OnUserReady", handleGetUser);
            addEventListener("OnWithdraw", handleWithdraw);
            addEventListener("OnBid", handleBid);
        }
        return () => {
            console.log('unmounting');
            removeEventListener("OnNFTCall", handleGetData);
            removeEventListener("OnRemove", handleRemove);
            removeEventListener("OnUserReady", handleGetUser)
            removeEventListener("OnWithdraw", handleWithdraw)
            removeEventListener("OnBid", handleBid)
            unload();

        };
    }, [isLoaded]);

    // We'll round the loading progression to a whole number to represent the
    // percentage of the Unity Application that has loaded.
    const loadingPercentage = Math.round(loadingProgression * 100);

    return (
        <div className="playgame">

            <div className="container">
                {isLoaded === false && (
                    // We'll conditionally render the loading overlay if the Unity
                    // Application is not loaded.
                    <div className="loading-overlay">
                        <p>Loading... ({loadingPercentage}%)</p>
                    </div>
                )}
                {(
                    <Unity

                        className="unity"
                        unityProvider={unityProvider}
                        style={{
                            width: "calc(100%)",
                            height: "calc(100vh - 10px)",
                            overflow: "hidden",
                        }}
                    />
                )}
            </div>
        </div>
    );
}

export default Playground