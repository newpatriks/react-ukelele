export type chordType = {
    string: number[];
    fret: number;
    fingerId: number;
};
export type chordsType = {
    [key: string]: chordType[];
};
