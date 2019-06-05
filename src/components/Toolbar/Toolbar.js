import React from 'react';

const Toolbar = (props) => {
    return (
        <div id="toolbar">
			<span id="blue-player"><img src="images/add.svg" alt="add-button" /><span className="amount" id="available-blue-players">5</span></span>
			<span id="ball"><img src="images/add.svg" alt="add-button" /><span className="amount" id="available-footballs">1</span></span>
			<span id="red-player"><img src="images/add.svg" alt="add-button" /><span className="amount" id="available-red-players">5</span></span>
			<span id="delete"></span>
		</div>
    );
}

export default Toolbar