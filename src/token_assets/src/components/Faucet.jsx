import React, { useState } from "react";
import {token} from "../../../declarations/token";
function Faucet() {
  const [action,setAction] = useState(false);
  const [msg,setMsg] = useState("");
  async function handleClick(event) {
    setAction(true);
    const res = await token.payOut();
    setMsg(res);
    console.log(res);
    // setAction(false);
  }

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>
      Get your free Gomu tokens here! Claim 10,000 GOMU tokens to your account.
        </label>
      <p className="trade-buttons">
        <button id="btn-payout" onClick={handleClick} disabled={action} >
          {msg ? `${msg}` : "Gimme gimme" }
        </button>
      </p>
    </div>
  );
}
export default Faucet;
