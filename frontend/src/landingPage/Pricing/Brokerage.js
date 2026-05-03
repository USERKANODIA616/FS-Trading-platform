import { useState } from "react";
import "./tabs.css";
function Brokerage() {
	const [activeTab, setActiveTab] = useState("equityTab");

	return (
		<div className="container">
			<div className="row mt-5">
				<nav className="tab-nav">
					<a
						className={
							activeTab === "equityTab"
								? "fs-3 tab active"
								: "fs-3 tab"
						}
						onClick={() => setActiveTab("equityTab")}
					>
						Equity
					</a>
					<a
						className={
							activeTab === "currencyTab"
								? "fs-3 tab active"
								: "fs-3 tab"
						}
						onClick={() => setActiveTab("currencyTab")}
					>
						Currency
					</a>
					<a
						className={
							activeTab === "commodityTab"
								? "fs-3 tab active"
								: "fs-3 tab"
						}
						onClick={() => setActiveTab("commodityTab")}
					>
						Commodity
					</a>
				</nav>
				{activeTab === "equityTab" && (
					<section className="p-0 mb-4">
						<table>
							<thead>
								<tr>
									<th>&nbsp;</th>
									<th>Equity delivery</th>
									<th>Equity intraday</th>
									<th>F&O - Futures</th>
									<th>F&O - Options</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Brokerage</td>
									<td>Zero Brokerage</td>
									<td>
										0.03% or Rs. 20/executed order whichever
										is lower
									</td>
									<td>
										0.03% or Rs. 20/executed order whichever
										is lower
									</td>
									<td>Flat Rs. 20 per executed order</td>
								</tr>
								<tr>
									<td>STT/CTT</td>
									<td>0.1% on buy & sell</td>
									<td>0.025% on the sell side</td>
									<td>0.05% on the sell side</td>
									<td>
										<ul>
											<li>
												0.15% of the intrinsic value on
												options that are bought and
												exercised
											</li>
											<li>
												0.15% on sell side (on premium)
											</li>
										</ul>
									</td>
								</tr>
								<tr>
									<td>
										Transaction<br></br> charges
									</td>
									<td>
										NSE: 0.00307% <br></br>
										BSE: 0.00375%
									</td>
									<td>
										NSE: 0.00307%<br></br>
										BSE: 0.00375%
									</td>
									<td>
										NSE: 0.00183%<br></br>
										BSE: 0
									</td>
									<td>
										NSE: 0.03553% (on premium)<br></br>
										BSE: 0.0325% (on premium)
									</td>
								</tr>
								<tr>
									<td>GST</td>
									<td>
										18% on (brokerage + SEBI charges +
										transaction charges)
									</td>
									<td>
										18% on (brokerage + SEBI charges +
										transaction charges)
									</td>
									<td>
										18% on (brokerage + SEBI charges +
										transaction charges)
									</td>
									<td>
										18% on (brokerage + SEBI charges +
										transaction charges)
									</td>
								</tr>
								<tr>
									<td>SEBI charges</td>
									<td>₹10 / crore</td>
									<td>₹10 / crore</td>
									<td>₹10 / crore</td>
									<td>₹10 / crore</td>
								</tr>
								<tr>
									<td>Stamp charges</td>
									<td>0.015% or ₹1500 / crore on buy side</td>
									<td>0.003% or ₹300 / crore on buy side</td>
									<td>0.002% or ₹200 / crore on buy side</td>
									<td>0.003% or ₹300 / crore on buy side</td>
								</tr>
							</tbody>
						</table>
					</section>
				)}
				{activeTab === "currencyTab" && (
					<section className="p-0 mb-4">
						<table>
							<thead>
								<tr>
									<th>&nbsp;</th>
									<th>Currency futures</th>
									<th>Currency options</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Brokerage</td>
									<td>
										0.03% or ₹ 20/executed order whichever
										is lower
									</td>
									<td>₹ 20/executed order</td>
								</tr>
								<tr>
									<td>STT/CTT</td>
									<td>No STT</td>
									<td>No STT</td>
								</tr>
								<tr>
									<td>
										Transaction<br></br> charges
									</td>
									<td>
										NSE: 0.00035% <br></br>
										BSE: 0.00045%
									</td>
									<td>
										NSE: 0.0311%<br></br>
										BSE: 0.001%
									</td>
								</tr>
								<tr>
									<td>GST</td>
									<td>
										18% on (brokerage + SEBI charges +
										transaction charges)
									</td>
									<td>
										18% on (brokerage + SEBI charges +
										transaction charges)
									</td>
								</tr>
								<tr>
									<td>SEBI charges</td>
									<td>₹10 / crore</td>
									<td>₹10 / crore</td>
								</tr>
								<tr>
									<td>Stamp charges</td>
									<td>0.0001% or ₹10 / crore on buy side</td>
									<td>0.0001% or ₹10 / crore on buy side</td>
								</tr>
							</tbody>
						</table>
					</section>
				)}
				{activeTab === "commodityTab" && (
					<section className="p-0 mb-4">
						<table>
							<thead>
								<tr>
									<th>&nbsp;</th>
									<th>Currency futures</th>
									<th>Currency options</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Brokerage</td>
									<td>
										0.03% or ₹ 20/executed order whichever
										is lower
									</td>
									<td>₹ 20/executed order</td>
								</tr>
								<tr>
									<td>STT/CTT</td>
									<td>0.01% on sell side (Non-Agri)</td>
									<td>0.05% on sell side</td>
								</tr>
								<tr>
									<td>
										Transaction<br></br> charges
									</td>
									<td>
										MCX: 0.0021% <br></br>
										NSE: 0.0001%
									</td>
									<td>
										MCX: 0.0418%<br></br>
										NSE: 0.001%
									</td>
								</tr>
								<tr>
									<td>GST</td>
									<td>
										18% on (brokerage + SEBI charges +
										transaction charges)
									</td>
									<td>
										18% on (brokerage + SEBI charges +
										transaction charges)
									</td>
								</tr>
								<tr>
									<td>SEBI charges</td>
									<td>
										Agri:<br></br> ₹1 / crore <br></br>
										Non-agri:<br></br> ₹10 / crore
									</td>
									<td>₹10 / crore</td>
								</tr>
								<tr>
									<td>Stamp charges</td>
									<td>0.002% or ₹200 / crore on buy side</td>
									<td>0.003% or ₹300 / crore on buy side</td>
								</tr>
							</tbody>
						</table>
					</section>
				)}
				<h3 className="text-center fs-4 mb-5">
					Calculate your costs upfront using our brokerage calculator
				</h3>
				<div className="row mb-5">
					<h3>Charges for account opening</h3>
					<div className="col-10 p-0 mt-3">
						<table>
							<thead>
								<tr>
									<th>
										Type of account
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th>Online account</th>
								</tr>
								<tr>
									<th>Offline account</th>
								</tr>
								<tr>
									<th>NRI account (offline only)</th>
								</tr>
								<tr>
									<th>
										Partnership, LLP, HUF, or Corporate
										accounts (offline only)
									</th>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="col-2 p-0 mb-5 mt-3">
						<table>
							<thead>
								<tr>
									<th>Charges</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th>Free</th>
								</tr>
								<tr>
									<th>Free</th>
								</tr>
								<tr>
									<th>₹ 500</th>
								</tr>
								<tr>
									<th>₹ 500</th>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Brokerage;
