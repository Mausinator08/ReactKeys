let count = 0;

function RenderCounter(props) {
	count++;
	return (
		<div>
			<h2>{props.loggedIn ? "Logged In" : "Logged Out"}</h2>
			<label>{count}</label>
		</div>
	);
}

export default RenderCounter;
