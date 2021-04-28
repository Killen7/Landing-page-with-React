import React from "react";

export function NavBarNico() {
	return (
		<div className="container">
			<nav className="navbar bg-dark navbar-expand-lg d-flex justify-content-between navbar-light ">
				<div>
					<a className="navbar-brand text-white" href="#">
						Start Bootsrap
					</a>
				</div>
				<div>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon text-white"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item active">
								<a className="nav-link text-white" href="#">
									Home{" "}
									<span className="sr-only">(current)</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-white" href="#">
									About
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-white" href="#">
									Services
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-white" href="#">
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}
