import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUSerData } from '../redux/reducers';
import '../styles/Education.css';
import EducationCard from './EducationCard';

const Education = () => {
	const { user } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getUSerData());
	}, []);
	return (
		<div className='education indigo' id='education'>
			<div className='container'>
				<h1 className='education-heading center white-text'>Education</h1>
				{user.data.education.map((edu) => (
					<EducationCard edu={edu} />
				))}
			</div>
		</div>
	);
};

export default Education;
