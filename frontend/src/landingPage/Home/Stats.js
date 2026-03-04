export default function Stats() {
	return (
		<div className="container">
			<div className="row">
				<div className="col-5">
					<h2>Trust with confidence</h2>
					<h3 className="mt-5">Customer-first always</h3>
					<p style={{ fontSize: "17px", color: "#666666" }}>
						That's why 1.6+ crore customers trust Zerodha with ~ ₹6
						lakh crores of equity investments, making us India’s
						largest broker; contributing to 15% of daily retail
						exchange volumes in India.
					</p>
					<h3 className="mt-5">No spam or gimmicks</h3>
					<p style={{ fontSize: "17px", color: "#666666" }}>
						No gimmicks, spam, "gamification", or annoying push
						notifications. High quality apps that you use at your
						pace, the way you like.
						<a
							href="#"
							style={{ color: "#387ed1", textDecoration: "none" }}
						>
							Our philosophies.
						</a>
					</p>
					<h3 className="mt-5">The Zerodha universe</h3>
					<p style={{ fontSize: "17px", color: "#666666" }}>
						Not just an app, but a whole ecosystem. Our investments
						in 30+ fintech startups offer you tailored services
						specific to your needs.
					</p>
					<h3 className="mt-5">Do better with money</h3>
					<p style={{ fontSize: "17px", color: "#666666" }}>
						With initiatives like&nbsp;
						<a
							href="#"
							style={{ color: "#387ed1", textDecoration: "none" }}
						>
							Nudge
						</a>{" "}
						and&nbsp;
						<a
							href="#"
							style={{ color: "#387ed1", textDecoration: "none" }}
						>
							Kill Switch
						</a>{" "}
						, we don't just facilitate transactions, but actively
						help you do better with your money.
					</p>
				</div>
				<div className="col-7">

					<img
						src="Images\ecosystem.png"
						style={{ width: "100%",height:"92%" }}
					></img>
					<div className="row">
						<div className="col-2"></div>
						<div className="col">
							<a
								href="#"
								style={{ color: "#387ed1", textDecoration: "none" }}
							>
							Explore our products
							<i class="fa-solid fa-arrow-down fa-rotate-270"></i>
							</a>
						</div>
						<div className="col">
							<a
								href="#"
								style={{ color: "#387ed1", textDecoration: "none" }}
							>
							Try Kite demo
							<i class="fa-solid fa-arrow-down fa-rotate-270"></i>
							</a>
						</div>
						<div className="col-2 mb-5"></div>
					</div>
				</div>
			</div>
		</div>
	);
}
