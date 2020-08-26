import React from "react";
import BracketGroup from "./BracketGroup";
import KeyGroup from "./KeyGroup";
import "./OctaveGroup.css";

function OctaveGroup(props) {
	const classes = `octave-group octave-${props.compDataOgOctaveIndex}`;
	const keyName = `octgrp${props.compDataKgOctaveIndex}`;

	return (
		<>
			<section className={classes} key={keyName}>
				<BracketGroup compDataBgOctaveIndex={props.compDataOgOctaveIndex} />
				<KeyGroup
					compDataKgNotes={props.compDataOgNotes}
					compDataKgOctaveIndex={props.compDataOgOctaveIndex}
				/>
			</section>
		</>
	);
}

export default OctaveGroup;

// return (
// 	<>
// 		{compDataOg.map(({ octaveIndex, notes }) => {
// 			const classes = `octave-group octave-${octaveIndex}`;
// 			const keyName = `octgrp${octaveIndex}`;
// 			return (
// 				<section className={classes} key={keyName}>
// 					<BracketGroup octaveIndex={octaveIndex} />
// 					<KeyGroup compDataKg={(octaveIndex, notes)} />
// 				</section>
// 			);
// 		})}
// 	</>
// );
