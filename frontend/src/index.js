import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./landingPage/Home/HomePage";
import SignUp from "./landingPage/signUp/SignUp";
import PricingPage from "./landingPage/Pricing/PricingPage";
import ProductsPage from "./landingPage/Products/ProductsPage";
import AboutPage from "./landingPage/About/AboutPage";
import Navbar from "./landingPage/Navbar";
import Footer from "./landingPage/Footer";
import PageNotFound from "./landingPage/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<Navbar />
		<Routes>
			<Route path="/" element={<HomePage/>} />
			<Route path="/signup" element={<SignUp/>} />
			<Route path="/about" element={<AboutPage />} />
			<Route path="/products" element={<ProductsPage />} />
			<Route path="/pricing" element={<PricingPage />} />
			<Route path="*" element={<PageNotFound />} />
		</Routes>
		<Footer />
	</BrowserRouter>,
);
