import { ethers } from "ethers";
import React, { useState } from "react";
import HelloKitty_abi from "./HelloKitty.json";

const HelloKitty = () => {
  const [address, setAddress] = useState(null);
  const [message, setMessage] = useState(null);
  const [contract, setContract] = useState(null);

  const connectWalletHandler = async (e) => {
    if(window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accountAddress = await provider.send("eth_requestAccounts", []);
        setAddress(accountAddress);

        const signer = provider.getSigner();
        setContract(new ethers.Contract("0x88cb4b51E80bCB85CA1eA23E684372E878a1EbFd", HelloKitty_abi, signer));

    }
    else {
        setAddress("Install metamark");
    }

  };

  const sendMessageHandler = async (e) => {
    if(contract) {
        contract.setMessage("Hoang Ngoc Hanh");
    }
  }

  const getMessageHandler = async (e) => {
      if(contract) {
          setMessage(await contract.getMessage());
      }
  }

  return (
    <div>
      <button onClick={connectWalletHandler}>Connect Wallet</button>
      <p>Address: {address}</p>
      <button onClick={sendMessageHandler}>Send message</button>
      <p>Message: {message}</p>
      <button onClick={getMessageHandler}>Get message</button>
    </div>
  );
};

export default HelloKitty;
