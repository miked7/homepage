import React from "react";
import "./TextGourpSTXWallet.css";

function TextGourpSTXWallet(props) {
  const { stxWalletId, sp3P08Qbcvs8K93Mdv8Y } = props;

  return (
    <div className="stacks-wallet">
      <div className="stx-account-id">{stxWalletId}</div>
      <div className="stx-account-number">{sp3P08Qbcvs8K93Mdv8Y}</div>
    </div>
  );
}

export default TextGourpSTXWallet;
