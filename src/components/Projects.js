import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUSerData } from '../redux/reducers';
import '../styles/Projects.css';
import ProjectCard from './ProjecCard';
const Projects = () => {
	const { user } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getUSerData());
	}, []);
	return (
		<div className='projects' id='projects'>
			<div className='container'>
				<h1 className='projects-heading indigo-text center'>Projects</h1>
				<div className='row'>
					{user.data.projects.map((project) => (
						<ProjectCard project={project} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Projects;
