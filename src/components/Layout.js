import About from './About';
import Certificates from './Certificates';
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';
import Avatar from '../images/Avatar.svg';
const Layout = () => {
	return (
		<div className='layout margin-around'>
			<div className='row'>
				<div className='col m3 side-content indigo lighten-4'>
					<div>
						<img src={Avatar} alt='' className='avatar' />
						<ul>
							<li>Home</li>
							<li>About</li>
							<li>Skills</li>
							<li>Experience</li>
							<li>Projects</li>
							<li>Education</li>
							<li>Certificates</li>
						</ul>
						<div>
							<div className='contact-links'>
								<i class='fab fa-linkedin'></i>
								<i class='fab fa-github'></i>
								<i class='fab fa-facebook'></i>
							</div>
							<div className='contact-links'>
								<i class='fab fa-instagram'></i>
								<i class='fas fa-envelope'></i>
								<i class='fas fa-phone-square-alt'></i>
							</div>
						</div>
					</div>
				</div>
				<div className='col m9 s12  main-content indigo lighten-5 ' style={{ padding: 0 }}>
					{/* <h1>main content</h1> */}
					<Home />
					<About />
					<Skills />
					<Experience />
					<Projects />
					<Education />
					<Certificates />
					<Contact />
				</div>
			</div>
		</div>
	);
};

export default Layout;
