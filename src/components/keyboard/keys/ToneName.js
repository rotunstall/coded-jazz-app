import React from "react";
import "./ToneName.css";

function ToneName(props) {
	const datatone = `${("0" + props.compDataTsId).slice(-2)}`;
	const elemid = `${datatone}${props.compDataTsOctave}tname`;
	const classes = `tone-name`;
	const elemtext = `${props.compDataTsName}`;
	const compKey = `tonename${datatone}`;
	return (
		<>
			<span id={elemid} className={classes} key={compKey}>
				{elemtext}
			</span>
		</>
	);
}

export default ToneName;
