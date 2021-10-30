import '../styles/Contact.css';
import ContactSVG from '../images/Contact.svg';
const Contact = () => {
	return (
		<div className='contact indigo'>
			<div className='container'>
				{/* <h1 className='contact-heading white-text center'>Contact</h1> */}
				<div className='row contact-data'>
					{/* <div className='col s12 m6'> */}
					<img src={ContactSVG} alt='' className='contact-img' />
					{/* </div> */}
					{/* <div className='col s12 m6'> */}
					<div className='card contact-card'>
						<div className='contact-by'>
							<h4 className='indigo-text center contact-heading'>Get in Touch</h4>
							<div className=''>
								<div class='input-field'>
									<input id='name' type='text' class='validate' />
									<label for='name'>Name</label>
								</div>
								<div class='input-field'>
									<input id='email' type='text' class='validate' />
									<label for='email'>Email</label>
								</div>
								<div class='input-field'>
									<input id='message' type='text' class='validate' />
									<label for='message'>Message</label>
								</div>
							</div>
						</div>
						{/* </div> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
