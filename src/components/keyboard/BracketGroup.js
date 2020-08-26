import React from "react";
import BracketText from "./BracketText";
import "./BracketGroup.css";

function BracketGroup(props) {
	const classes = `bracket-group br-g${props.compDataBgOctaveIndex}`;
	const keyName = `brktgrp${props.compDataBgOctaveIndex}`;
	return (
		<>
			<div className={classes} key={keyName}>
				<BracketText compDataBt={props.compDataBgOctaveIndex} />
			</div>
		</>
	);
}

export default BracketGroup;
