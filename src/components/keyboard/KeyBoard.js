import React from "react";
import OctaveGroup from "./OctaveGroup";
import "./KeyBoard.css";

function KeyBoard(props) {
	const classes = `keyboard long-keyboard`;
	const keyName = `keybrd001`;

	return (
		<>
			<section className={classes} key={keyName}>
				{props.compDataKb.map(({ notes, octaveIndex }) => (
					<OctaveGroup
						compDataOgNotes={notes}
						compDataOgOctaveIndex={octaveIndex}
					/>
				))}
			</section>
		</>
	);
}

export default KeyBoard;

// 			const classes = `keyboard long-keyboard`;
// 			const keyName = `keybrd001`;

// return (
// 			<>
// 			<section className={classes} key={keyName}>

// 				{compDataKb.map(({ octaveIndex, notes }) => {
// 			<OctaveGroup compDataKg={(octaveIndex, notes)} />
// 		})}

// 			</section>
// 			</>

// );

// {
// 	compDataKb.map(({ compDataOg }) => {

// 		return (
// 			<section className='key-board' key='keybrd001'>
// 				<OctaveGroup compDataOg={compDataOg} />
// 			</section>
// 		);
// 	});
// }
