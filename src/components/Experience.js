import '../styles/Experience.css';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
	return (
		<div className='experience indigo lighten-0 '>
			<h1 className='center experience-heading white-text'>Experience</h1>
			<div className='container'>
				<ExperienceCard designation='Fullstack developer' />
				<ExperienceCard designation='Mentor' />
			</div>
		</div>
	);
};

export default Experience;
