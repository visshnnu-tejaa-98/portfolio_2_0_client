import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Profile from '../images/profile_img.png';
import { getUSerData } from '../redux/reducers';
import '../styles/Home.css';

const Home = () => {
	const { user, loading, error } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getUSerData());
	}, [dispatch]);
	return (
		<div className='home center my-3' id='home'>
			<img
				src={Profile}
				// data-aos='zoom-in-down'
				alt='profile-img'
				className='profile-img z-depth-2 slide-bottom'
			/>
			<div className='scale-up-center' data-aos='zoom-in-up'>
				<p className='wish indigo-text'>
					Hello 👋<span className='emoji' aria-label='Wave'></span>
				</p>
				<p className='name'>
					I'm
					<strong className='indigo-text'>
						&nbsp; {user.data.name} <br />
					</strong>
					<span className='profession'>-- {user.data.designation}</span>
				</p>
				<p className='projects-tagline'>Check My Projects and Resume ▼</p>
				<a className='waves-effect waves-light btn indigo mb-5' href='#projects'>
					<i className='material-icons right'>code</i>My Projects
				</a>
				<a className='waves-effect waves-light btn indigo mb-5 ml-3' href={user.data.resumeLink}>
					<i className='material-icons right'>code</i>Resume
				</a>
			</div>
		</div>
	);
};

export default Home;
