const CertificateCard = ({ certificate }) => {
	return (
		<div className='col m6 s12'>
			{certificate && (
				<div className='card sticky-action'>
					<div className='card-image waves-effect waves-block waves-light'>
						<img className='activator' src={certificate.certificateUrl} />
					</div>
					<div className='card-content'>
						<span className='card-title activator grey-text text-darken-4'>
							<strong>{certificate.title}</strong>
							<i className='material-icons right'>more_vert</i>
						</span>

						<p>{certificate.description}</p>
						{/* <div className='stack-details'>
							<p>
								<strong>Used Stack:</strong>
								<i className='devicon-android-plain colored'></i>
								<i className='devicon-c-plain colored'></i>
								<i className='devicon-circleci-plain colored'></i>
							</p>
						</div> */}
						{/* <div>
							<a
								className='waves-effect waves-dark btn btn-flat white indigo-text'
								href={certificate.frontendUrl}
							>
								client
							</a>
							<a
								className='waves-effect waves-dark btn btn-flat white indigo-text'
								href={certificate.backendUrl}
							>
								server
							</a>
							<a
								className='waves-effect waves-dark btn btn-flat white indigo-text'
								href={certificate.hostedUrl}
							>
								preview
							</a>
						</div> */}
					</div>

					<div className='card-reveal'>
						<span className='card-title grey-text text-darken-4'>
							Card Title<i className='material-icons right'>close</i>
						</span>
						<p>
							Here is some more information about this product that is only revealed once clicked
							on.
						</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default CertificateCard;
