export default function Awards() {
	return (
		<div className="container mt-5 mb-5">
			<div className="row">
				<div className="col">
					<img src="Images/largestBroker.svg" />
				</div>
				<div className="col p-3">
					<h1>Largest stock broker in India</h1>
					<p className="mb-5">
						2+ million Zerodha clients contribute to over 15% of all
						retail order volumes in india daily by trading and
						investing in:
					</p>
					<div className="row">
						<div className="col">
							<ul>
								<li>Futures and Options</li>
								<li>Commodity derivatives</li>
								<li>Currency derivatives</li>
							</ul>
						</div>
						<div className="col">
							<ul>
								<li>Stock & IPOs</li>
								<li>Direct mutual funds</li>
								<li>Bonds and Govt. Securities</li>
							</ul>
						</div>
					</div>
					<img src="Images\pressLogos.png" className="mt-5 mb-5"></img>
				</div>
			</div>
		</div>
	);
}