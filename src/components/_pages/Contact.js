import React from 'react';

import logo from '../../assets/images/ftactics-logo.svg';
import { ReactComponent as FooterLogo } from '../../assets/images/ftactics-logo.svg';

class Contact extends React.Component {

    render = () => {
    	return (
        	<div className="contact">
        		<header className="heading">
	        		<div className="container">
	        			<img id="logo" src={logo} alt="Ftactics logo" />
	        			<h1>Contact us</h1>
	        		</div>
	        	</header>
	        	<section className="contact-form">

	        	</section>
	        	<footer className="footer">
					<div className="container">
						<a href="/" className="home-link"><FooterLogo fill="rgba(255,255,255,0.5)" alt="Ftactics logo" className="FooterLogo" /></a>
						<div className="footer-links">
							<a href="https://app.ftactics.com/register">Join us</a>
						</div>
						<span>© 2019 - Ftactics - Developed by Jochen Meyvisch</span>
					</div>
	        	</footer>
        	</div>
        )
    }
}

export default Contact;