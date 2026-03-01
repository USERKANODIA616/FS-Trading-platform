import Awards from "./Awards";
import Education from "./Education";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Stats from "./Stats";
import OpenAccount from "../OpenAccount";
import NavBar from "../Navbar";
import Footer from "../Footer";


export default function HomePage() {
	return (
		<>
			{/* <i class="fa-solid fa-house"></i> */}
			{/* <NavBar /> */}
			<Hero />
			<Awards />
			<Stats />
			<Pricing />
			<Education />
			<OpenAccount />
			<Footer />
		</>
	);
}
