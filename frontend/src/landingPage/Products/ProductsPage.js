import Hero from "./Hero";
import LeftImage from "./LeftImage";
import RightImage from "./RightImage";
import Universe from "./Universe";

export default function ProductsPage() {
	return (
		<>
			<Hero />
			<LeftImage
				imageUrl="Images\kite.png"
				productName="Kite"
				productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
				links={[
					{ name: "Try Demo", url: "#" },
					{ name: "Learn More", url: "#" },
				]}
				googlePlay={true}
				appStore={true}
			/>
			<RightImage
				imageUrl="Images\console.png"
				productName="Console"
				productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
				links={[{ name: "Learn More", url: "#" }]}
			/>
			<LeftImage
				imageUrl="Images\coin.png"
				productName="Coin"
				productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
				links={[{ name: "Coin", url: "#" }]}
				googlePlay={true}
				appStore={true}
			/>
			<RightImage
				imageUrl="Images\kiteconnect.png"
				productName="Kite Connect API"
				productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
				links={[{ name: "Learn More", url: "#" }]}
			/>
			<LeftImage
				imageUrl="Images\varsity.png"
				productName="Varsity mobile"
				productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
				googlePlay={true}
				appStore={true}
			/>
			<h3 className="text-center high-m">
				Want to know more about our technology stack? Check out the
				<a href="https://zerodha.tech/"> Zerodha.tech</a> blog.
			</h3>
			<Universe />
		</>
	);
}
