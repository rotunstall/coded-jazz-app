import React from "react";
import KeyBoard from "./components/keyboard/KeyBoard";
import { longKeyboard } from "./data/mbtsData2";
import "./App.css";

function App() {
	return (
		<>
			<KeyBoard compDataKb={longKeyboard} />
		</>
	);
}

export default App;
