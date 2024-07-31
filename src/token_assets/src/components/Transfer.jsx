import React, { useState } from "react";
import {token} from "../../../declarations/token";
import {Principal} from "@dfinity/principal";

function Transfer() {
  const [idInput,setIdInput] = useState("");
  const [moneyInput,setMoneyInput] = useState("");
  const [resButton,setResButton] = useState("");
  const [isDisabled,setIsDisabled] = useState(false);
  const [ishidden,setIsHidden] = useState(true);

  async function handleClick() {
    setIsDisabled(true);
    setIsHidden(true);
    let principal = Principal.fromText(idInput);
    let amount = parseInt(moneyInput);
    let res = await token.transfer(principal,amount);
    setResButton(res);
    setIsHidden(false);
    setIsDisabled(false);
  }

  return (
    <div className="window white">
      <div className="transfer">
        <fieldset>
          <legend>To Account:</legend>
          <ul>
            <li>
              <input
                type="text"
                id="transfer-to-id"
                value={idInput}
                onChange={(e)=>setIdInput(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Amount:</legend>
          <ul>
            <li>
              <input
                type="number"
                id="amount"
                value={moneyInput}
                onChange={(e)=>setMoneyInput(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <p className="trade-buttons">
          <button id="btn-transfer" onClick={handleClick} disabled={isDisabled}>
            Transfer
          </button>
          
        </p>
        {!ishidden && <p>{resButton}</p>}
      </div>
    </div>
  );
}

export default Transfer;
