import React from "react";
import ToneSound from "./ToneSound";
import ToneName from "./ToneName";
import RtHandFingering from "./RtHandFingering";
import LtHandFingering from "./LtHandFingering";
import "./KeyNote.css";

function KeyNote(props) {
	const audioId = props.compDataKnAudioId;
	const flatName = props.compDataKnFlatName;
	const id = props.compDataKnId;
	const keyColor = props.compDataKnKeyColor;
	const keyName = props.compDataKnKeyNames;
	const keyPosition = props.compDataKnKeyPosition;
	const name = props.compDataKnName;
	const octave = props.compDataKnOctave;
	const sharpName = props.compDataKnSharpName;
	const sound = props.compDataKnSound;

	const elemid = `${keyName}${octave}`;
	const classes = `key-note ${keyColor} ${keyPosition}`;
	const datatone = `${("0" + id).slice(-2)}`;
	const onclck = `document.querySelector(#${audioId}).play()`;
	const compKey = `${datatone}-keynote`;

	return (
		<>
			<div
				id={elemid}
				className={classes}
				data-tone-index={datatone}
				key={compKey}
				onClick={onclck}
			>
				<ToneSound
					compDataTsAudioId={audioId}
					compDataTsId={id}
					compDataTsSound={sound}
				/>
				<ToneName
					compDataTsName={name}
					compDataTsId={id}
					compDataTsOctave={octave}
				/>
				<RtHandFingering compDataRhfId={id} />
				<LtHandFingering compDataLhfId={id} />
			</div>
		</>
	);
}

export default KeyNote;
