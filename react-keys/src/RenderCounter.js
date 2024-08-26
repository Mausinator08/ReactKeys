import { Component } from "react";

let count = 0;

class RenderCounter extends Component {
	props = {};

	constructor(props) {
		super(props);
		this.props = props || {};
		count = 0;
	}

	componentDidMount() {
		this.props.increaseInstanceCount();
	}

	componentDidUnmount() {
		this.props.decreaseInstanceCount();
	}

	render() {
		count++;
		return (
			<div>
				<h2>{this.props?.loggedIn ? "Logged In" : "Logged Out"}</h2>
				<label>Renders: {count}</label>
			</div>
		);
	}
}

export default RenderCounter;
