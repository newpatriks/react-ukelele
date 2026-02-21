import { chordType } from "./types";

export const Fmaj: chordType[] = [
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
];
export const Fm: chordType[] = [
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
];
export const Fmaj7: chordType[] = [
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
];

// F#m: 2-1-2-open (strings 4-3-2-1) → A-C#-F#-A (F#-A-C#)
export const Fsharpminor: chordType[] = [
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
  {
    string: [2],
    fret: 2,
    fingerId: 3,
  },
];

export const Fsharp: chordType[] = [
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
];
