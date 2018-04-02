import React, { Component } from 'react';
import Character from './Character';
import ReactPaginate from 'react-paginate';
import SWApi from '../swapi';
import offlineData from '../../offline/characters';

export default class Characters extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			page: 1 
		}
	}

	componentDidMount () {
		this.getAllCharactersFromServer();
	}

	handlePageClick = (data) => {
		this.setState({
			page: data.selected + 1
		}, () => {
			this.getAllCharactersFromServer();
		})
	}

	getAllCharactersFromServer() {
		SWApi
		.getAllCharacters(this.state.page)
		.end((err, res) => {
			if(err) {
				this.setState({
					pageCount: 1,
					data: offlineData.get()
				});				
			} else {
				this.setState({
					pageCount: Math.ceil(res.body.count/10),
					data: res.body.results
				});
			}
		})
	}

	render() {
		return (
			<section className="characters-list">
				<ul className="collection">
					<Character itens={this.state.data}/>
				</ul>

				<ReactPaginate previousLabel={"previous"}
                       nextLabel={"next"}
                       breakLabel={<a href="">...</a>}
                       breakClassName={"break-me"}
											 pageCount={this.state.pageCount}
                       marginPagesDisplayed={2}
                       pageRangeDisplayed={5}
											 pageClassName={"waves-effect"}
                       onPageChange={this.handlePageClick}
                       containerClassName={"pagination center"}
                       activeClassName={"active"} />
			</section>
		)
	}
}