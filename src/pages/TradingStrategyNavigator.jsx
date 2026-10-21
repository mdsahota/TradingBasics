
import React, { useState } from "react";
import "./TradingStrategyNavigator.css";
import SEO from '../components/seo/SEO'


/* PURPOSE: Provide an interactive trading risk calculator */
function RiskCalculator() {
    const [accountBalance, setAccountBalance] = useState("10000");
    const [riskPercent, setRiskPercent] = useState("1");

    const balance = Number(accountBalance);
    const percent = Number(riskPercent);

    const validBalance = Number.isFinite(balance) && balance > 0;
    const validPercent =
        Number.isFinite(percent) && percent > 0 && percent <= 100;

    const plannedRisk =
        validBalance && validPercent
            ? (balance * percent) / 100
            : null;

    return (
        <div className="risk-calculator">
            <div className="risk-calculator__field">
                <label htmlFor="account-balance">Account balance ($)</label>
                <input
                    id="account-balance"
                    type="number"
                    min="0"
                    step="100"
                    value={accountBalance}
                    onChange={(event) => setAccountBalance(event.target.value)}
                />
            </div>

            <div className="risk-calculator__field">
                <label htmlFor="risk-percent">Risk per trade (%)</label>
                <input
                    id="risk-percent"
                    type="number"
                    min="0"
                    max="100"
                    step="0.25"
                    value={riskPercent}
                    onChange={(event) => setRiskPercent(event.target.value)}
                />
            </div>

            <div className="risk-calculator__result" aria-live="polite">
                <span>Planned maximum risk</span>
                <strong>
                    {plannedRisk === null
                        ? "Enter valid values"
                        : plannedRisk.toLocaleString("en-CA", {
                            style: "currency",
                            currency: "CAD",
                        })}
                </strong>
            </div>

            <p className="risk-calculator__note">
                This is a planning estimate, not a guarantee of your actual loss.
                Trading gaps, slippage, and fees can increase losses.
            </p>
        </div>
    );
}

// PURPOSE: Define market conditions and the learning tip for each selection
const marketConditions = [
    {
        id: "bullish",
        symbol: "↗",
        title: "Bullish Market",
        description:
            "Price is moving upward. Study the trend and potential support.",
        focus: "Focus: Trend and support",
        tip: "Study whether price is making higher highs and higher lows. Identify potential support areas, and decide in advance where your trade idea would be invalidated.",
        // PURPOSE: Tailor risk guidance to a bullish market
        riskTip:
            "An upward trend does not remove risk. Define your invalidation level, plan your stop-loss, and size your position before entering.",
    },
    {
        id: "sideways",
        symbol: "↔",
        title: "Sideways Market",
        description:
            "Price is moving within a range. Watch its boundaries and possible breakouts.",
        focus: "Focus: Range and breakout",
        tip: "Identify the upper and lower boundaries of the range. Watch how price behaves near those levels, and be cautious of false breakouts.",
        // PURPOSE: Tailor risk guidance to a sideways market
        riskTip:
            "Ranges can break unexpectedly. Avoid assuming support or resistance will hold, and define your risk before acting on a potential breakout.",
    },
    {
        id: "bearish",
        symbol: "↘",
        title: "Bearish Market",
        description:
            "Price is moving downward. Study resistance and downside risk.",
        focus: "Focus: Resistance and risk",
        tip: "Study whether price is making lower highs and lower lows. Mark potential resistance and consider the risk before acting on a bearish setup.",
        // PURPOSE: Tailor risk guidance to a bearish market
        riskTip:
            "Downward momentum can reverse sharply. Consider volatility, define your invalidation level, and avoid risking more than your plan allows.",
    },
];

function FlowCard({ number, eyebrow, title, description, variant = "" }) {
    return (
        <article className={`flow-card ${variant}`}>
            <span className="flow-card__number">{number}</span>
            <div className="flow-card__content">
                <span className="flow-card__eyebrow">{eyebrow}</span>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </article>
    );
}

    /* PURPOSE: Calculate position size using planned risk and stop-loss distance */
    function PositionSizingCalculator() {
        const [accountBalance, setAccountBalance] = useState("10000");
        const [riskPercent, setRiskPercent] = useState("1");
        const [entryPrice, setEntryPrice] = useState("50");
        const [stopLoss, setStopLoss] = useState("48");

        const balance = Number(accountBalance);
        const percent = Number(riskPercent);
        const entry = Number(entryPrice);
        const stop = Number(stopLoss);

        const validInputs =
            accountBalance.trim() !== "" &&
            riskPercent.trim() !== "" &&
            entryPrice.trim() !== "" &&
            stopLoss.trim() !== "" &&
            Number.isFinite(balance) &&
            Number.isFinite(percent) &&
            Number.isFinite(entry) &&
            Number.isFinite(stop) &&
            balance > 0 &&
            percent > 0 &&
            percent <= 100 &&
            entry > 0 &&
            stop > 0 &&
            entry !== stop;

        const plannedRisk = validInputs ? (balance * percent) / 100 : null;
        const riskPerShare = validInputs ? Math.abs(entry - stop) : null;
        const positionSize = validInputs
            ? Math.floor(plannedRisk / riskPerShare)
            : null;

        const positionValue =
            validInputs && positionSize > 0 ? positionSize * entry : null;

        return (
            <div className="position-calculator">
                <div className="position-calculator__heading">
                    <span className="flow-card__eyebrow">POSITION SIZING</span>
                    <h3>How many shares could you buy?</h3>
                    <p>
                        Estimate share quantity using your planned dollar risk and
                        the distance between your entry and stop-loss prices.
                    </p>
                </div>

                <div className="position-calculator__grid">
                    <div className="risk-calculator__field">
                        <label htmlFor="position-balance">Account balance ($)</label>
                        <input
                            id="position-balance"
                            type="number"
                            min="0"
                            step="100"
                            value={accountBalance}
                            onChange={(event) => setAccountBalance(event.target.value)}
                        />
                    </div>

                    <div className="risk-calculator__field">
                        <label htmlFor="position-risk">Risk per trade (%)</label>
                        <input
                            id="position-risk"
                            type="number"
                            min="0"
                            max="100"
                            step="0.25"
                            value={riskPercent}
                            onChange={(event) => setRiskPercent(event.target.value)}
                        />
                    </div>

                    <div className="risk-calculator__field">
                        <label htmlFor="position-entry">Entry price ($)</label>
                        <input
                            id="position-entry"
                            type="number"
                            min="0"
                            step="0.01"
                            value={entryPrice}
                            onChange={(event) => setEntryPrice(event.target.value)}
                        />
                    </div>

                    <div className="risk-calculator__field">
                        <label htmlFor="position-stop">Stop-loss price ($)</label>
                        <input
                            id="position-stop"
                            type="number"
                            min="0"
                            step="0.01"
                            value={stopLoss}
                            onChange={(event) => setStopLoss(event.target.value)}
                        />
                    </div>
                </div>

                <div className="position-calculator__result" aria-live="polite">
                    <span>Estimated position size</span>

                    <strong>
                        {!validInputs
                            ? "Check your inputs"
                            : positionSize < 1
                                ? "Less than 1 share"
                                : `${positionSize.toLocaleString("en-CA")} shares`}
                    </strong>

                    {validInputs && (
                        <div className="position-calculator__details">
                            <p>
                                Planned dollar risk:{" "}
                                <strong>
                                    {plannedRisk.toLocaleString("en-CA", {
                                        style: "currency",
                                        currency: "CAD",
                                    })}
                                </strong>
                            </p>

                            <p>
                                Risk per share:{" "}
                                <strong>
                                    {riskPerShare.toLocaleString("en-CA", {
                                        style: "currency",
                                        currency: "CAD",
                                    })}
                                </strong>
                            </p>

                            {positionValue !== null && (
                                <p>
                                    Estimated position value:{" "}
                                    <strong>
                                        {positionValue.toLocaleString("en-CA", {
                                            style: "currency",
                                            currency: "CAD",
                                        })}
                                    </strong>
                                </p>
                            )}
                        </div>
                    )}
                </div>

                <p className="position-calculator__note">
                    Educational estimate for shares with a linear price exposure.
                    Assumes the stop-loss executes at its specified price. Actual
                    losses may be higher because of gaps, slippage, fees, currency
                    differences, and market conditions. Position value is not the
                    same as margin or capital required.
                </p>
            </div>
        );
    }



    export default function TradingStrategyNavigator() {
                // PURPOSE: Track the market condition selected by the user
        const [selectedMarket, setSelectedMarket] = useState(null);
        // PURPOSE: Track which final trading checks the user has completed
        const [completedChecks, setCompletedChecks] = useState([]);

        const tradingChecks = [
        "I have identified the market condition.",
        "I have a clear reason for entering the trade.",
        "I have defined my stop-loss.",
        "I have calculated my position size.",
        "The trade meets my risk/reward rules.",
        ];

        const allChecksComplete = completedChecks.length === tradingChecks.length;
        return (
         <>
            <SEO
                title="Trading Strategy Planner & Risk Calculator | TradingBasics"
                description="Plan trades with TradingBasics. Explore market conditions, calculate position size, manage trading risk, and follow a pre-trade checklist to build disciplined trading habits."
                canonical="/trading-strategy-navigator/"
            />
            <main className="strategy-navigator">
                {/* PURPOSE: Page heading and introduction */}
                <header className="strategy-header">
                    <span className="strategy-eyebrow">
                        TRADINGBASICS · INTERACTIVE LAB
                    </span>
                    <h1>Trading Strategy Navigator</h1>
                    <p>Read the market. Plan your risk. Follow your trading rules.</p>
                </header>

                {/* PURPOSE: Vertical trading decision flow */}
                <section className="strategy-workspace">
                    <div className="strategy-flow">
                        <div className="strategy-flow__intro">
                            <span className="strategy-eyebrow">YOUR DECISION PATH</span>
                            <h2>One step at a time</h2>
                            <p>Follow the process before considering a trade.</p>
                        </div>

                        <FlowCard
                            number="01"
                            eyebrow="PREPARE"
                            title="Before You Trade"
                            description="Set your goals, prepare your plan, and understand the risk you can afford."
                            variant="flow-card--start"
                        />

                        <div className="flow-connector" aria-hidden="true">
                            <span className="flow-connector__line strategy-connector" />
                            <span className="flow-connector__arrow">↓</span>
                        </div>

                        <FlowCard
                            number="02"
                            eyebrow="ANALYSE"
                            title="Identify the Trend"
                            description="Study price action and market structure before choosing a strategy."
                            variant="flow-card--analyse"
                        />

                        <div className="flow-connector" aria-hidden="true">
                            <span className="flow-connector__line strategy-connector" />
                            <span className="flow-connector__arrow">↓</span>
                        </div>

                        {/* PURPOSE: Display the three market conditions vertically */}
                        <section className="market-branch">
                            <div className="market-branch__heading">
                                <span className="flow-card__number">03</span>
                                <div>
                                    <span className="flow-card__eyebrow">READ THE MARKET</span>
                                    <h2>What condition is the market in?</h2>
                                    <p>Choose the description that best matches your analysis.</p>
                                </div>
                            </div>

                            <div className="market-list">
                                {/* PURPOSE: Render selectable market-condition cards */}
                                {marketConditions.map((market) => (
                                    <article
                                        key={market.id}
                                        className={`market-card market-card--${market.id} ${selectedMarket === market.id ? "market-card--selected" : ""
                                            }`}
                                        /* PURPOSE: Keep the selected market active after clicking */
                                        onClick={() => setSelectedMarket(market.id)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(event) => {
                                            if (event.key === "Enter" || event.key === " ") {
                                                event.preventDefault();
                                                setSelectedMarket(
                                                    selectedMarket === market.id ? null : market.id
                                                );
                                            }
                                        }}
                                        aria-pressed={selectedMarket === market.id}
                                    >
                                        <span className="market-card__symbol">{market.symbol}</span>

                                        <div className="market-card__body">
                                            <h3>{market.title}</h3>
                                            <p>{market.description}</p>
                                            <span className="market-card__focus">{market.focus}</span>
                                        </div>
                                    </article>
                                ))}
                            </div>
                            {/* PURPOSE: Display a learning tip for the selected market */}
                            {selectedMarket && (
                                <div className="market-learning-tip" aria-live="polite">
                                    <span className="flow-card__eyebrow">
                                        YOUR LEARNING TIP
                                    </span>

                                    <h3>
                                        {
                                            marketConditions.find(
                                                (market) => market.id === selectedMarket
                                            )?.title
                                        }
                                    </h3>

                                    <p>
                                        {
                                            marketConditions.find(
                                                (market) => market.id === selectedMarket
                                            )?.tip
                                        }
                                    </p>
                                    {/* PURPOSE: Show risk guidance for the selected market */}
                                    <div className="market-risk-reminder">
                                        <strong>Risk management reminder</strong>
                                        <p>
                                            {
                                                marketConditions.find(
                                                    (market) => market.id === selectedMarket
                                                )?.riskTip
                                            }
                                        </p>
                                    </div>
                                </div>
                            )}
                        </section>

                        <div className="flow-connector" aria-hidden="true">
                            <span className="flow-connector__line strategy-connector" />
                            <span className="flow-connector__arrow">↓</span>
                        </div>

                        {/* PURPOSE: Combine the risk-management step with the interactive calculator */}
                        <section className="risk-step">
                            <FlowCard
                                number="04"
                                eyebrow="MANAGE RISK"
                                title="Define Your Risk"
                                description="Identify what would invalidate your idea. Plan your stop-loss and position size."
                                variant="flow-card--risk"
                            />

                            <RiskCalculator />
                            {/* PURPOSE: Add position sizing below the risk budget calculator */}
                            <PositionSizingCalculator />
                        </section>

                        <div className="flow-connector" aria-hidden="true">
                            <span className="flow-connector__line strategy-connector" />
                            <span className="flow-connector__arrow">↓</span>
                        </div>


                        {/* PURPOSE: Interactive final trading checklist */}
                        <section className="flow-card flow-card--finish trading-checklist">
                        <span className="flow-card__number">05</span>

                        <div className="flow-card__content">
                            <span className="flow-card__eyebrow">FINAL CHECK</span>

                            {/* PURPOSE: Show readiness based on checklist completion */}
                            <div
                            className={`trading-checklist__readiness ${
                                allChecksComplete
                                ? "trading-checklist__readiness--ready"
                                : "trading-checklist__readiness--pending"
                            }`}
                            aria-live="polite"
                            >
                            <span className="trading-checklist__readiness-dot" />
                            {allChecksComplete ? "Ready to Review" : "Review in Progress"}
                            </div>

                            <h2>Follow Your Plan</h2>
                            <p>
                            Complete these checks before considering a trade.
                            </p>

                            <div className="trading-checklist__items">
                            {tradingChecks.map((check, index) => (
                                <label
                                className="trading-checklist__item"
                                key={check}
                                >
                                <input
                                    type="checkbox"
                                    checked={completedChecks.includes(index)}
                                    onChange={(event) => {
                                    setCompletedChecks((previous) =>
                                        event.target.checked
                                        ? [...previous, index]
                                        : previous.filter((item) => item !== index)
                                    );
                                    }}
                                />
                                <span>{check}</span>
                                </label>
                            ))}
                            </div>

                            <div
                            className={`trading-checklist__status ${
                                allChecksComplete
                                ? "trading-checklist__status--complete"
                                : ""
                            }`}
                            aria-live="polite"
                            >
                            {allChecksComplete
                                ? "All five checks complete. Your checklist is ready — trading still involves risk."
                                : `${completedChecks.length} of ${tradingChecks.length} checks complete. ${
                                    tradingChecks.length - completedChecks.length
                                } remaining.`}
                            </div>

                            {/* PURPOSE: Let users reset all checklist items without refreshing */}
                            <button
                            type="button"
                            className="trading-checklist__reset"
                            onClick={() => setCompletedChecks([])}
                            disabled={completedChecks.length === 0}
                            >
                            Reset Checklist
                            </button>

                        </div>
                        </section>


                        <p className="strategy-disclaimer">
                            Educational purposes only. Market conditions do not guarantee
                            trading outcomes. Always assess risk before entering a trade.
                        </p>
                    </div>
                </section>
            </main>
            </>
        );
    }
