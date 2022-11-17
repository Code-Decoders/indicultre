/* eslint-disable no-undef */
import React, { useState, useEffect, useCallback, useContext } from 'react';
import { Unity, useUnityContext, } from 'react-unity-webgl';
import { bid, collect, getById, getOwnerOf } from '../lib/web3Adaptor';
import Web3State from '../lib/Web3State';

const Playground = () => {
    const {
        unityProvider,
        isLoaded,
        unload,
        loadingProgression,
        addEventListener,
        initialisationError,
        requestFullscreen,
        removeEventListener,
        sendMessage,
    } = useUnityContext({
        loaderUrl: "build/Build.loader.js",
        dataUrl: "build/Build.data",
        frameworkUrl: "build/Build.framework.js",
        codeUrl: "build/Build.wasm",
    });


    const { accounts, web3, contract } = useContext(Web3State);

    const [id, setId] = useState(0)

    const get = async () => {
        const data = await getById(id);
        if (data) {
            const owner = await getOwnerOf(id);
            var parseData = {
                'id': id,
                'title': token_metadata.find(e => parseInt(data.tokenId) == id).title,
                'description': token_metadata.find(e => parseInt(data.tokenId) == id).description,
                'end_timestamp': data.endTimestamp + "000",
                'highest_bidder': data.bidder.toLowerCase(),
                'min_bid': (data.bidAmount / 10 ** 18).toFixed(2),
                'owner': owner.toLowerCase(),
            };
            sendMessage("FirstPersonController", "SetNft", JSON.stringify(parseData));
        }
    }
    useEffect(() => {
        if (id == 0) return;
        let interval = setInterval(async () => {
            get()
        }, 3000)
        return () => clearInterval(interval);
    }, [id])

    useEffect(() => {
        
        if (accounts.length > 0) {
            sendMessage("FirstPersonController", "SetUser", accounts[0].toLowerCase());
            console.log("account set")
        }
    }, [accounts])

    useEffect(() => {
        if (isLoaded)
        requestFullscreen()
    }, [isLoaded])



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

    const handleGetData = async (val) => {
        console.log("handleGetData", val)
        setId(() => val)
    }

    const handleGetUser = () => {
        sendMessage("FirstPersonController", "SetUser", accounts[0].toLowerCase());
    }
    const handleWithdraw = (val) => {
        collect(val, accounts[0])
    }
    const handleBid = (val) => {
        bid(val.id, val.amount, accounts[0])
    }

    const handleRemove = () => {

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