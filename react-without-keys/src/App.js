import { useState } from "react";
import RenderCounter from "./RenderCounter";
import "./App.css";

function App() {
	const [loggedIn, setLoggedIn] = useState(false);

	return (
		<div className="App">
			{loggedIn ? (
				<RenderCounter loggedIn={true}>I am logged in!</RenderCounter>
			) : (
				<RenderCounter loggedIn={false}>I am logged out!</RenderCounter>
			)}
			<button onClick={() => setLoggedIn(!loggedIn)}>
				{loggedIn ? "Logout" : "Login"}
			</button>
		</div>
	);
}

export default App;
