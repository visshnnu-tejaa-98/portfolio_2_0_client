const ProjectCard = ({ project }) => {
	return (
		<div className='col m6 s12'>
			{project && (
				<div className='card sticky-action'>
					<div className='card-image waves-effect waves-block waves-light'>
						<img className='activator' src={project.imageUrl} />
					</div>
					<div className='card-content'>
						<span className='card-title activator grey-text text-darken-4'>
							<strong>{project.title}</strong>
							<i className='material-icons right'>more_vert</i>
						</span>

						<p className=''>
							{project.description.length > 100 ? (
								<span>
									{`${project.description.slice(0, 90)}... `}
									<span className='indigo-text activator show-pointer'>Read more</span>
								</span>
							) : (
								project.description
							)}
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
							<a
								className='waves-effect waves-dark btn btn-flat white indigo-text'
								href={project.frontendUrl}
							>
								client
							</a>
							<a
								className='waves-effect waves-dark btn btn-flat white indigo-text'
								href={project.backendUrl}
							>
								server
							</a>
							<a
								className='waves-effect waves-dark btn btn-flat white indigo-text'
								href={project.hostedUrl}
							>
								preview
							</a>
						</div>
					</div>

					<div className='card-reveal'>
						<span className='card-title grey-text text-darken-4'>
							{project.title}
							<i className='material-icons right'>close</i>
						</span>
						<p>{project.description}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default ProjectCard;
