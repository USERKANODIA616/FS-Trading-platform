export default function Pricing() {
	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col-4 mb-5">
					<h2>Unbeatable pricing</h2>
					<p className="mt-4">
						We pioneered the concept of discount broking and price
						transparency in India. Flat fees and no hidden charges.
					</p>
					<a
						href="#"
						style={{ color: "#387ed1", textDecoration: "none" }}
					>
						See pricing
						<i class="fa-solid fa-arrow-down fa-rotate-270"></i>
					</a>
				</div>
				<div className="col-2"></div>
				<div className="col-6">
					<div className="row text-center">
						<div className="col border p-4">
							<h1>
								<i class="fa-solid fa-indian-rupee-sign fa-xs"></i>
								0
							</h1>
							<p className="mt-4">
								Free equity delivery and <br></br>direct mutual funds
							</p>
						</div>
						<div className="col border p-4">
							<h1>
								<i class="fa-solid fa-indian-rupee-sign fa-xs"></i>
								20
							</h1>
							<p className="mt-4"> Intraday and F&O</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
