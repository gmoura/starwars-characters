import React from 'react';
import Characters from './Characters';

export default class Index extends React.Component {
	render() {
		return (
			<section className="container">
				<h1 className="header center dark-text">Star Wars Api</h1>
				<div className="row center">
					<h5 className="header col s12 light">All chacarateres</h5>
				</div>

				<Characters />
			</section>
		)
	}
}