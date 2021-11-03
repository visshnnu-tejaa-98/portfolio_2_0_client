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

						<p>
							{certificate.description.length > 100 ? (
								<span>
									{`${certificate.description.slice(0, 90)}... `}
									<span className='indigo-text activator show-pointer'>Read more</span>
								</span>
							) : (
								certificate.description
							)}
						</p>
						<div>
							<a
								className='waves-effect waves-dark btn btn-flat white indigo-text'
								href={certificate.certificateUrl}
							>
								Certificate
							</a>
						</div>
					</div>

					<div className='card-reveal'>
						<span className='card-title grey-text text-darken-4'>
							{certificate.title}
							<i className='material-icons right'>close</i>
						</span>
						<p>{certificate.description}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default CertificateCard;
