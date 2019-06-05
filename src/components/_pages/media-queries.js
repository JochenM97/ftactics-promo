import React from 'react';

class Mediaquery extends React.Component {

	render() {
		var interfaceElementsHeight = 180;

		var mqls = [ // list of window.matchMedia() queries
		window.matchMedia("(max-width: 767px)"),
		window.matchMedia("(min-width: 768px)"),
		window.matchMedia("(min-width: 1025px)"),
		]

		function mediaqueryresponse(mql) {
			if(mqls[2].matches)
			{
				interfaceElementsHeight = 260;
			}
			else if(mqls[1].matches)
			{
				interfaceElementsHeight = 240;
			}
			else
			{
				interfaceElementsHeight = 180;
			}
		}

		for (var i=0; i<mqls.length; i++){ // loop through queries
			mediaqueryresponse(mqls[i]) // call handler function explicitly at run time
			mqls[i].addListener(mediaqueryresponse) // call handler function whenever the media query is triggered
		}
	
		return ({});
	}
}

export default Mediaquery