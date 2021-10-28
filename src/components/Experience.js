import '../styles/Experience.css';
import DetailsCard from './DetailsCard';

const Experience = () => {
	return (
		<div className='experience indigo lighten-0 '>
			<h1 className='center experience-heading white-text'>Experience</h1>
			<div className='container'>
				<DetailsCard heading='Fullstack developer' subHeading='XSEED Education' />
				<DetailsCard heading='Mentor' subHeading='JD Solutions' />
			</div>
		</div>
	);
};

export default Experience;
