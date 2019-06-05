import React from 'react';

import logo from '../../assets/images/ftactics-logo.svg';
import applicationImg from '../../assets/images/make-tactic.png';
import searchIcon from '../../assets/images/search.svg';
import addIcon from '../../assets/images/add-white.svg';
import heartIcon from '../../assets/images/heart.svg';

class Homepage extends React.Component {

    render = () => {
    	return (
        	<div className="homepage">
	        	<header className="heading">
	        		<div className="container">
	        			<img id="logo" src={logo} alt="Ftactics logo" />
	        			<h1>Take your Futsall tactics to the next level. For free.</h1>
	        			<p>Ftactics let's you find the right tactics for your team, create your own style of playing or show your selected tactics easily before game time. Let us help you win more!</p>
	        			<a className="button-link" href="https://app.ftactics.com">SIGN UP NOW</a>
	        		</div>
	        	</header>
	        	<section className="features">
					<img id="make-tactic-img" src={applicationImg} alt="Application tactic maker screen" />
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

					</div>
	        	</section>

	        	<footer>

	        	</footer>
			</div>
        )
    }
}

export default Homepage;