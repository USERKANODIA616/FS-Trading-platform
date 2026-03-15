import Platforms from "./Platforms";

export default function Universe() {
	return (
		<div className="container">
			<div className="row text-center high-m">
				<h2>The Zerodha Universe</h2>
				<p className="mt-3 fs-5">
					Extend your trading and investment experience even further
					with our partner platforms
				</p>
				<div className="row mt-5">
					<Platforms
						logo="Images\zerodhaFundhouse.png"
						text="Our asset management venture that is creating simple and transparent index funds to help you save for your goals."
					/>
					<Platforms
						logo="Images\sensibullLogo.svg"
						text="Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.
"
					/>
					<Platforms
						logo="Images\goldenpiLogo.png"
						text="Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more."
					/>
				</div>
				<div className="row mt-5">
					<Platforms
						logo="Images\streakLogo.png"
						text="
Systematic trading platform
that allows you to create and backtest
strategies without coding."
					/>
					<Platforms
						logo="Images\smallcaseLogo.png"
						text="Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs."
					/>
					<Platforms
						logo="Images\dittoLogo.png"
						text="Personalized advice on life
and health insurance. No spam
and no mis-selling.
Sign up for free"
					/>
				</div>
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
