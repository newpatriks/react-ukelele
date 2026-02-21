import { chordType } from "./types";

export const Bmaj: chordType[] = [
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
];

export const Bm: chordType[] = [
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
];

export const Bmaj7: chordType[] = [
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
];

// Bm7: barre all 4 strings at fret 2 → A-D-F#-B (B-D-F#-A in any order)
export const Bm7: chordType[] = [
  {
    string: [1, 2, 3, 4],
    fret: 2,
    fingerId: 1,
  },
];

export const Bb: chordType[] = [
  {
    string: [1, 2],
    fret: 1,
    fingerId: 1,
  },
  {
    string: [3],
    fret: 2,
    fingerId: 2,
  },
  {
    string: [4],
    fret: 3,
    fingerId: 3,
  },
];
