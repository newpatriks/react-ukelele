import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Ukelele from './index';

const CHORDS = [
  'A', 'Am', 'Am7', 'Amaj7', 'A7sus4',
  'B', 'Bm', 'Bmaj7', 'Bb',
  'C', 'Cm', 'Cmaj7', 'Cadd9',
  'D', 'Dm', 'Dm7', 'Dmaj7', 'Dsus4',
  'E', 'Em', 'Em7', 'Emaj7',
  'F', 'Fm', 'Fmaj7', 'F#',
  'G', 'Gm', 'Gmaj7',
];

function Demo() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1 style={{ marginBottom: '0.25rem' }}>react-ukelele</h1>
      <p style={{ color: '#666', marginTop: 0 }}>
        All {CHORDS.length} built-in chord diagrams
      </p>
      <h2>Light mode</h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        {CHORDS.map((chord) => (
          <div
            key={chord}
            style={{
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '0.5rem',
              textAlign: 'center',
            }}
          >
            <Ukelele chord={chord} width={150} height={150} />
          </div>
        ))}
      </div>
      <h2 style={{ marginTop: '2rem' }}>Dark mode</h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        {CHORDS.map((chord) => (
          <div
            key={`dark-${chord}`}
            style={{
              border: '1px solid #333',
              borderRadius: '8px',
              padding: '0.5rem',
              textAlign: 'center',
              backgroundColor: '#1a1a1a',
            }}
          >
            <Ukelele chord={chord} width={150} height={150} darkMode />
          </div>
        ))}
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Demo />
  </StrictMode>,
);
