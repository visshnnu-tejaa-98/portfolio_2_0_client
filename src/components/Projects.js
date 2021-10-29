import '../styles/Projects.css';
import ProjectCard from './ProjecCard';
const Projects = () => {
	return (
		<div className='projects'>
			<div className='container'>
				<h1 className='projects-heading indigo-text center'>Projects</h1>
				<div className='row'>
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
				</div>
			</div>
		</div>
	);
};

export default Projects;
