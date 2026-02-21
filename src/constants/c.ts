import { chordType } from "./types";

export const Cmaj: chordType[] = [
  {
    string: [1],
    fret: 3,
    fingerId: 1,
  },
];

export const Cm: chordType[] = [
  {
    string: [1, 2, 3],
    fret: 3,
    fingerId: 1,
  },
];

export const Cmaj7: chordType[] = [
  {
    string: [1],
    fret: 2,
    fingerId: 1,
  },
];

// Cm7: barre all 4 strings at fret 3 → Bb-Eb-G-C (C-Eb-G-Bb in any order)
export const Cm7: chordType[] = [
  {
    string: [1, 2, 3, 4],
    fret: 3,
    fingerId: 1,
  },
];

export const Cadd9: chordType[] = [
  {
    string: [3],
    fret: 2,
    fingerId: 1,
  },
  {
    string: [1],
    fret: 3,
    fingerId: 3,
  },
];
