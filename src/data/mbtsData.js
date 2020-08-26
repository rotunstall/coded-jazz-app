const singleTones = [
	{
		name: "A",
		keyName: "A",
		octave: 0,
		sharpName: "G&#119082;",
		flatName: "B&#119083;",
		keyColor: "wh-key",
		id: 00,
		audioId: "a0-sound",
		sound: "./assets/soundSamples/singleTones/A0-rt.mp3"
	},
	{
		name: "B&#9837;",
		keyName: "BFlat",
		octave: 0,
		sharpName: "A&#9839;",
		flatName: "B&#9837;",
		keyColor: "bk-key",
		id: 01,
		audioId: "b♭0-sound",
		sound: "./assets/soundSamples/singleTones/B-0-rt.mp3"
	},
	{
		name: "B",
		keyName: "B",
		octave: 0,
		sharpName: "A&#119082;",
		flatName: "C&#9837;",
		keyColor: "wh-key",
		id: 02,
		audioId: "b0-sound",
		sound: "./assets/soundSamples/singleTones/B0-rt.mp3"
	},
	{
		name: "C",
		keyName: "C",
		octave: 1,
		sharpName: "B&#9839;",
		flatName: "D&#119083;",
		keyColor: "wh-key",
		id: 03,
		audioId: "c1-sound",
		sound: "./assets/soundSamples/singleTones/C1-rt.mp3"
	},
	{
		name: "D&#9837;",
		keyName: "DFlat",
		octave: 1,
		sharpName: "C&#9839; ",
		flatName: "D&#9837;",
		keyColor: "bk-key",
		id: 04,
		audioId: "d♭1-sound",
		sound: "./assets/soundSamples/singleTones/D-1-rt.mp3"
	},
	{
		name: "D",
		keyName: "D",
		octave: 1,
		sharpName: "C&#119082;",
		flatName: "E&#119083;",
		keyColor: "wh-key",
		id: 05,
		audioId: "d1-sound",
		sound: "./assets/soundSamples/singleTones/D1-rt.mp3"
	},
	{
		name: "E&#9837;",
		keyName: "EFlat",
		octave: 1,
		sharpName: "D&#9839;",
		flatName: "E&#9837;",
		keyColor: "bk-key",
		id: 06,
		audioId: "e♭1-sound",
		sound: "./assets/soundSamples/singleTones/E-1-rt.mp3"
	},
	{
		name: "E",
		keyName: "E",
		octave: 1,
		sharpName: "D&#119082;",
		flatName: "F&#9837;",
		keyColor: "wh-key",
		id: 07,
		audioId: "e1-sound",
		sound: "./assets/soundSamples/singleTones/E1-rt.mp3"
	},
	{
		name: "F",
		keyName: "F",
		octave: 1,
		sharpName: "E&#9839;",
		flatName: "G&#119082;",
		keyColor: "wh-key",
		id: 08,
		audioId: "f1-sound",
		sound: "./assets/soundSamples/singleTones/F1-rt.mp3"
	},
	{
		name: "G&#9837;",
		keyName: "GFlat",
		octave: 1,
		sharpName: "F&#9839;",
		flatName: "G&#9837;",
		keyColor: "bk-key",
		id: 09,
		audioId: "g♭1-sound",
		sound: "./assets/soundSamples/singleTones/G-1-rt.mp3"
	},
	{
		name: "G",
		keyName: "G",
		octave: 1,
		sharpName: "F&#119082;",
		flatName: "A&#119083;",
		keyColor: "wh-key",
		id: 10,
		audioId: "g1-sound",
		sound: "./assets/soundSamples/singleTones/G1-rt.mp3"
	},
	{
		name: "A&#9837;",
		keyName: "AFlat",
		octave: 1,
		sharpName: "G&#9839;",
		flatName: "B&#119083;",
		keyColor: "bk-key",
		id: 11,
		audioId: "a♭1-sound",
		sound: "./assets/soundSamples/singleTones/A-1-rt.mp3"
	},
	{
		name: "A",
		keyName: "A",
		octave: 1,
		sharpName: "G&#119082;",
		flatName: "B&#119083;",
		keyColor: "wh-key",
		id: 12,
		audioId: "a1-sound",
		sound: "./assets/soundSamples/singleTones/A1-rt.mp3"
	},
	{
		name: "B&#9837;",
		keyName: "BFlat",
		octave: 1,
		sharpName: "A&#9839;",
		flatName: "C&#119083;",
		keyColor: "bk-key",
		id: 13,
		audioId: "b♭1-sound",
		sound: "./assets/soundSamples/singleTones/B-1-rt.mp3"
	},
	{
		name: "B",
		keyName: "B",
		octave: 1,
		sharpName: "A&#119082;",
		flatName: "C&#9837;",
		keyColor: "wh-key",
		id: 14,
		audioId: "b1-sound",
		sound: "./assets/soundSamples/singleTones/B1-rt.mp3"
	},
	{
		name: "C",
		keyName: "C",
		octave: 2,
		sharpName: "B&#9839;",
		flatName: "D&#119083;",
		keyColor: "wh-key",
		id: 15,
		audioId: "c2-sound",
		sound: "./assets/soundSamples/singleTones/C2-rt.mp3"
	},
	{
		name: "D&#9837;",
		keyName: "DFlat",
		octave: 2,
		sharpName: "C&#9839; ",
		flatName: "D&#9837;",
		keyColor: "bk-key",
		id: 16,
		audioId: "d♭2-sound",
		sound: "./assets/soundSamples/singleTones/D-2-rt.mp3"
	},
	{
		name: "D",
		keyName: "D",
		octave: 2,
		sharpName: "C&#119082;",
		flatName: "E&#119083;",
		keyColor: "wh-key",
		id: 17,
		audioId: "d2-sound",
		sound: "./assets/soundSamples/singleTones/D2-rt.mp3"
	},
	{
		name: "E&#9837;",
		keyName: "EFlat",
		octave: 2,
		sharpName: "D&#9839;",
		flatName: "E&#9837;",
		keyColor: "bk-key",
		id: 18,
		audioId: "e♭2-sound",
		sound: "./assets/soundSamples/singleTones/E-2-rt.mp3"
	},
	{
		name: "E",
		keyName: "E",
		octave: 2,
		sharpName: "D&#119082;",
		flatName: "F&#9837;",
		keyColor: "wh-key",
		id: 19,
		audioId: "e2-sound",
		sound: "./assets/soundSamples/singleTones/E2-rt.mp3"
	},
	{
		name: "F",
		keyName: "F",
		octave: 2,
		sharpName: "E&#9839;",
		flatName: "G&#119082;",
		keyColor: "wh-key",
		id: 20,
		audioId: "f2-sound",
		sound: "./assets/soundSamples/singleTones/F2-rt.mp3"
	},
	{
		name: "G&#9837;",
		keyName: "GFlat",
		octave: 2,
		sharpName: "F&#9839;",
		flatName: "G&#9837;",
		keyColor: "bk-key",
		id: 21,
		audioId: "g♭2-sound",
		sound: "./assets/soundSamples/singleTones/G-2-rt.mp3"
	},
	{
		name: "G",
		keyName: "G",
		octave: 2,
		sharpName: "F&#119082;",
		flatName: "A&#119083;",
		keyColor: "wh-key",
		id: 22,
		audioId: "g2-sound",
		sound: "./assets/soundSamples/singleTones/G2-rt.mp3"
	},
	{
		name: "A&#9837;",
		keyName: "AFlat",
		octave: 2,
		sharpName: "G&#9839;",
		flatName: "B&#119083;",
		keyColor: "bk-key",
		id: 23,
		audioId: "a♭2-sound",
		sound: "./assets/soundSamples/singleTones/A-2-rt.mp3"
	},
	{
		name: "A",
		keyName: "A",
		octave: 2,
		sharpName: "G&#119082;",
		flatName: "B&#119083;",
		keyColor: "wh-key",
		id: 24,
		audioId: "a2-sound",
		sound: "./assets/soundSamples/singleTones/A2-rt.mp3"
	},
	{
		name: "B&#9837;",
		keyName: "BFlat",
		octave: 2,
		sharpName: "A&#9839;",
		flatName: "C&#119083;",
		keyColor: "bk-key",
		id: 25,
		audioId: "b♭2-sound",
		sound: "./assets/soundSamples/singleTones/B-2-rt.mp3"
	},
	{
		name: "B",
		keyName: "B",
		octave: 2,
		sharpName: "A&#119082;",
		flatName: "C&#9837;",
		keyColor: "wh-key",
		id: 26,
		audioId: "b2-sound",
		sound: "./assets/soundSamples/singleTones/B2-rt.mp3"
	},
	{
		name: "C",
		keyName: "C",
		octave: 3,
		sharpName: "B&#9839;",
		flatName: "D&#119083;",
		keyColor: "wh-key",
		id: 27,
		audioId: "c3-sound",
		sound: "./assets/soundSamples/singleTones/C3-rt.mp3"
	},
	{
		name: "D&#9837;",
		keyName: "DFlat",
		octave: 3,
		sharpName: "C&#9839; ",
		flatName: "D&#9837;",
		keyColor: "bk-key",
		id: 28,
		audioId: "d♭3-sound",
		sound: "./assets/soundSamples/singleTones/D-3-rt.mp3"
	},
	{
		name: "D",
		keyName: "D",
		octave: 3,
		sharpName: "C&#119082;",
		flatName: "E&#119083;",
		keyColor: "wh-key",
		id: 29,
		audioId: "d3-sound",
		sound: "./assets/soundSamples/singleTones/D3-rt.mp3"
	},
	{
		name: "E&#9837;",
		keyName: "EFlat",
		octave: 3,
		sharpName: "D&#9839;",
		flatName: "E&#9837;",
		keyColor: "bk-key",
		id: 30,
		audioId: "e♭3-sound",
		sound: "./assets/soundSamples/singleTones/E-3-rt.mp3"
	},
	{
		name: "E",
		keyName: "E",
		octave: 3,
		sharpName: "D&#119082;",
		flatName: "F&#9837;",
		keyColor: "wh-key",
		id: 31,
		audioId: "e3-sound",
		sound: "./assets/soundSamples/singleTones/E3-rt.mp3"
	},
	{
		name: "F",
		keyName: "F",
		octave: 3,
		sharpName: "E&#9839;",
		flatName: "G&#119082;",
		keyColor: "wh-key",
		id: 32,
		audioId: "f3-sound",
		sound: "./assets/soundSamples/singleTones/F3-rt.mp3"
	},
	{
		name: "G&#9837;",
		keyName: "GFlat",
		octave: 3,
		sharpName: "F&#9839;",
		flatName: "G&#9837;",
		keyColor: "bk-key",
		id: 33,
		audioId: "g♭3-sound",
		sound: "./assets/soundSamples/singleTones/G-3-rt.mp3"
	},
	{
		name: "G",
		keyName: "G",
		octave: 3,
		sharpName: "F&#119082;",
		flatName: "A&#119083;",
		keyColor: "wh-key",
		id: 34,
		audioId: "g3-sound",
		sound: "./assets/soundSamples/singleTones/G3-rt.mp3"
	},
	{
		name: "A&#9837;",
		keyName: "AFlat",
		octave: 3,
		sharpName: "G&#9839;",
		flatName: "B&#119083;",
		keyColor: "bk-key",
		id: 35,
		audioId: "a♭3-sound",
		sound: "./assets/soundSamples/singleTones/A-3-rt.mp3"
	},
	{
		name: "A",
		keyName: "A",
		octave: 3,
		sharpName: "G&#119082;",
		flatName: "B&#119083;",
		keyColor: "wh-key",
		id: 36,
		audioId: "a3-sound",
		sound: "./assets/soundSamples/singleTones/A3-rt.mp3"
	},
	{
		name: "B&#9837;",
		keyName: "BFlat",
		octave: 3,
		sharpName: "A&#9839;",
		flatName: "C&#119083;",
		keyColor: "bk-key",
		id: 37,
		audioId: "b♭3-sound",
		sound: "./assets/soundSamples/singleTones/B-3-rt.mp3"
	},
	{
		name: "B",
		keyName: "B",
		octave: 3,
		sharpName: "A&#119082;",
		flatName: "C&#9837;",
		keyColor: "wh-key",
		id: 38,
		audioId: "b3-sound",
		sound: "./assets/soundSamples/singleTones/B3-rt.mp3"
	},
	{
		name: "C",
		keyName: "C",
		octave: 4,
		sharpName: "B&#9839;",
		flatName: "D&#119083;",
		keyColor: "wh-key",
		id: 39,
		audioId: "c4-sound",
		sound: "./assets/soundSamples/singleTones/C4-rt.mp3"
	},
	{
		name: "D&#9837;",
		keyName: "DFlat",
		octave: 4,
		sharpName: "C&#9839; ",
		flatName: "D&#9837;",
		keyColor: "bk-key",
		id: 40,
		audioId: "d♭4-sound",
		sound: "./assets/soundSamples/singleTones/D-4-rt.mp3"
	},
	{
		name: "D",
		keyName: "D",
		octave: 4,
		sharpName: "C&#119082;",
		flatName: "E&#119083;",
		keyColor: "wh-key",
		id: 41,
		audioId: "d4-sound",
		sound: "./assets/soundSamples/singleTones/D4-rt.mp3"
	},
	{
		name: "E&#9837;",
		keyName: "EFlat",
		octave: 4,
		sharpName: "D&#9839;",
		flatName: "E&#9837;",
		keyColor: "bk-key",
		id: 42,
		audioId: "e♭4-sound",
		sound: "./assets/soundSamples/singleTones/E-4-rt.mp3"
	},
	{
		name: "E",
		keyName: "E",
		octave: 4,
		sharpName: "D&#119082;",
		flatName: "F&#9837;",
		keyColor: "wh-key",
		id: 43,
		audioId: "e4-sound",
		sound: "./assets/soundSamples/singleTones/E4-rt.mp3"
	},
	{
		name: "F",
		keyName: "F",
		octave: 4,
		sharpName: "E&#9839;",
		flatName: "G&#119082;",
		keyColor: "wh-key",
		id: 44,
		audioId: "f4-sound",
		sound: "./assets/soundSamples/singleTones/F4-rt.mp3"
	},
	{
		name: "G&#9837;",
		keyName: "GFlat",
		octave: 4,
		sharpName: "F&#9839;",
		flatName: "G&#9837;",
		keyColor: "bk-key",
		id: 45,
		audioId: "g♭4-sound",
		sound: "./assets/soundSamples/singleTones/G-4-rt.mp3"
	},
	{
		name: "G",
		keyName: "G",
		octave: 4,
		sharpName: "F&#119082;",
		flatName: "A&#119083;",
		keyColor: "wh-key",
		id: 46,
		audioId: "g4-sound",
		sound: "./assets/soundSamples/singleTones/G4-rt.mp3"
	},
	{
		name: "A&#9837;",
		keyName: "AFlat",
		octave: 4,
		sharpName: "G&#9839;",
		flatName: "B&#119083;",
		keyColor: "bk-key",
		id: 47,
		audioId: "a♭4-sound",
		sound: "./assets/soundSamples/singleTones/A-4-rt.mp3"
	},
	{
		name: "A",
		keyName: "A",
		octave: 4,
		sharpName: "G&#119082;",
		flatName: "B&#119083;",
		keyColor: "wh-key",
		id: 48,
		audioId: "a4-sound",
		sound: "./assets/soundSamples/singleTones/A4-rt.mp3"
	},
	{
		name: "B&#9837;",
		keyName: "BFlat",
		octave: 4,
		sharpName: "A&#9839;",
		flatName: "C&#119083;",
		keyColor: "bk-key",
		id: 49,
		audioId: "b♭4-sound",
		sound: "./assets/soundSamples/singleTones/B-4-rt.mp3"
	},
	{
		name: "B",
		keyName: "B",
		octave: 4,
		sharpName: "A&#119082;",
		flatName: "C&#9837;",
		keyColor: "wh-key",
		id: 50,
		audioId: "b4-sound",
		sound: "./assets/soundSamples/singleTones/B4-rt.mp3"
	},
	{
		name: "C",
		keyName: "C",
		octave: 5,
		sharpName: "B&#9839;",
		flatName: "D&#119083;",
		keyColor: "wh-key",
		id: 51,
		audioId: "c5-sound",
		sound: "./assets/soundSamples/singleTones/C5-rt.mp3"
	},
	{
		name: "D&#9837;",
		keyName: "DFlat",
		octave: 5,
		sharpName: "C&#9839; ",
		flatName: "D&#9837;",
		keyColor: "bk-key",
		id: 52,
		audioId: "d♭5-sound",
		sound: "./assets/soundSamples/singleTones/D-5-rt.mp3"
	},
	{
		name: "D",
		keyName: "D",
		octave: 5,
		sharpName: "C&#119082;",
		flatName: "E&#119083;",
		keyColor: "wh-key",
		id: 53,
		audioId: "d5-sound",
		sound: "./assets/soundSamples/singleTones/D5-rt.mp3"
	},
	{
		name: "E&#9837;",
		keyName: "EFlat",
		octave: 5,
		sharpName: "D&#9839;",
		flatName: "E&#9837;",
		keyColor: "bk-key",
		id: 54,
		audioId: "e♭5-sound",
		sound: "./assets/soundSamples/singleTones/E-5-rt.mp3"
	},
	{
		name: "E",
		keyName: "E",
		octave: 5,
		sharpName: "D&#119082;",
		flatName: "F&#9837;",
		keyColor: "wh-key",
		id: 55,
		audioId: "e5-sound",
		sound: "./assets/soundSamples/singleTones/E5-rt.mp3"
	},
	{
		name: "F",
		keyName: "F",
		octave: 5,
		sharpName: "E&#9839;",
		flatName: "G&#119082;",
		keyColor: "wh-key",
		id: 56,
		audioId: "f5-sound",
		sound: "./assets/soundSamples/singleTones/F5-rt.mp3"
	},
	{
		name: "G&#9837;",
		keyName: "GFlat",
		octave: 5,
		sharpName: "F&#9839;",
		flatName: "G&#9837;",
		keyColor: "bk-key",
		id: 57,
		audioId: "g♭5-sound",
		sound: "./assets/soundSamples/singleTones/G-5-rt.mp3"
	},
	{
		name: "G",
		keyName: "G",
		octave: 5,
		sharpName: "F&#119082;",
		flatName: "A&#119083;",
		keyColor: "wh-key",
		id: 58,
		audioId: "g5-sound",
		sound: "./assets/soundSamples/singleTones/G5-rt.mp3"
	},
	{
		name: "A&#9837;",
		keyName: "AFlat",
		octave: 5,
		sharpName: "G&#9839;",
		flatName: "B&#119083;",
		keyColor: "bk-key",
		id: 59,
		audioId: "a♭5-sound",
		sound: "./assets/soundSamples/singleTones/A-5-rt.mp3"
	},
	{
		name: "A",
		keyName: "A",
		octave: 5,
		sharpName: "G&#119082;",
		flatName: "B&#119083;",
		keyColor: "wh-key",
		id: 60,
		audioId: "a5-sound",
		sound: "./assets/soundSamples/singleTones/A5-rt.mp3"
	},
	{
		name: "B&#9837;",
		keyName: "BFlat",
		octave: 5,
		sharpName: "A&#9839;",
		flatName: "C&#119083;",
		keyColor: "bk-key",
		id: 61,
		audioId: "b♭5-sound",
		sound: "./assets/soundSamples/singleTones/B-5-rt.mp3"
	},
	{
		name: "B",
		keyName: "B",
		octave: 5,
		sharpName: "A&#119082;",
		flatName: "C&#9837;",
		keyColor: "wh-key",
		id: 62,
		audioId: "b5-sound",
		sound: "./assets/soundSamples/singleTones/B5-rt.mp3"
	},
	{
		name: "C",
		keyName: "C",
		octave: 6,
		sharpName: "B&#9839;",
		flatName: "D&#119083;",
		keyColor: "wh-key",
		id: 63,
		audioId: "c6-sound",
		sound: "./assets/soundSamples/singleTones/C6-rt.mp3"
	},
	{
		name: "D&#9837;",
		keyName: "DFlat",
		octave: 6,
		sharpName: "C&#9839; ",
		flatName: "D&#9837;",
		keyColor: "bk-key",
		id: 64,
		audioId: "d♭6-sound",
		sound: "./assets/soundSamples/singleTones/D-6-rt.mp3"
	},
	{
		name: "D",
		keyName: "D",
		octave: 6,
		sharpName: "C&#119082;",
		flatName: "E&#119083;",
		keyColor: "wh-key",
		id: 65,
		audioId: "d6-sound",
		sound: "./assets/soundSamples/singleTones/D6-rt.mp3"
	},
	{
		name: "E&#9837;",
		keyName: "EFlat",
		octave: 6,
		sharpName: "D&#9839;",
		flatName: "E&#9837;",
		keyColor: "bk-key",
		id: 66,
		audioId: "e♭6-sound",
		sound: "./assets/soundSamples/singleTones/E-6-rt.mp3"
	},
	{
		name: "E",
		keyName: "E",
		octave: 6,
		sharpName: "D&#119082;",
		flatName: "F&#9837;",
		keyColor: "wh-key",
		id: 67,
		audioId: "e6-sound",
		sound: "./assets/soundSamples/singleTones/E6-rt.mp3"
	},
	{
		name: "F",
		keyName: "F",
		octave: 6,
		sharpName: "E&#9839;",
		flatName: "G&#119082;",
		keyColor: "wh-key",
		id: 68,
		audioId: "f6-sound",
		sound: "./assets/soundSamples/singleTones/F6-rt.mp3"
	},
	{
		name: "G&#9837;",
		keyName: "GFlat",
		octave: 6,
		sharpName: "F&#9839;",
		flatName: "G&#9837;",
		keyColor: "bk-key",
		id: 69,
		audioId: "g♭6-sound",
		sound: "./assets/soundSamples/singleTones/G-6-rt.mp3"
	},
	{
		name: "G",
		keyName: "G",
		octave: 6,
		sharpName: "F&#119082;",
		flatName: "A&#119083;",
		keyColor: "wh-key",
		id: 70,
		audioId: "g6-sound",
		sound: "./assets/soundSamples/singleTones/G6-rt.mp3"
	},
	{
		name: "A&#9837;",
		keyName: "AFlat",
		octave: 6,
		sharpName: "G&#9839;",
		flatName: "B&#119083;",
		keyColor: "bk-key",
		id: 71,
		audioId: "a♭6-sound",
		sound: "./assets/soundSamples/singleTones/A-6-rt.mp3"
	},
	{
		name: "A",
		keyName: "A",
		octave: 6,
		sharpName: "G&#119082;",
		flatName: "B&#119083;",
		keyColor: "wh-key",
		id: 72,
		audioId: "a6-sound",
		sound: "./assets/soundSamples/singleTones/A6-rt.mp3"
	},
	{
		name: "B&#9837;",
		keyName: "BFlat",
		octave: 6,
		sharpName: "A&#9839;",
		flatName: "C&#119083;",
		keyColor: "bk-key",
		id: 73,
		audioId: "b♭6-sound",
		sound: "./assets/soundSamples/singleTones/B-6-rt.mp3"
	},
	{
		name: "B",
		keyName: "B",
		octave: 6,
		sharpName: "A&#119082;",
		flatName: "C&#9837;",
		keyColor: "wh-key",
		id: 74,
		audioId: "b6-sound",
		sound: "./assets/soundSamples/singleTones/B6-rt.mp3"
	},
	{
		name: "C",
		keyName: "C",
		octave: 7,
		sharpName: "B&#9839;",
		flatName: "D&#119083;",
		keyColor: "wh-key",
		id: 75,
		audioId: "c7-sound",
		sound: "./assets/soundSamples/singleTones/C7-rt.mp3"
	},
	{
		name: "D&#9837;",
		keyName: "DFlat",
		octave: 7,
		sharpName: "C&#9839; ",
		flatName: "D&#9837;",
		keyColor: "bk-key",
		id: 76,
		audioId: "d♭7-sound",
		sound: "./assets/soundSamples/singleTones/D-7-rt.mp3"
	},
	{
		name: "D",
		keyName: "D",
		octave: 7,
		sharpName: "C&#119082;",
		flatName: "E&#119083;",
		keyColor: "wh-key",
		id: 77,
		audioId: "d7-sound",
		sound: "./assets/soundSamples/singleTones/D7-rt.mp3"
	},
	{
		name: "E&#9837;",
		keyName: "EFlat",
		octave: 7,
		sharpName: "D&#9839;",
		flatName: "E&#9837;",
		keyColor: "bk-key",
		id: 78,
		audioId: "e♭7-sound",
		sound: "./assets/soundSamples/singleTones/E-7-rt.mp3"
	},
	{
		name: "E",
		keyName: "E",
		octave: 7,
		sharpName: "D&#119082;",
		flatName: "F&#9837;",
		keyColor: "wh-key",
		id: 79,
		audioId: "e7-sound",
		sound: "./assets/soundSamples/singleTones/E7-rt.mp3"
	},
	{
		name: "F",
		keyName: "F",
		octave: 7,
		sharpName: "E&#9839;",
		flatName: "G&#119082;",
		keyColor: "wh-key",
		id: 80,
		audioId: "f7-sound",
		sound: "./assets/soundSamples/singleTones/F7-rt.mp3"
	},
	{
		name: "G&#9837;",
		keyName: "GFlat",
		octave: 7,
		sharpName: "F&#9839;",
		flatName: "G&#9837;",
		keyColor: "bk-key",
		id: 81,
		audioId: "g♭7-sound",
		sound: "./assets/soundSamples/singleTones/G-7-rt.mp3"
	},
	{
		name: "G",
		keyName: "G",
		octave: 7,
		sharpName: "F&#119082;",
		flatName: "A&#119083;",
		keyColor: "wh-key",
		id: 82,
		audioId: "g7-sound",
		sound: "./assets/soundSamples/singleTones/G7-rt.mp3"
	},
	{
		name: "A&#9837;",
		keyName: "AFlat",
		octave: 7,
		sharpName: "G&#9839;",
		flatName: "B&#119083;",
		keyColor: "bk-key",
		id: 83,
		audioId: "a♭7-sound",
		sound: "./assets/soundSamples/singleTones/A-7-rt.mp3"
	},
	{
		name: "A",
		keyName: "A",
		octave: 7,
		sharpName: "G&#119082;",
		flatName: "B&#119083;",
		keyColor: "wh-key",
		id: 84,
		audioId: "a7-sound",
		sound: "./assets/soundSamples/singleTones/A7-rt.mp3"
	},
	{
		name: "B&#9837;",
		keyName: "BFlat",
		octave: 7,
		sharpName: "A&#9839;",
		flatName: "C&#119083;",
		keyColor: "bk-key",
		id: 85,
		audioId: "b♭7-sound",
		sound: "./assets/soundSamples/singleTones/B-7-rt.mp3"
	},
	{
		name: "B",
		keyName: "B",
		octave: 7,
		sharpName: "A&#119082;",
		flatName: "C&#9837;",
		keyColor: "wh-key",
		id: 86,
		audioId: "b7-sound",
		sound: "./assets/soundSamples/singleTones/B7-rt.mp3"
	},
	{
		name: "C",
		keyName: "C",
		octave: 8,
		sharpName: "B&#9839;",
		flatName: "D&#119083;",
		keyColor: "wh-key",
		id: 87,
		audioId: "c8-sound",
		sound: "./assets/soundSamples/singleTones/C8-rt.mp3"
	}
];

const cGroupArr = ["C", "D&#9837;", "D", "E&#9837;", "E"];

const fGroupArr = ["F", "G&#9837;", "G", "A&#9837;", "A", "B&#9837;", "B"];

export { singleTones, cGroupArr, fGroupArr };
