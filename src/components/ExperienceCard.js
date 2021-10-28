import { useState } from 'react';

const ExperienceCard = ({ designation }) => {
	const [visibility, setVisibility] = useState(false);
	const visibilityHandler = () => {
		setVisibility(!visibility);
	};
	return (
		<div className='card'>
			<div onClick={visibilityHandler}>
				<p className='designation'>{designation}</p>
				<p className='company'>XSEED Education</p>
			</div>
			<div className={!visibility ? 'visibility' : ''}>
				<hr className='line' />
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, voluptatum totam! Dolor
					totam quam nemo, fugiat voluptatibus enim accusantium officiis, illum ea, incidunt
					perspiciatis maiores voluptates natus reprehenderit qui nisi.
				</p>
			</div>
		</div>
	);
};

export default ExperienceCard;
