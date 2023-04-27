import { chordsType } from "./types";

export const VERTICAL_OFFSET = 50;
export const HEAD_STOCK_OFFSET = 10;

export const CHORDS_SYNONYMS = {
  Amaj: ["Amaj", "A", "A major"],
  Am: ["Am", "A minor", "Amin"],
  A7: ["A7", "A dominant 7"],
  Bmaj: ["Bmaj", "B", "B major"],
  Bm: ["Bm", "B minor", "Bmin"],
  B7: ["B7", "B dominant 7"],
  Cmaj: ["Cmaj", "C", "C major"],
  Cm: ["Cm", "C minor", "Cmin"],
  C7: ["C7", "C dominant 7"],
  Dmaj: ["Dmaj", "D", "D major"],
  Dm: ["Dm", "D minor", "Dmin"],
  D7: ["D7", "D dominant 7"],
  Emaj: ["Emaj", "E", "E major"],
  Em: ["Em", "E minor", "Emin"],
  E7: ["E7", "E dominant 7"],
  Fmaj: ["Fmaj", "F", "F major"],
  Fm: ["Fm", "F minor", "Fmin"],
  F7: ["F7", "F dominant 7"],
  Gmaj: ["Gmaj", "G", "G major"],
  Gm: ["Gm", "G minor", "Gmin"],
  G7: ["G7", "G dominant 7"],
  "A#maj": ["A#maj", "A#", "A# major"],
  "A#m": ["A#m", "A# minor", "A#min"],
  "A#7": ["A#7", "A# dominant 7"],
  "C#maj": ["C#maj", "C#", "C# major"],
  "C#m": ["C#m", "C# minor", "C#min"],
  "C#7": ["C#7", "C# dominant 7"],
  "D#maj": ["D#maj", "D#", "D# major"],
  "D#m": ["D#m", "D# minor", "D#min"],
  "D#7": ["D#7", "D# dominant 7"],
  "F#maj": ["F#maj", "F#", "F# major"],
  "F#m": ["F#m", "F# minor", "F#min"],
  "F#7": ["F#7", "F# dominant 7"],
  "G#maj": ["G#maj", "G#", "G# major"],
  "G#m": ["G#m", "G# minor", "G#min"],
  "G#7": ["G#7", "G# dominant 7"],
};

export const CHORDS: chordsType = {
  Amaj: [
    {
      string: [3],
      fret: 1,
      fingerId: 1,
    },
    {
      string: [4],
      fret: 2,
      fingerId: 2,
    },
  ],
  Am: [
    {
      string: [4],
      fret: 2,
      fingerId: 1,
    },
  ],
  A7: [
    {
      string: [3],
      fret: 1,
      fingerId: 1,
    },
  ],
  Bmaj: [
    {
      string: [1, 2],
      fret: 2,
      fingerId: 1,
    },
    {
      string: [3],
      fret: 3,
      fingerId: 2,
    },
    {
      string: [4],
      fret: 4,
      fingerId: 3,
    },
  ],
  Bm: [
    {
      string: [1, 2, 3],
      fret: 2,
      fingerId: 1,
    },
    {
      string: [4],
      fret: 4,
      fingerId: 3,
    },
  ],
  B7: [
    {
      string: [1, 2, 4],
      fret: 2,
      fingerId: 1,
    },
    {
      string: [3],
      fret: 3,
      fingerId: 2,
    },
  ],
  C: [
    {
      string: [1],
      fret: 3,
      fingerId: 1,
    },
  ],
  Cm: [
    {
      string: [1, 2, 3],
      fret: 3,
      fingerId: 1,
    },
  ],
  C7: [
    {
      string: [1],
      fret: 1,
      fingerId: 1,
    },
  ],
  Dmaj: [
    {
      string: [2],
      fret: 2,
      fingerId: 1,
    },
    {
      string: [3],
      fret: 2,
      fingerId: 2,
    },
    {
      string: [4],
      fret: 2,
      fingerId: 3,
    },
  ],
  Dm: [
    {
      string: [2],
      fret: 1,
      fingerId: 1,
    },
    {
      string: [4],
      fret: 2,
      fingerId: 2,
    },
    {
      string: [3],
      fret: 2,
      fingerId: 3,
    },
  ],
  Dm7: [
    {
      string: [1],
      fret: 3,
      fingerId: 4,
    },
    {
      string: [2],
      fret: 1,
      fingerId: 1,
    },
    {
      string: [3],
      fret: 2,
      fingerId: 3,
    },
    {
      string: [4],
      fret: 2,
      fingerId: 2,
    },
  ],
  D7: [
    {
      string: [2, 3, 4],
      fret: 2,
      fingerId: 1,
    },
    {
      string: [1],
      fret: 3,
      fingerId: 3,
    },
  ],
  Emaj: [
    {
      string: [4],
      fret: 1,
      fingerId: 1,
    },
    {
      string: [1],
      fret: 2,
      fingerId: 2,
    },
    {
      string: [3],
      fret: 4,
      fingerId: 4,
    },
  ],
  Em: [
    {
      string: [1],
      fret: 2,
      fingerId: 1,
    },
    {
      string: [2],
      fret: 3,
      fingerId: 2,
    },
    {
      string: [3],
      fret: 4,
      fingerId: 4,
    },
  ],
  E7: [
    {
      string: [4],
      fret: 1,
      fingerId: 1,
    },
    {
      string: [3],
      fret: 2,
      fingerId: 2,
    },
    {
      string: [1],
      fret: 2,
      fingerId: 3,
    },
  ],
  Fmaj: [
    {
      string: [2],
      fret: 1,
      fingerId: 1,
    },
    {
      string: [4],
      fret: 2,
      fingerId: 2,
    },
  ],
  Fm: [
    {
      string: [2],
      fret: 1,
      fingerId: 1,
    },
    {
      string: [4],
      fret: 1,
      fingerId: 2,
    },
    {
      string: [1],
      fret: 3,
      fingerId: 4,
    },
  ],
  F7: [
    {
      string: [2],
      fret: 1,
      fingerId: 1,
    },
    {
      string: [4],
      fret: 2,
      fingerId: 2,
    },
    {
      string: [3],
      fret: 3,
      fingerId: 3,
    },
    {
      string: [1],
      fret: 3,
      fingerId: 4,
    },
  ],
  "F#": [
    {
      string: [1, 3],
      fret: 1,
      fingerId: 1,
    },
    {
      string: [2],
      fret: 2,
      fingerId: 2,
    },
    {
      string: [4],
      fret: 3,
      fingerId: 3,
    },
  ],
  Gmaj: [
    {
      string: [1],
      fret: 2,
      fingerId: 1,
    },
    {
      string: [3],
      fret: 2,
      fingerId: 2,
    },
    {
      string: [2],
      fret: 3,
      fingerId: 3,
    },
  ],
  Gm: [
    {
      string: [1],
      fret: 1,
      fingerId: 1,
    },
    {
      string: [3],
      fret: 2,
      fingerId: 2,
    },
    {
      string: [2],
      fret: 3,
      fingerId: 3,
    },
  ],
  G7: [
    {
      string: [2],
      fret: 1,
      fingerId: 1,
    },
    {
      string: [3],
      fret: 2,
      fingerId: 2,
    },
    {
      string: [1],
      fret: 2,
      fingerId: 3,
    },
  ],
};
