import { useState } from "react";
import RenderCounter from "./RenderCounter";
import "./App.css";

let instanceCount = 0;

function App() {
	const [loggedIn, setLoggedIn] = useState(false);

	return (
		<div className="App">
			{loggedIn ? (
				<RenderCounter
					loggedIn={true}
					increaseInstanceCount={() => instanceCount++}
					decreaseInstanceCount={() => instanceCount--}
					key="loggedIn"
				>
					I am logged in!
				</RenderCounter>
			) : (
				<RenderCounter
					loggedIn={false}
					increaseInstanceCount={() => instanceCount++}
					decreaseInstanceCount={() => instanceCount--}
					key="loggedOut"
				>
					I am logged out!
				</RenderCounter>
			)}
			<label>InstanceCount: {instanceCount}</label>
			<br />
			<button onClick={() => setLoggedIn(!loggedIn)}>
				{loggedIn ? "Logout" : "Login"}
			</button>
		</div>
	);
}

export default App;
