import React from 'react';
import { Redirect } from 'react-router-dom'

class PageNotFound extends React.Component {
    render = () => {
    	return (
        	<Redirect to='/' />
        )
    }
}

export default PageNotFound;