import React from 'react';

export default class Character extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		let character = this.props.itens.map((character, index)=> {
			return (<a key ={index} href="#!" className="collection-item">{character.name}</a>)
		});

		return (
			<li>{character}</li>
		);
	}
}