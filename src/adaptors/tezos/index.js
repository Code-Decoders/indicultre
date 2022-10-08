import { BeaconWallet } from "@taquito/beacon-wallet";
import { MichelsonMap, TezosToolkit } from "@taquito/taquito";
import { InMemorySigner, importKey } from "@taquito/signer";

const DAPP_NAME = "INDICultre";
const RPC_URL = "https://kathmandunet.smartpy.io";
const NETWORK = "kathmandunet";
const FA2_CONTRACT_ADDRESS = "KT1MHY33z1VTe2jq3HjFQAtBkTvMTsiSfBdU";
const AUCTION_CONTRACT_ADDRESS = "KT1WoEHV7Ky4jvnet7zB5AwfYQLPqmhRRuMm";

const Tezos = new TezosToolkit(RPC_URL);

const wallet = new BeaconWallet({
  name: DAPP_NAME,
  preferredNetwork: NETWORK,
  colorMode: "dark",
});

// Setting the wallet as the wallet provider for Taquito.
Tezos.setWalletProvider(wallet);

const network = {
  type: NETWORK,
  rpcUrl: RPC_URL,
};

const getActiveAccount = async () => {
  const activeAccount = await wallet.client.getActiveAccount();
  return activeAccount;
};

const connectAccount = async () => {
  const activeAccount = await wallet.client.getActiveAccount();
  // no active account, we need permissions first
  if (!activeAccount) {
    await wallet.requestPermissions({ network });
    return getActiveAccount();
  }
  return activeAccount;
};

const clearActiveAccount = async () => {
  return wallet.client.clearActiveAccount();
};

const getBalance = async () => {
  const wallet = await getActiveAccount();
  if (!wallet) {
    return 0;
  }
  return await Tezos.tz
    .getBalance(wallet.address)
    .then((balance) => balance.toNumber() / 1000000)
    .catch((error) => console.error(JSON.stringify(error)));
};

const getFA2Contract = async () => {
  return Tezos.wallet.at(FA2_CONTRACT_ADDRESS);
};
const getAuctionContract = async () => {
  return Tezos.wallet.at(AUCTION_CONTRACT_ADDRESS);
};

const getFA2ContractStorage = async () => {
  return (await getFA2Contract()).storage();
};
const getAuctionContractStorage = async () => {
  return (await getAuctionContract()).storage();
};



const bid = async (amount, auction_id) => {
  getActiveAccount().then((account) => {
    getAuctionContract()
      .then((contract) => {
        return contract.methods.bid(auction_id).send({
          amount: amount,
        });
      })
      .catch((error) =>
        window.alert(`Error: ${JSON.stringify(error, null, 2)}`)
      );
  });
};
const withdraw = async ( auction_id) => {
  getActiveAccount().then((account) => {
    getAuctionContract()
      .then((contract) => {
        return contract.methods.withdraw(auction_id).send();
      })
      .catch((error) =>
        window.alert(`Error: ${JSON.stringify(error, null, 2)}`)
      );
  });
};

export {
  Tezos,
  wallet,
  getActiveAccount,
  connectAccount,
  clearActiveAccount,
  getFA2Contract,
  getAuctionContract,
  getFA2ContractStorage,
  getAuctionContractStorage,
  getBalance,
  bid,
  withdraw,
  //   updatePrice,
  //   mint as createItem,
  //   confirmOperation,
  //   collect as createSale,
};