import React, { useState } from "react";
import {Principal} from "@dfinity/principal";
import {token} from "../../../declarations/token";
function Balance() {
  const [inputVal,setInputVal] = useState("");
  const [balance,setBalance] = useState("");
  const [tokenSymbol,setTokenSymbol] = useState("");
  const [ishidden,setIsHidden] = useState(true);
  async function handleClick() {
    // console.log(inputVal);
    setIsHidden(true);
    const principal = Principal.fromText(inputVal);
    
    const bal = await token.balanceOf(principal);
    setBalance(bal.toLocaleString());
    setTokenSymbol(await token.symbol());
    setIsHidden(false);
  }


  return (
    <div className="window white">
      <label>Check account token balance:</label>
      <p>
        <input
          id="balance-principal-id"
          type="text"
          placeholder="Enter a Principal ID"
          value={inputVal}
          onChange={(e)=>setInputVal(e.target.value)}
        />
      </p>
      <p className="trade-buttons">
        <button
          id="btn-request-balance"
          onClick={handleClick}
        >
          Check Balance
        </button>
      </p>
      {
        !ishidden && <p>This account has a balance of {balance} {tokenSymbol}.</p>
      }
    </div>
  );
}

export default Balance;
