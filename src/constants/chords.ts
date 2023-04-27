import { chordsType } from "./types";
import { Amaj, Am, Am7, Amaj7 } from "./a";
import { Bmaj, Bm, Bmaj7 } from "./b";
import { Cmaj, Cm, Cmaj7 } from "./c";
import { Dmaj, Dm, Dm7, Dmaj7 } from "./d";
import { Emaj, Em, Emaj7 } from "./e";
import { Fmaj, Fm, Fmaj7, Fsharp } from "./f";
import { Gmaj, Gm, Gmaj7 } from "./g";

const CHORDS: chordsType = {
  Amaj,
  Amaj7,
  Am,
  Am7,
  Bmaj,
  Bmaj7,
  Bm,
  Cmaj,
  Cm,
  Cmaj7,
  Dmaj,
  Dmaj7,
  Dm,
  Dm7,
  Emaj,
  Emaj7,
  Em,
  Fmaj,
  Fmaj7,
  "F#": Fsharp,
  Fm,
  Gmaj,
  Gm,
  Gmaj7,
};

export default CHORDS;
