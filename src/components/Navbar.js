import { useEffect } from 'react';
const Navbar = () => {
	useEffect(() => {
		let M = window.M;
		M.AutoInit();
	}, []);
	return (
		<div className='navbar '>
			<nav className='blue darken-2'>
				<div class='nav-wrapper container'>
					<a href='#!' class='brand-logo'>
						<strong>My Portfolio</strong>
					</a>
					<a href='#' data-target='mobile-demo' class='sidenav-trigger'>
						<i class='material-icons'>menu</i>
					</a>
					<ul class='right hide-on-med-and-down'>
						<a class='dropdown-trigger btn btn-flat white' href='#' data-target='dropdown1'>
							<span className='blue-text'>
								<div>
									<strong>Visshnnu ▼</strong>
								</div>
							</span>
						</a>

						<ul id='dropdown1' class='dropdown-content'>
							<li>
								<a href='sass.html' className='blue-text'>
									Home
								</a>
							</li>
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
									Projects
								</a>
							</li>
							<li>
								<a href='mobile.html' className='blue-text'>
									Contact
								</a>
							</li>
						</ul>
					</ul>
				</div>
			</nav>

			<ul class='sidenav' id='mobile-demo'>
				<li>
					<a href='sass.html'>Home</a>
				</li>
				<li>
					<a href='badges.html'>About</a>
				</li>
				<li>
					<a href='collapsible.html'>Skills</a>
				</li>
				<li>
					<a href='mobile.html'>Projects</a>
				</li>
				<li>
					<a href='mobile.html'>Contact</a>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
