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
						<p className='carrier-objective'>
							Seeking a job as to gain the more technical knowledge and give my best to the
							organization from my knowledge. Looking forwarding to gain an opportunity that will
							allow me to learn and master the latest technologies and eager to learn new
							technologies and deliver the goals in time.
						</p>
						<ul className='tabs-links'>
							<li>
								<a href='#home'> Home</a>
							</li>
							<li>
								<a href='#about'>About</a>
							</li>
							<li>
								<a href='#skills'>Skills</a>
							</li>
							<li>
								<a href='#experience'>Experience</a>
							</li>
							<li>
								<a href='#projects'>Projects</a>
							</li>
							<li>
								<a href='#education'>Education</a>
							</li>
							<li>
								<a href='#certificates'>Certificates</a>
							</li>
						</ul>
						<div className='contact-links'>
							<i className='fab fa-linkedin-in'></i>
							<i className='fab fa-github'></i>
							<i className='fab fa-facebook'></i>
							<i className='fab fa-instagram'></i>
							<i className='far fa-envelope'></i>
							<i className='fas fa-phone-alt'></i>
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
