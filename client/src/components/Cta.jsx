import React from "react";

function Cta() {
  return (
    <div className="cta">
      <div className="container">
        <div className="cta-content">
          <div className="cta-card" data-aos="fade-right">
            <h2>Buy shares</h2>
            <p>
              We provide a way to invest and build a portfolio of European
              startups and scale-ups that are changing the world we live in.
            </p>
            <a href="/" className="p-btn">
              I want to invest
            </a>
          </div>
          <div className="cta-card" data-aos="fade-left">
            <h2>Sell shares</h2>
            <p>
              Find out about how to sell your equity stake in a private company
              and unlock the value of your investment.
            </p>
            <a href="/" className="p-btn">
              Express interest to sell
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cta;
