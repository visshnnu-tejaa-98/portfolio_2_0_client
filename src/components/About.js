import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUSerData } from '../redux/reducers';
import '../styles/About.css';
const About = () => {
	const { user } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getUSerData());
	}, []);
	return (
		<div
			className='about indigo lighten-1 scale-up-center'
			id='about'
			data-aos='zoom-in-up'
			id='about'
		>
			<h1 className='about-heading center white-text scale-up-center '>About Me</h1>

			<p className='about-para white-text'>{user.data.aboutDescription}</p>
		</div>
	);
};

export default About;
