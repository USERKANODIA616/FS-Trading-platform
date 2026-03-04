export default function Hero() {
	return (
		<div className="container p-5 mt-5">
			<div className="row text-center">
				<img
					src="/Images/homeHero.png"
					alt="heroImage"
					className="mb-5"
				/>
				<h1 className="mt-5 mb-3">Invest in everything</h1>
				<h3>
					Online platform to invest in stocks, derivatives, mutual
					funds, ETFs, bonds, and more.
				</h3>
				<button
					className="p-2 signUpbutton mt-5 mb-5x`"
					style={{ width: "20%", margin: "0 auto" }}
				>
					<b>Sign Up for free</b>
				</button>
			</div>
		</div>
	);
}
