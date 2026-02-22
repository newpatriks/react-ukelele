# react-ukelele

[![npm version](https://img.shields.io/npm/v/react-ukelele.svg)](https://www.npmjs.com/package/react-ukelele)
[![npm downloads](https://img.shields.io/npm/dm/react-ukelele.svg)](https://www.npmjs.com/package/react-ukelele)
[![license](https://img.shields.io/npm/l/react-ukelele.svg)](./LICENSE)

Renders ukulele chord diagrams as inline SVG. No canvas, no images — just a React component.

[Live demo](https://upbeat-mccarthy-d9d9b5.netlify.app/chords/A)

<img src="http://jllobet.me/wp-content/uploads/2020/05/react-ukelele.gif" width="350px" />

---

## Install

```bash
npm install react-ukelele
```

Requires React ≥ 16.8 as a peer dependency.

---

## Usage

```tsx
import Ukelele from 'react-ukelele';

function App() {
  return <Ukelele chord="A" />;
}
```

### Props

| Prop        | Type      | Default | Description                              |
|-------------|-----------|---------|------------------------------------------|
| `chord`     | `string`  | `"A"`   | Chord name to display (see list below)   |
| `width`     | `number`  | `300`   | SVG width in pixels                      |
| `height`    | `number`  | `300`   | SVG height in pixels                     |
| `showLabel` | `boolean` | `true`  | Show the chord name label inside the SVG |

Returns `null` if the chord name is not recognised.

---

## Available chords

| Root | Variants |
|------|----------|
| A    | `A`, `Amaj`, `Am`, `Am7`, `Amaj7`, `A7sus4` |
| B    | `B`, `Bmaj`, `Bm`, `Bm7`, `Bmaj7`, `Bb` |
| C    | `C`, `Cmaj`, `Cm`, `Cm7`, `Cmaj7`, `Cadd9` |
| D    | `D`, `Dmaj`, `Dm`, `Dm7`, `Dmaj7`, `Dsus4` |
| E    | `E`, `Emaj`, `Em`, `Em7`, `Emaj7` |
| F    | `F`, `Fmaj`, `Fm`, `Fmaj7`, `F#`, `F#m` |
| G    | `G`, `Gmaj`, `Gm`, `Gm7`, `Gmaj7` |

Solfège names are also accepted (`Do`, `Re`, `Mi`, `Fa`, `Sol`, `La`, `Si` and their minor/7th variants).

---

## Adding custom chords

Each chord is a list of finger positions. Each finger specifies which strings it covers (1 = highest, 4 = lowest), the fret, and an id:

```ts
// Simple chord — one finger on one string
const C = [{ string: [1], fret: 2, fingerId: 1 }];

// Complex chord — multiple fingers
const G = [
  { string: [1], fret: 2, fingerId: 1 },
  { string: [3], fret: 2, fingerId: 2 },
  { string: [2], fret: 3, fingerId: 3 },
];
```

Add entries to `src/constants/chords.ts` and the component will pick them up automatically.

---

## Development

```bash
npm run dev          # start Vite dev server with live demo
npm run type-check   # TypeScript type checking
npm run lint         # ESLint
npm run test         # Vitest test suite
npm run build        # production build → dist/
```

---

## Contributing

1. Fork the repo and create a branch
2. Make your changes with tests where relevant
3. Run `npm run type-check && npm run lint && npm run test` — all must pass
4. Open a pull request

---

## License

MIT © [Jordi Llobet](http://jllobet.me)
