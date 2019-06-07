import React, { Component }  from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../_pages/Homepage';
import PageNotFound from '../_pages/PageNotFound';

class App extends Component {
	render() {
		return (
		    <div className="App">
		      <Switch>
			      <Route exact path='/' component={ Homepage }/>
			      <Route component={PageNotFound} />
		      </Switch>
		    </div>
  		);
	}
}

export default App;
