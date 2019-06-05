import React from 'react';
import TacticNavigation from '../TacticNavigation/TacticNavigation';
import Keyframes from '../Keyframes/Keyframes';
import Toolbar from '../Toolbar/Toolbar';
import Konva from 'konva';
import { Stage, Layer, Rect, Text, Group } from 'react-konva';

class MakeTactic extends React.Component {

    constructor (props) {
    	super(props);
		let stageWidth = 100;
		let stageHeight = 150;
    }
    
    render = () => {



    	return (
        	<div className="make-tactic">
	        	<TacticNavigation />
	        	<Keyframes />
				<div id="stage-parent">
					<Stage id="container" width={100} height={150} />
				</div>
				<Toolbar />
			</div>
        )
    }

    componentDidMount = () => {
		
    }
}

export default MakeTactic;