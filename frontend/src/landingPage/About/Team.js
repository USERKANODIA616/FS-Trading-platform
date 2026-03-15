export default function () {
	return (
		<div className="container">
			<div className="row mt-5 mb-5">
				<h2 className="text-center mb-5">People</h2>
				<div className="col mt-5">
					<div className="d-flex flex-column align-items-center">
						<img
							src="Images\nithinKamath.jpg"
							style={{ borderRadius: "100%", width: "60%" }}
							className="mb-2"
						></img>

						<p className="mt-3 fs-5 mb-2">Nithin Kamath</p>
						<p className="mt-3 mb-2">Founder, CEO</p>
					</div>
				</div>
				<div className="col mt-5 fs-5 lh-base">
					<p>
						Nithin bootstrapped and founded Zerodha in 2010 to
						overcome the hurdles he faced during his decade long
						stint as a trader. Today, Zerodha has changed the
						landscape of the Indian broking industry.
					</p>
					<p>
						He is a member of the SEBI Secondary Market Advisory
						Committee (SMAC) and the Market Data Advisory Committee
						(MDAC).
					</p>
					<p>Playing basketball is his zen.</p>
					<p>
						Connect on{" "}
						<a
							href="#"
							style={{ color: "#387ed1", fontSize: "20px" }}
						>
							Homepage
						</a>
						&nbsp;/&nbsp;
						<a
							href="#"
							style={{ color: "#387ed1", fontSize: "20px" }}
						>
							TradingQnA
						</a>
						&nbsp;/&nbsp;
						<a
							href="#"
							style={{ color: "#387ed1", fontSize: "20px" }}
						>
							Twitter
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}
