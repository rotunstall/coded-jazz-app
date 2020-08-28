import React from "react";
import "./RtHandFingering.css";

function RtHandFingering(props) {
	const datatone = `${("0" + props.compDataRhfId).slice(-2)}`;
	const elemid = `rhfinger${datatone}`;
	const classes = `rt-hand-fingering`;
	const elemtext = `R5`;
	const compKey = `rhfinger${datatone}`;
	return (
		<>
			<span id={elemid} className={classes} key={compKey}>
				{elemtext}
			</span>
		</>
	);
}

export default RtHandFingering;
