import React from "react";
import "./BracketText.css";

function BracketText(props) {
	const classes = `bracket-text br-txt${props.compDataBt}`;
	const keyName = `brkttxt${props.compDataBt}`;
	const elemtext = `octave-${props.compDataBt}`;
	return (
		<>
			<span className={classes} key={keyName}>
				{elemtext}
			</span>
		</>
	);
}

export default BracketText;
