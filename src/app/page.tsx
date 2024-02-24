"use client";

import Image from "next/image";
import { useState } from "react";
import { ethers } from "ethers";

export default function Home() {
  const [isConnceted, setIsConnected] = useState(false);
  const [provider, setProvider] = useState();
  async function connect() {
    if (typeof window !== "undefined") {
      try {
        await ethereum.request({ method: "eth_requestAccounts" });
        setIsConnected(true);
        let connectedProvider = new ethers.providers.Web3Provider(window.ethereum);
        setSigner(connectedProvider.getSigner());
      } catch(e) {
        console.log(e);
      }
    } else {
      setIsConnected(false);
    }
  }
  return (
    <div className="main">
      {isConnceted ? ("Connected") : <button onClick={() => connect()}>Connect</button>} 
    </div>
  );
}
