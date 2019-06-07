import React from 'react';

import logo from '../../assets/images/ftactics-logo.svg';
import makeTacticImg from '../../assets/images/make-tactic-editor.jpg';
import homeImg from '../../assets/images/homepage.jpg';
import findTacticImg from '../../assets/images/find-tactics.jpg';
import searchIcon from '../../assets/images/search.svg';
import addIcon from '../../assets/images/add-white.svg';
import heartIcon from '../../assets/images/heart.svg';
import losTigresLogo from '../../assets/images/los-tigres.svg';
import star from '../../assets/images/star.svg';
import { ReactComponent as FooterLogo } from '../../assets/images/ftactics-logo.svg';

var slides;

class Homepage extends React.Component {

    render = () => {
    	

    	return (
        	<div className="homepage">
	        	<header className="heading">
	        		<div className="logo-box">
					    <img id="logo" src={logo} alt="Ftactics logo" />
					</div>
	        		<div className="container home-container">
	        			<div>
		        			<h1>Take your Futsall tactics to the next level. For free.</h1>
		        			<p>Ftactics let's you find the right tactics for your team, create your own style of playing or show your selected tactics easily before game time. Let us help you win more!</p>
		        			<a className="button-link" href="https://app.ftactics.com/register">SIGN UP NOW</a>
		        		</div>
		        		<div>
		        			
		        		</div>
	        		</div>
	        	</header>
	        	<section className="features">
	        		<img className="make-tactic-img" src={homeImg} alt="Applicatio homepage screenshot" />
					<img className="make-tactic-img" src={makeTacticImg} alt="Tactic editor screenshot" />
					<img className="make-tactic-img" src={findTacticImg} alt="Find tactic screenshot" />

	        		<div className="container">
						<h2>Key features</h2>
						<div className="key-features-box">
							<div className="icon-box">
								<div className="action-icon find">
			                        <div className="outer-circle">
			                            <div className="inner-circle"><img src={searchIcon} alt="Search icon" /></div>
			                        </div>
				                    <h3>FIND TACTICS</h3>
			                    </div>
			                    <div className="action-text">
			                    	<span className="dash"></span>
									<p>Discover an array of animated tactics to get inspired.</p>
			                    </div>
			                </div>

			                <div className="icon-box">
			                    <div className="action-icon make">
			                        <div className="outer-circle">
			                            <div className="inner-circle"><img src={addIcon} alt="Add icon" /></div>
			                        </div>
				                    <h3>MAKE TACTICS</h3>
			                    </div>
			                    <div className="action-text">
			                    	<span className="dash"></span>
									<p>With an easy to use editor you can quickly create your own tactics.</p>
									<p>The responsive editor looks great on any device.</p>
			                    </div>
			                </div>


			                <div className="icon-box">
			                    <div className="action-icon save">
			                        <div className="outer-circle">
			                            <div className="inner-circle"><img src={heartIcon} alt="Heart icon" /></div>
			                        </div>
				                    <h3>SAVE TACTICS</h3>
			                    </div>
			                    <div className="action-text">
			                    	<span className="dash"></span>
									<p>Save and watch your tactics come alive in a smooth animation.</p>
			                    </div>
			                </div>
			            </div>
					</div>
	        	</section>

	        	<section className="teams-testimonials">
					<div className="container">
						<h2>How do teams rate Ftactics?</h2>
						<img id="los-tigres-logo" src={losTigresLogo} alt="Los Tigres football team logo" />
						<div className="stars">
							<img src={star} alt="Rating star" />
							<img src={star} alt="Rating star" />
							<img src={star} alt="Rating star" />
							<img src={star} alt="Rating star" />
							<img src={star} alt="Rating star" />
						</div>
						<p className="testimonial-text">After finishing last 3 years in a row, Ftactics helped us to step up our game and finish the season 2 places higher.</p>
						<span className="team-name">FC Los Tigres</span>
					</div>
	        	</section>

	        	<footer className="footer">
					<div className="container">
						<FooterLogo fill="rgba(255,255,255,0.5)" alt="Ftactics logo" className="FooterLogo" />
						<div className="footer-links">
							<a href="https://app.ftactics.com/register">Sign up</a>
							<a href="mailto:info@ftactics.com">Contact</a>
						</div>
						<span>© 2019 - Ftactics - Developed by Jochen Meyvisch</span>
					</div>
	        	</footer>
			</div>
        )
    }

    componentDidMount() {
    	setInterval(() => checkMedia(), 2000);
    	slides = document.getElementsByClassName("make-tactic-img");
    }
}

const mq = window.matchMedia( "(max-width: 767px)" );

function checkMedia() {
	
	if (mq.matches) {
		showSlides();
	}
	else {
		for (var i = 0; i < slides.length; i++) {
			slides[i].style.display = "block";  
		}
	}
};

var slideIndex = 0;

function showSlides() {
	var i;
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}
	slideIndex++;
	if (slideIndex > slides.length) {slideIndex = 1}    
	slides[slideIndex-1].style.display = "block";  
};

export default Homepage;