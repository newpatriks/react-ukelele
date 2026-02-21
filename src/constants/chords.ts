import { chordsType } from "./types";
import { Amaj, Am, Am7, Amaj7, A7sus4 } from "./a";
import { Bmaj, Bm, Bm7, Bmaj7, Bb } from "./b";
import { Cmaj, Cm, Cm7, Cmaj7, Cadd9 } from "./c";
import { Dmaj, Dm, Dm7, Dmaj7, Dsus4 } from "./d";
import { Emaj, Em, Em7, Emaj7 } from "./e";
import { Fmaj, Fm, Fmaj7, Fsharp, Fsharpminor } from "./f";
import { Gmaj, Gm, Gm7, Gmaj7 } from "./g";

const CHORDS: chordsType = {
  // A
  A: Amaj,
  La: Amaj,
  "La Major": Amaj7,
  Amaj,
  //
  A7: Amaj7,
  Amaj7,
  La7: Amaj7,
  //
  "A Minor": Am,
  Am,
  Lam: Am,
  "La minor": Am,
  //
  Am7,
  Lam7: Am7,
  "La minor 7": Am7,
  //
  A7sus4,
  La7sus4: A7sus4,
  "La 7 sus 4": A7sus4,
  //
  B: Bmaj,
  Bmaj,
  "B Major": Bmaj,
  Si: Bmaj,
  //
  B7: Bmaj7,
  Bmaj7,
  "B Major 7": Bmaj7,
  Si7: Bmaj7,
  //
  Bm,
  "B Minor": Bm,
  Sim: Bm,
  //
  Bm7,
  "B Minor 7": Bm7,
  Sim7: Bm7,
  //
  Bb,
  "B flat": Bb,
  "Si bemol": Bb,
  //
  C: Cmaj,
  Cmaj,
  "C Major": Cmaj,
  Do: Cmaj,
  //
  C7: Cmaj7,
  Cmaj7,
  "C Major 7": Cmaj7,
  Do7: Cmaj7,
  //
  Cm,
  "C Minor": Cm,
  Dom: Cm,
  //
  Cm7,
  "C Minor 7": Cm7,
  Dom7: Cm7,
  //
  Cadd9,
  "C add 9": Cadd9,
  "Do add 9": Cadd9,
  //
  D: Dmaj,
  Dmaj,
  "D Major": Dmaj,
  Re: Dmaj,
  //
  D7: Dmaj7,
  Dmaj7,
  "D Major 7": Dmaj7,
  Re7: Dmaj7,
  //
  Dm,
  "D Minor": Dm,
  Rem: Dm,
  //
  Dm7,
  "D Minor 7": Dm7,
  Rem7: Dm7,
  //
  Dsus4,
  "D sus 4": Dsus4,
  "Re sus 4": Dsus4,
  //
  E: Emaj,
  Emaj,
  "E Major": Emaj,
  Mi: Emaj,
  //
  E7: Emaj7,
  Emaj7,
  "E Major 7": Emaj7,
  Mi7: Emaj7,
  //
  Em,
  "E Minor": Em,
  Mim: Em,
  //
  Em7,
  "E Minor 7": Em7,
  Mim7: Em7,
  //
  F: Fmaj,
  Fmaj,
  "F Major": Fmaj,
  Fa: Fmaj,
  //
  F7: Fmaj7,
  Fmaj7,
  "F Major 7": Fmaj7,
  Fa7: Fmaj7,
  //
  "F#": Fsharp,
  "F sharp": Fsharp,
  "Fa#": Fsharp,
  "Fa# Major": Fsharp,
  "Fa# Maj": Fsharp,
  //
  "F#m": Fsharpminor,
  "F# Minor": Fsharpminor,
  "F# minor": Fsharpminor,
  "Fa#m": Fsharpminor,
  //
  Fm,
  "F Minor": Fm,
  Fam: Fm,
  //
  G: Gmaj,
  Gmaj,
  "G Major": Gmaj,
  Sol: Gmaj,
  //
  Gm,
  "G Minor": Gm,
  Solm: Gm,
  //
  Gm7,
  "G Minor 7": Gm7,
  Solm7: Gm7,
  //
  G7: Gmaj7,
  Gmaj7,
  "G Major 7": Gmaj7,
  Sol7: Gmaj7,
};

export default CHORDS;
