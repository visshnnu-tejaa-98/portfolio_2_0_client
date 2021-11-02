import { useState } from 'react';

const DetailsCard = ({ details }) => {
	const [visibility, setVisibility] = useState(false);
	const visibilityHandler = () => {
		setVisibility(!visibility);
	};
	return (
		<div className='card-details card'>
			{details && (
				<div>
					<div onClick={visibilityHandler}>
						<p className='designation'>{details.designation}</p>
						<p className='company'>{details.companyName}</p>
					</div>
					<div className={!visibility ? 'visibility' : ''}>
						<hr className='line' />
						<p>{details.description}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default DetailsCard;
