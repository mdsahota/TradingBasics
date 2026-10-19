
export default function TradingViewPromo() {
  return (
    <div className="lesson-content__article tradingview-promo">
      <h2>Explore a charting tool</h2>

      <p>
        Want to practise reading price charts? TradingView provides
        interactive charts and technical analysis tools that can help
        you explore market trends, support and resistance, and
        technical indicators.
      </p>

      <p>
        You can explore the platform and decide whether its tools suit
        your learning needs. Some features may require a paid plan.
      </p>

      <div className="tradingview-promo__banner">
        <a
          href="https://www.tradingview.com/chart/?aff_id=160718&utm_source=creative&utm_lang=EN"
          target="_blank"
          rel="sponsored nofollow noopener noreferrer"
          aria-label="Explore TradingView charts"
        >
          <picture>
            <source
              media="(min-resolution: 192dpi), (-webkit-min-device-pixel-ratio: 2)"
              srcSet="https://s3.tradingview.com/pub/referrals/creatives/WT/EN/936x120Banner.jpg"
            />
            <img
              src="https://s3.tradingview.com/pub/referrals/creatives/WT/EN/468x60Banner.jpg"
              alt="Explore TradingView charts"
              width="468"
              height="60"
              loading="lazy"
            />
          </picture>
        </a>
      </div>

      <p className="tradingview-promo__disclosure">
        <small>
          This is an affiliate link. TradingBasics may earn a
          commission if you sign up or make a qualifying purchase,
          at no additional cost to you.
        </small>
      </p>
    </div>
  );
}
