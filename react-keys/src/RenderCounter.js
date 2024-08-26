import { Component } from "react";

class RenderCounter extends Component {
	props = {};
	count = 0;

	constructor(props) {
		super(props);
		this.props = props || {};
		this.count = 0;
	}

	componentDidMount() {
		this.props.increaseInstanceCount();
	}

	componentDidUnmount() {
		this.props.decreaseInstanceCount();
	}

	render() {
		this.count++;
		return (
			<div>
				<h2>{this.props?.loggedIn ? "Logged In" : "Logged Out"}</h2>
				<label>Renders: {this.count}</label>
			</div>
		);
	}
}

export default RenderCounter;
