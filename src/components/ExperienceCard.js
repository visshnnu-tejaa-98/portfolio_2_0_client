import { useState } from 'react';

const ExperienceCard = ({ exp }) => {
	const [visibility, setVisibility] = useState(false);
	const visibilityHandler = () => {
		setVisibility(!visibility);
	};
	return (
		<div className='card-details card'>
			{exp && (
				<div>
					<div onClick={visibilityHandler}>
						<p className='designation'>{exp.designation}</p>
						<p className='company'>{exp.companyName}</p>
					</div>
					<div className={!visibility ? 'visibility' : ''}>
						<hr className='line' />
						<p>{exp.description}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default ExperienceCard;
