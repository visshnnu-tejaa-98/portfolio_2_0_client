const ProjectCard = () => {
	return (
		<div className='col m6 s12'>
			<div className='card sticky-action'>
				<div className='card-image waves-effect waves-block waves-light'>
					<img className='activator' src='https://mui.com/static/images/cards/paella.jpg' />
				</div>
				<div className='card-content'>
					<span className='card-title activator grey-text text-darken-4'>
						<strong>Card Title</strong>
						<i className='material-icons right'>more_vert</i>
					</span>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam adipisci minima neque
						atque praesentium dicta
					</p>
					<div className='stack-details'>
						<p>
							<strong>Used Stack:</strong>
							<i className='devicon-android-plain colored'></i>
							<i className='devicon-c-plain colored'></i>
							<i className='devicon-circleci-plain colored'></i>
						</p>
					</div>
					<div>
						<a className='waves-effect waves-dark btn btn-flat white indigo-text'>client</a>
						<a className='waves-effect waves-dark btn btn-flat white indigo-text'>server</a>
						<a className='waves-effect waves-dark btn btn-flat white indigo-text'>preview</a>
					</div>
				</div>

				<div className='card-reveal'>
					<span className='card-title grey-text text-darken-4'>
						Card Title<i className='material-icons right'>close</i>
					</span>
					<p>
						Here is some more information about this product that is only revealed once clicked on.
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
