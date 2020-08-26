import React from "react";
import "./ToneSound.css";

function ToneSound(props) {
	const tsId = `${props.compDataTsId}`;
	const elemid = `${props.compDataTsAudioId}`;
	const classes = `tone-sound`;
	const srcPath = `${props.compDataTsSound}`;
	const datatone = `${("0" + tsId).slice(-2)}`;
	const compKey = `tonesnd${datatone}`;

	return (
		<>
			<audio
				id={elemid}
				className={classes}
				src={srcPath}
				key={compKey}
			></audio>
		</>
	);
}

export default ToneSound;
