export default function NavBar() {
	return (
		<nav
			className="navbar navbar-expand-lg navbar-light border-bottom fixed-top bg-white"
			style={{ height: "75px" }}
		>
			<div className="container p-2">
				<a className="navbar-brand" href="#">
					<img src="Images\logo.svg" style={{ width: "30%" }}></img>
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent"
				>
					<form className="d-flex" role="search">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link" href="#">
									Signup
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									About
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Products
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Pricing
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Support
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									<i className="fa-solid fa-bars fa-lg"></i>
								</a>
							</li>
						</ul>
					</form>
				</div>
			</div>
		</nav>
	);
}
