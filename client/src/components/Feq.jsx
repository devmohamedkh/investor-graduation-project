import React from "react";
import Helmet from "react-helmet";

function Feq() {
  return (
    <section className="feq" data-aos="zoom-in">
      <div className="container">
        <h2 className="s-title">Frequently asked questions</h2>
        <p>Can't find your answer? Head over to our Help Centre. </p>
        <div className="faq-list">
          <button className="accordion"># Can I invest on invistor?</button>
          <div className="panel">
            <p>
              <br /> To invest on invistor, you need to be over 18 years old and
              legally entitled to invest. You’ll also need to be a resident of
              the UK or a country where you may legally receive financial
              promotions of the nature provided. If you’re not sure whether you
              can invest through invistor in your country, you should seek legal
              advice before making an account.
              <br />
              We can’t advertise investment opportunities to those living in the
              United States, Canada, Japan or any other country where it would
              be unlawful for our pitches to be advertised. Please don’t
              register with us if you are a resident in these countries.
              <br />
              When creating your account, make sure you create it in your own
              name, as we can’t accept joint investments. You’ll also be asked
              to choose an investor type (such as everyday or professional) and
              complete a quick questionnaire. This is to ensure you understand
              the high-risk nature of investing in startups and early-stage
              businesses. If you receive independent advice, you don’t have to
              fill out the questionnaire. These investor types won’t apply to
              all other platforms.
            </p>
          </div>
          <button className="accordion">
            # How can I make a return on my investment?
          </button>
          <div className="panel">
            <p>
              <br />
              There are two ways you could make a return on your investment: (1)
              selling your share in the company for more than you paid for it,
              and (2) receiving dividends from the company.
              <br />
              <br />
              Selling your shares <br />
              <br />
              Ideally, the business you’ve invested in will grow to a point
              where it lists on the stock market (“going public”), is bought by
              a larger company, or the company management buys back equity from
              investors. At that point, you might be able to sell your shares
              and make a profit.
              <br />
              You can also express interest in selling any shares in a company
              in your portfolio through Cubex, our secondary market, potentially
              realising the value of your investment without having to wait for
              one of the above liquidity events.
              <br />
              Expressing interest to buy or sell shares doesn’t guarantee that
              the transaction will happen, but if buy- and sell-side demands are
              met, we will seek to facilitate the transaction with the company
              and let you know when the sale goes live.
              <br />
              Cubex is currently in beta, but we’re working on the full roll-out
              now. Find out more and register your interest in buying or selling
              shares.
              <br />
              <br />
              Receiving dividends In addition, if the company you’ve invested in
              becomes profitable, it may be able to pay dividends.
              <br />
              Read more, including some examples of the exits and dividends our
              investor community have realised, on our investor returns page.
            </p>
          </div>
          <button className="accordion"># How do I make an investment?</button>
          <div className="panel">
            <p>
              <br />
              To start investing, you need to join invistor – it’s completely
              free. Then you can browse open investment opportunities and find a
              business you want to invest in.
              <br />
              Once you’ve found a business you want to back, click ‘Invest Now’
              on the pitch page and choose how much money you want to invest.
              You can pay for your investment using a debit, credit or prepaid
              card.
              <br />
              You can invest from as little as £10, but you will be prompted to
              make your investment in an exact multiple of the share price. For
              example, if the share price is £3.10, the minimum investment in
              that pitch will be £12.40. The amount you invest, and the equity
              issued/number of shares bought, will affect what percentage of the
              business you own.
              <br />
              When the business reaches its funding goal, you’ll have a
              cooling-off period, which generally lasts around seven days, to
              review your investment. This gives you a chance to reduce or
              cancel your investment if you’ve changed your mind. You can do
              this by contacting us.
              <br />
              Once the cooling-off period has expired, we’ll take the payment
              for your investment. Congrats! You’re an investor. We’ll then send
              you your digital statement of ownership, share certificates and
              any tax relief certificates.
              <br />
              You can then keep updated with the company and vote on key
              decisions through the platform. Eventually, if the business is a
              success and is bought by another company or goes public at a
              higher value than it was when you first invested, you’ll get a
              return on your investment.
            </p>
          </div>
        </div>
      </div>
      <Helmet>
        <script src="main.js"></script>
      </Helmet>
    </section>
  );
}

export default Feq;
