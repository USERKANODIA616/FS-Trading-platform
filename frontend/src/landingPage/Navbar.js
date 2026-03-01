export default function NavBar() {
	return (
		<>
			<nav className="navbar navbar-expand-lg">
				<a class="navbar-brand" href="#">
					
				</a>
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div className="collapse container" id="navbarNav">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<a className="navbar-link" href="#">
								Signup
							</a>
						</li>
						<li className="nav-item">
							<a className="navbar-link" href="#">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="navbar-link" href="#">
								Products
							</a>
						</li>
						<li className="nav-item">
							<a className="navbar-link" href="#">
								Pricing
							</a>
						</li>
						<li className="nav-item">
							<a className="navbar-link" href="#">
								Support
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}
