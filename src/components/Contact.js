import '../styles/Contact.css';
import ContactSVG from '../images/Contact.svg';
const Contact = () => {
	return (
		<div className='contact indigo' id='contact'>
			<div className='container'>
				<div className='card contact-card'>
					<div className='contact-by'>
						<h4 className='indigo-text center contact-heading'>Get in Touch</h4>
						<div className=''>
							<div className='input-field'>
								<input id='name' type='text' className='validate' />
								<label for='name'>Name</label>
							</div>
							<div className='input-field'>
								<input id='email' type='text' className='validate' />
								<label for='email'>Email</label>
							</div>
							<div className='input-field'>
								<input id='message' type='text' className='validate' />
								<label for='message'>Message</label>
							</div>
							<div className='center'>
								<a class='waves-effect waves-light btn indigo'>
									<i className='material-icons right'>send</i>Send
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
