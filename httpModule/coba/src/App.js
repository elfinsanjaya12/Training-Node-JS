import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

class App extends Component {
	constructor() {
		super();
		this.state = {
			coba: []
		};
	}
	componentDidMount() {
		axios.get("http://localhost:3000/").then(ambilData => {
			console.log(ambilData);
			this.setState({ coba: ambilData.data });
		});
	}
	render() {
		const { coba } = this.state;
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
					<p>{coba.nama}</p>
				</header>
			</div>
		);
	}
}

export default App;
