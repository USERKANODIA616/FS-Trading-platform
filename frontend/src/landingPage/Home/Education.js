export default function Education() {
	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col">
					<img src="Images\education.svg" style={{width:"70%", marginLeft:"30px"}}></img>
				</div>
				<div className="col mt-5">
					<h2>Free and open market education</h2>
					<p className="mt-4 mb-4">
						Varsity, the largest online stock market education book
						in the world covering everything from the basics to
						advanced trading.
					</p>
					<a
						href="#"
						style={{ color: "#387ed1", textDecoration: "none" }}
					>
						Varsity
						<i class="fa-solid fa-arrow-down fa-rotate-270"></i>
					</a>
					<p className="mt-4 mb-4">
						TradingQ&A, the most active trading and investment
						community in India for all your market related queries.
					</p>
					<a
						href="#"
						style={{ color: "#387ed1", textDecoration: "none" }}
					>
						TradingQ&A
						<i class="fa-solid fa-arrow-down fa-rotate-270"></i>
					</a>
				</div>
			</div>
		</div>
	);
}
