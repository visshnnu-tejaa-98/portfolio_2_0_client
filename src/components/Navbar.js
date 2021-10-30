import { useEffect } from 'react';
const Navbar = () => {
	useEffect(() => {
		let M = window.M;
		M.AutoInit();
	}, []);
	return (
		<div className='navbar '>
			<nav className='blue darken-3'>
				<div className='nav-wrapper container'>
					<a href='#!' className='brand-logo'>
						<strong>My Portfolio</strong>
					</a>
					<a href='#' data-target='mobile-demo' className='sidenav-trigger'>
						<i className='material-icons'>menu</i>
					</a>
					<ul className='right hide-on-med-and-down'>
						<a className='dropdown-trigger btn btn-flat white' href='#' data-target='dropdown1'>
							<span className='blue-text'>
								<div>
									<strong>Visshnnu ▼</strong>
								</div>
							</span>
						</a>

						<ul id='dropdown1' className='dropdown-content'>
							<li>
								<a href='badges.html' className='blue-text text-darken-3'>
									About
								</a>
							</li>
							<li>
								<a href='collapsible.html' className='blue-text text-darken-3'>
									Skills
								</a>
							</li>
							<li>
								<a href='mobile.html' className='blue-text text-darken-3'>
									Experience
								</a>
							</li>
							<li>
								<a href='mobile.html' className='blue-text text-darken-3'>
									Education
								</a>
							</li>
							<li>
								<a href='mobile.html' className='blue-text text-darken-3'>
									Projects
								</a>
							</li>
							<li>
								<a href='mobile.html' className='blue-text text-darken-3'>
									Certifications
								</a>
							</li>
							<li>
								<a href='mobile.html' className='blue-text text-darken-3'>
									Contact
								</a>
							</li>
						</ul>
					</ul>
				</div>
			</nav>

			<ul className='sidenav' id='mobile-demo'>
				<li>
					<a href='badges.html' className='blue-text'>
						About
					</a>
				</li>
				<li>
					<a href='collapsible.html' className='blue-text'>
						Skills
					</a>
				</li>
				<li>
					<a href='mobile.html' className='blue-text'>
						Experience
					</a>
				</li>
				<li>
					<a href='mobile.html' className='blue-text'>
						Education
					</a>
				</li>
				<li>
					<a href='mobile.html' className='blue-text'>
						Projects
					</a>
				</li>
				<li>
					<a href='mobile.html' className='blue-text'>
						Certifications
					</a>
				</li>
				<li>
					<a href='mobile.html' className='blue-text'>
						Contact
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
