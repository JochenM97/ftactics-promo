import React from 'react';

const Keyframes = (props) => {
    return (
        <div className="keyframe-editor">
			<span id="remove-frame"></span>
			<div id="keyframes">
				<span id="frame_layer_1" className="frame selected-frame">1</span>
			</div>
			<span id="add-frame"></span>
		</div>
    );
}

export default Keyframes