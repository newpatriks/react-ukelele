import { chordType } from "./types";

export const Gmaj: chordType[] = [
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
];

export const Gm: chordType[] = [
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
];

// Gm7: 0-2-1-1 (strings 4-3-2-1) → open G, D, F, Bb (G-Bb-D-F)
export const Gm7: chordType[] = [
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
];

export const Gmaj7: chordType[] = [
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
];
