import React from "react";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <div className="header-left " data-aos="fade-right">
            <h1 className="title">Invest in most exciting businesses</h1>
            <p>
              We make it simple to buy shares in high-growth private businesses.
            </p>
            <p>
              Whether you're a beginner or experienced investor, you can join
              our million-strong community by building a portfolio of startup,
              growth and venture-backed businesses with the potential to deliver
              significant returns.
            </p>
            <p>
              Nothing, the business that raised over $1.5M in just 54 seconds,
              will be coming back to invistor soon. Register now for your chance
              to invest.
            </p>
          </div>

          <img
            className="header-img"
            src="imgs/pippamurray.webp"
            alt=""
            data-aos="fade-left"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
