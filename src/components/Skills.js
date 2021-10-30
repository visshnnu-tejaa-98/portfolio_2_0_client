import { useEffect } from 'react';
import '../styles/Skills.css';
const Skills = () => {
	useEffect(() => {
		const M = window.M;
		M.AutoInit();
	});
	return (
		<div className='container' id='skills'>
			<div className='skills cursive-1 my-3  ' data-aos='fade-in'>
				<h1 className='indigo-text skills-heading center'>My Skill Set</h1>
			</div>

			<div className='row center '>
				<div
					className='col s4 m4 l2 center my-3  '
					data-position='top'
					data-aos='zoom-in'
					data-aos-offset='0'
				>
					<i className='devicon-html5-plain colored devicon '></i>
				</div>
				<div
					className='col s4 l2 center my-3  '
					data-aos='zoom-in'
					data-aos-offset='50'
					data-aos-duration='100'
				>
					<i className='devicon-css3-plain colored devicon '></i>
				</div>
				<div
					className='col s4 l2  center my-3  '
					data-aos='zoom-in'
					data-aos-offset='150'
					data-aos-duration='100'
				>
					<i className='devicon-javascript-plain colored devicon '></i>
				</div>
				<div
					className='col s4 l2  center my-3  '
					data-aos='zoom-in'
					data-aos-offset='100'
					data-aos-duration='100'
				>
					<i className='devicon-bootstrap-plain colored devicon '></i>
				</div>
				<div
					className='col s4 l2  center my-3  '
					data-aos='zoom-in'
					data-aos-offset='50'
					data-aos-duration='100'
				>
					<i className='devicon-react-original colored devicon '></i>
				</div>
				<div
					className='col s4 l2  center my-3  '
					data-aos='zoom-in'
					data-aos-offset='200'
					data-aos-duration='100'
				>
					<i className='devicon-nodejs-plain colored devicon '></i>
				</div>
				<div
					className='col s4 l2  center my-3  '
					data-aos='zoom-in'
					data-aos-offset='150'
					data-aos-duration='100'
				>
					<i className='devicon-express-original colored devicon'></i>
				</div>
				<div
					className='col s4 l2 center my-3  '
					data-aos='zoom-in'
					data-aos-offset='100'
					data-aos-duration='100'
				>
					<i className='devicon-mongodb-plain-wordmark colored devicon '></i>
				</div>
				<div
					className='col s4 l2 center my-3  '
					data-aos='zoom-in'
					data-aos-offset='50'
					data-aos-duration='100'
				>
					<i className='devicon-github-original colored devicon'></i>
				</div>
				<div
					className='col s4 l2 center my-3  '
					data-aos='zoom-in'
					data-aos-offset='200'
					data-aos-duration='100'
				>
					<i className='devicon-materialui-plain colored devicon'></i>
				</div>
				<div
					className='col s4 l2 center my-3  '
					data-aos='zoom-in'
					data-aos-offset='150'
					data-aos-duration='100'
				>
					<i className='devicon-mysql-plain colored devicon'></i>
				</div>
				<div
					className='col s4 l2 center my-3  '
					data-aos='zoom-in'
					data-aos-offset='100'
					data-aos-duration='100'
				>
					<i className='devicon-c-plain colored devicon'></i>
				</div>
				<div
					className='col s4 l2 center my-3 offset-l2  '
					data-aos='zoom-in'
					data-aos-offset='0'
					data-aos-duration='100'
				>
					<i className='devicon-npm-original-wordmark colored devicon'></i>
				</div>
				<div
					className='col s4 l2 center my-3  '
					data-aos='zoom-in'
					data-aos-offset='50'
					data-aos-duration='100'
				>
					<i className='devicon-redux-original colored devicon'></i>
				</div>
				<div
					className='col s4 l2 center my-3  '
					data-aos='zoom-in'
					data-aos-offset='50'
					data-aos-duration='100'
				>
					<i className='devicon-vuejs-plain colored devicon'></i>
				</div>
				<div
					className='col s4 l2 center my-3  '
					data-aos='zoom-in'
					data-aos-offset='50'
					data-aos-duration='100'
				>
					<i className='devicon-flutter-plain colored devicon'></i>
				</div>
			</div>
		</div>
	);
};

export default Skills;
