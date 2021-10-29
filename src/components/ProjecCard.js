const ProjectCard = () => {
	return (
		<div className='col m6 s12'>
			<div class='card sticky-action'>
				<div class='card-image waves-effect waves-block waves-light'>
					<img class='activator' src='https://mui.com/static/images/cards/paella.jpg' />
				</div>
				<div class='card-content'>
					<span class='card-title activator grey-text text-darken-4'>
						<strong>Card Title</strong>
						<i class='material-icons right'>more_vert</i>
					</span>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam adipisci minima neque
						atque praesentium dicta
					</p>
					<div className='stack-details'>
						<p>
							<strong>Used Stack:</strong>
							<i class='devicon-android-plain colored'></i>
							<i class='devicon-c-plain colored'></i>
							<i class='devicon-circleci-plain colored'></i>
						</p>
					</div>
					<div>
						<a class='waves-effect waves-dark btn btn-flat white indigo-text'>client</a>
						<a class='waves-effect waves-dark btn btn-flat white indigo-text'>server</a>
						<a class='waves-effect waves-dark btn btn-flat white indigo-text'>preview</a>
					</div>
				</div>

				<div class='card-reveal'>
					<span class='card-title grey-text text-darken-4'>
						Card Title<i class='material-icons right'>close</i>
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
