import { useState } from 'react';

const EducationCard = ({ edu }) => {
	const [visibility, setVisibility] = useState(false);
	const visibilityHandler = () => {
		setVisibility(!visibility);
	};
	return (
		<div className='card-details card'>
			{edu && (
				<div>
					<div onClick={visibilityHandler}>
						<p className='designation'>{edu.specilization}</p>
						<p className='company'>{edu.institute}</p>
					</div>
					<div className={!visibility ? 'visibility' : ''}>
						<hr className='line' />
						<p>{edu.description}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default EducationCard;
