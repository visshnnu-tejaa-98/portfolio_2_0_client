import '../styles/Education.css';
import DetailsCard from './DetailsCard';
const Education = () => {
	return (
		<div className='education indigo'>
			<div className='container'>
				<h1 className='education-heading center white-text'>Education</h1>
				<DetailsCard heading='Batchlor of Technology' subHeading='Jain University' />
				<DetailsCard heading='Intermediate' subHeading='Narayana Jr. college' />
				<DetailsCard heading='10th Class' subHeading='Montessori smart school' />
			</div>
		</div>
	);
};

export default Education;
