import React, { Component } from 'react';
import Table from "./Table";
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			people: [],
			change: true
		};
		this.addPerson = this.addPerson.bind(this);
	}
	addPerson(name) {
		let id = (Math.floor(Math.random() * 1000) + 1)
		this.setState(prevState => ({
			people: [...prevState.people, { name, id }]
		}));
	}
	deletePerson(index) {
		
		return () => {
			this.setState(prevState => ({
				people: prevState.people.filter(person => person.id !== index.id)
			}));
		};
	}
	editPerson(index) {
		return () => {
			let get = prompt("changing data", index.name)
			index.id ? index.name = get : index.name = index
			this.setState({
				change: false
			}
			)
		}
	}
	render() {
		return (
			<div className="App">
				<Table addPerson={this.addPerson} />
				<table border='1px' cellPadding='20%' padding='20px'>
					<thead>
						<tr>
							<th>s.no</th>
							<th>Name</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{this.state.people.map((person) => {
							return (
								<tr key={person}>
									<th>{person.id}</th>
									<td>{person.name}</td>
									<td>
										<button onClick={this.deletePerson(person)}>
											Remove
                    </button>
										<button onClick={this.editPerson(person)}>
											edit
                    </button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}
}
export default App;
