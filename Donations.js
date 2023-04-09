import React, { useState } from "react";
import "./Donations.css";

const Donations = () => {
  const [etherAmount, setEtherAmount] = useState(0);
  const [totalDonations, setTotalDonations] = useState(0);

  const handleDonate = () => {
    // code to handle the donation and update state as needed
    setTotalDonations(totalDonations + parseInt(etherAmount));
    setEtherAmount(0);
  };

  return (
    <div className="donations-container">
      <h2>Donate to keep this app growing further ! Your donations matter</h2>
      <label htmlFor="ether-amount">Enter amount of Ether to donate:</label>
      <input
        type="number"
        id="ether-amount"
        value={etherAmount}
        onChange={(event) => setEtherAmount(event.target.value)}
      />
      <button onClick={handleDonate}>Donate</button>
      <p>Total amount of donations collected: {totalDonations} Ether</p>
    </div>
  );
};

export default Donations;
