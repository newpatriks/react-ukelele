import { chordsType } from "./types";
import { Amaj, Am, Am7, Amaj7, A7sus4 } from "./a";
import { Bmaj, Bm, Bmaj7, Bb } from "./b";
import { Cmaj, Cm, Cmaj7, Cadd9 } from "./c";
import { Dmaj, Dm, Dm7, Dmaj7, Dsus4 } from "./d";
import { Emaj, Em, Em7, Emaj7 } from "./e";
import { Fmaj, Fm, Fmaj7, Fsharp } from "./f";
import { Gmaj, Gm, Gmaj7 } from "./g";

const CHORDS: chordsType = {
  A: Amaj,
  Amaj,
  A7: Amaj7,
  Amaj7,
  Am,
  Am7,
  A7sus4,
  B: Bmaj,
  Bmaj,
  B7: Bmaj7,
  Bmaj7,
  Bm,
  Bb,
  C: Cmaj,
  Cmaj,
  C7: Cmaj7,
  Cmaj7,
  Cm,
  Cadd9,
  D: Dmaj,
  Dmaj,
  D7: Dmaj7,
  Dmaj7,
  Dm,
  Dm7,
  Dsus4,
  E: Emaj,
  Emaj,
  E7: Emaj7,
  Emaj7,
  Em,
  Em7,
  F: Fmaj,
  Fmaj,
  F7: Fmaj7,
  Fmaj7,
  "F#": Fsharp,
  Fm,
  G: Gmaj,
  Gmaj,
  Gm,
  G7: Gmaj7,
  Gmaj7,
};

export default CHORDS;
