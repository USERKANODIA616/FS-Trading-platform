export default function () {
	function toggleBio(e) {
		const arrow = e.currentTarget;
		const bio = arrow.nextElementSibling;

		if (bio.style.display === "none" || bio.style.display === "") {
			bio.style.display = "block";
			arrow.innerHTML = "Bio <i class='fa-solid fa-angle-up'></i>";
		} else {
			bio.style.display = "none";
			arrow.innerHTML = "Bio <i class='fa-solid fa-angle-down'></i>";
		}
	}
	return (
		<div className="container bio-p">
			<div className="row mt-5 mb-5">
				<div className="col">
					<div
						className="d-flex flex-column align-items-center"
						style={{ padding: "50px" }}
					>
						<img
							src="Images\Nikhil.jpg"
							style={{ borderRadius: "100%", width: "100%" }}
						></img>
						<span className="fs-5 mt-3">Nikhil Kamath</span>
						<h6 className="mt-2">Co-founder & CFO</h6>
						<span
							className="bio-toggle-btn mt-2"
							style={{ cursor: "pointer" }}
							onClick={toggleBio}
							id="arrow"
						>
							Bio&nbsp;<i class="fa-solid fa-angle-down"></i>
						</span>
						<div id="bioText" style={{ display: "none" }}>
							<p>
								Nikhil is an astute and experienced investor,
								and he heads financial planning at Zerodha. An
								avid reader, he always appreciates a good game
								of chess.
							</p>
						</div>
					</div>
				</div>
				<div className="col">
					<div
						className="d-flex flex-column align-items-center"
						style={{ padding: "50px" }}
					>
						<img
							src="Images\Kailash.jpg"
							style={{ borderRadius: "100%", width: "100%" }}
						></img>
						<span className="fs-5 mt-3">Dr. Kailash Nadh</span>
						<h6 className="mt-2">CTO</h6>
						<span
							className="bio-toggle-btn mt-2"
							style={{ cursor: "pointer" }}
							onClick={toggleBio}
							id="arrow"
						>
							Bio&nbsp;<i class="fa-solid fa-angle-down"></i>
						</span>
						<div id="bioText" style={{ display: "none" }}>
							<p>
								Kailash has a PhD in Artificial Intelligence &
								Computational Linguistics, and is the brain
								behind all our technology and products. He has
								been a developer from his adolescence and
								continues to write code every day.
							</p>
						</div>
					</div>
				</div>
				<div className="col">
					<div
						className="d-flex flex-column align-items-center"
						style={{ padding: "50px" }}
					>
						<img
							src="Images\Venu.jpg"
							style={{ borderRadius: "100%", width: "100%" }}
						></img>
						<span className="fs-5 mt-3">Venu Madhav</span>
						<h6 className="mt-2">COO</h6>
						<span
							className="bio-toggle-btn mt-2"
							style={{ cursor: "pointer" }}
							onClick={toggleBio}
							id="arrow"
						>
							Bio&nbsp;<i class="fa-solid fa-angle-down"></i>
						</span>
						<div id="bioText" style={{ display: "none" }}>
							<p>
								Venu is the backbone of Zerodha taking care of
								operations and ensuring that we are compliant to
								rules and regulations. He has over a dozen
								certifications in financial markets and is also
								proficient in technical analysis. Workouts,
								cycling, and adventuring is what he does outside
								of Zerodha.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="row mt-5 mb-5">
				<div className="col">
					<div
						className="d-flex flex-column align-items-center"
						style={{ padding: "50px" }}
					>
						<img
							src="Images\Seema.jpg"
							style={{ borderRadius: "100%", width: "100%" }}
						></img>
						<span className="fs-5 mt-3">Seema Patil</span>
						<h6 className="mt-2">Director</h6>
						<span
							className="bio-toggle-btn mt-2"
							style={{ cursor: "pointer" }}
							onClick={toggleBio}
							id="arrow"
						>
							Bio&nbsp;<i class="fa-solid fa-angle-down"></i>
						</span>
						<div id="bioText" style={{ display: "none" }}>
							<p>
								Seema who has lead the quality team since the
								beginning of Zerodha, is now a director. She is
								an extremely disciplined fitness enthusiast.
							</p>
						</div>
					</div>
				</div>
				<div className="col">
					<div
						className="d-flex flex-column align-items-center"
						style={{ padding: "50px" }}
					>
						<img
							src="Images\karthik.jpg"
							style={{ borderRadius: "100%", width: "100%" }}
						></img>
						<span className="fs-5 mt-3">Karthik Rangappa</span>
						<h6 className="mt-2">Chief of Education</h6>
						<span
							className="bio-toggle-btn mt-2"
							style={{ cursor: "pointer" }}
							onClick={toggleBio}
							id="arrow"
						>
							Bio&nbsp;<i class="fa-solid fa-angle-down"></i>
						</span>
						<div id="bioText" style={{ display: "none" }}>
							<p>
								Karthik "Guru" Rangappa single handledly wrote
								Varsity, Zerodha's massive educational program.
								He heads investor education initiatives at
								Zerodha and loves stock markets, classic rock,
								single malts, and photography.
							</p>
						</div>
					</div>
				</div>
				<div className="col">
					<div
						className="d-flex flex-column align-items-center"
						style={{ padding: "50px" }}
					>
						<img
							src="Images\Austin.jpg"
							style={{ borderRadius: "100%", width: "100%" }}
						></img>
						<span className="fs-5 mt-3">Austin Prakesh</span>
						<h6 className="mt-2">Director Strategy</h6>
						<span
							className="bio-toggle-btn mt-2"
							style={{ cursor: "pointer" }}
							onClick={toggleBio}
							id="arrow"
						>
							Bio&nbsp;<i class="fa-solid fa-angle-down"></i>
						</span>
						<div id="bioText" style={{ display: "none" }}>
							<p>
								Austin is a successful self-made entrepreneur
								from Singapore. His area of specialty revolves
								around helping organisations including grow by
								optimizing revenue streams and creating growth
								strategies. He is a boxing enthusiast and loves
								collecting exquisite watches.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
