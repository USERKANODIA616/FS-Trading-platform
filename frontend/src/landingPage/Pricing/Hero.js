export default function Hero() {
	return (
		<div className="container">
			<div className="row text-center high-m">
				<h2>Charges</h2>
				<h4 className="mt-2 text-muted">
					List of all charges and taxes
				</h4>
			</div>
			<div className="row text-center high-m">
				<div className="col">
					<img
						src="Images/pricing0.svg"
						style={{ width: "70%" }}
					></img>
					<h2 className="mt-4">Free equity delivery</h2>
					<h5
						className="text-muted mt-4"
						style={{ lineHeight: "1.8" }}
					>
						All equity delivery investments (NSE, BSE), are
						absolutely free — ₹ 0 brokerage.
					</h5>
				</div>
				<div className="col">
					<img
						src="Images/intradayTrades.svg"
						style={{
							width: "70%",
						}}
					></img>
					<h2 className="mt-4">Intraday and F&O trades</h2>
					<h5
						className="text-muted mt-4"
						style={{ lineHeight: "1.8" }}
					>
						Flat ₹ 20 or 0.03% (whichever is lower) per executed
						order on intraday trades across equity, currency, and
						commodity trades. Flat ₹20 on all option trades.
					</h5>
				</div>
				<div className="col ml">
					<img
						src="Images/pricing0.svg"
						style={{ width: "70%" }}
					></img>
					<h2 className="mt-4">Free direct MF</h2>
					<h5
						className="text-muted mt-4"
						style={{ lineHeight: "1.8" }}
					>
						All direct mutual fund investments are absolutely free —
						₹ 0 commissions & DP charges.
					</h5>
				</div>
			</div>
		</div>
	);
}
