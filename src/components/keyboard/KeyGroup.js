import React from "react";
import KeyNote from "./keys/KeyNote";
import "./KeyGroup.css";

function KeyGroup(props) {
	const classes = `key-group`;
	const keyName = `keygrp${props.compDataKgOctaveIndex}`;

	return (
		<>
			<section className={classes} key={keyName}>
				{props.compDataKgNotes.map((item) => (
					<KeyNote
						compDataKnAudioId={item.audioId}
						compDataKnFlatName={item.flatName}
						compDataKnId={item.id}
						compDataKnKeyColor={item.keyColor}
						compDataKnKeyNames={item.keyName}
						compDataKnKeyPosition={item.keyPosition}
						compDataKnName={item.name}
						compDataKnOctave={item.octave}
						compDataKnSharpName={item.sharpName}
						compDataKnSound={item.sound}
					/>
				))}
			</section>
		</>
	);
}

export default KeyGroup;
