import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUSerData } from '../redux/reducers';
import '../styles/Experience.css';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
	const { user } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getUSerData());
	}, []);
	return (
		<div className='experience indigo lighten-0 ' id='experience'>
			<h1 className='center experience-heading white-text'>Experience</h1>
			<div className='container'>
				{user.data.experience.map((exp) => {
					return <ExperienceCard exp={exp} />;
				})}
			</div>
		</div>
	);
};

export default Experience;
