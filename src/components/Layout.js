import About from './About';
import Education from './Education';
import Experience from './Experience';
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';
const Layout = () => {
	return (
		<div className='layout margin-around'>
			<div className='row'>
				<div className='col m3 side-content indigo lighten-4'>
					<h1>side bar</h1>
					<p className='p'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea exercitationem repudiandae
						nam recusandae aliquid, ducimus delectus reprehenderit temporibus minima labore
						blanditiis at est repellendus iste itaque neque quasi deserunt nemo. Lorem ipsum dolor
						sit amet consectetur adipisicing elit. Ea exercitationem repudiandae nam recusandae
						aliquid, ducimus delectus reprehenderit temporibus minima labore blanditiis at est
						repellendus iste itaque neque quasi deserunt nemo. Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Ea exercitationem repudiandae nam recusandae aliquid,
						ducimus delectus reprehenderit temporibus minima labore blanditiis at est repellendus
						iste itaque neque quasi deserunt nemo. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Ea exercitationem repudiandae nam recusandae aliquid, ducimus delectus
						reprehenderit temporibus minima labore blanditiis at est repellendus iste itaque neque
						quasi deserunt nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
						exercitationem repudiandae nam recusandae aliquid, ducimus delectus reprehenderit
						temporibus minima labore blanditiis at est repellendus iste itaque neque quasi deserunt
						nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea exercitationem
						repudiandae nam recusandae aliquid, ducimus delectus reprehenderit temporibus minima
						labore blanditiis at est repellendus iste itaque neque quasi deserunt nemo. Lorem ipsum
						dolor sit amet consectetur adipisicing elit. Ea exercitationem repudiandae nam
						recusandae aliquid, ducimus delectus reprehenderit temporibus minima labore blanditiis
						at est repellendus iste itaque neque quasi deserunt nemo. Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Ea exercitationem repudiandae nam recusandae aliquid,
						ducimus delectus reprehenderit temporibus minima labore blanditiis at est repellendus
						iste itaque neque quasi deserunt nemo.
					</p>
				</div>
				<div className='col m9 s12  main-content indigo lighten-5 ' style={{ padding: 0 }}>
					{/* <h1>main content</h1> */}
					<Home />
					<About />
					<Skills />
					<Experience />
					<Projects />
					<Education />
				</div>
			</div>
		</div>
	);
};

export default Layout;
