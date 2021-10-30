import '../styles/Certificates.css';
import ProjectCard from './ProjecCard';
const Certificates = () => {
	return (
		<div className='certificates' id='certificates'>
			<div className='container '>
				<h1 className='certifications-heading indigo-text center'>Certification</h1>
				<div className='row'>
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
				</div>
			</div>
		</div>
	);
};

export default Certificates;
