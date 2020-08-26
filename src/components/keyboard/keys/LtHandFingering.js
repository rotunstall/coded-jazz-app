import React from "react";
import "./LtHandFingering.css";

function LtHandFingering(props) {
	const datatone = `${("0" + props.compDataLhfId).slice(-2)}`;
	const elemid = `lhfinger${datatone}`;
	const classes = `lt-hand-fingering`;
	const elemtext = `L3`;
	const compKey = `lhfinger${datatone}`;
	return (
		<>
			<span id={elemid} className={classes} key={compKey}>
				{elemtext}
			</span>
		</>
	);
}

export default LtHandFingering;
