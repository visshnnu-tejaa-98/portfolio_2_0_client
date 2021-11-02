import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUSerData } from '../redux/reducers';
import '../styles/Certificates.css';
import ProjectCard from './ProjecCard';
const Certificates = () => {
	const { user } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getUSerData());
	}, []);
	return (
		<div className='certificates' id='certificates'>
			<div className='container '>
				<h1 className='certifications-heading indigo-text center'>Certification</h1>
				<div className='row'>
					{user.data.certificates.map((certificate) => (
						<ProjectCard certificate={certificate} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Certificates;
