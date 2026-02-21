import { render } from '@testing-library/react';
import Ukelele from '../src';

describe('Ukelele', () => {
  // ── chord rendering ──────────────────────────────────────────────────────

  it('renders 2 circles for chord A (2-finger chord)', () => {
    const { container } = render(<Ukelele chord="A" />);
    expect(container.querySelectorAll('circle')).toHaveLength(2);
  });

  it('renders 3 circles for chord G (3-finger chord)', () => {
    const { container } = render(<Ukelele chord="G" />);
    expect(container.querySelectorAll('circle')).toHaveLength(3);
  });

  it('renders 1 circle for chord Am (1-finger chord)', () => {
    const { container } = render(<Ukelele chord="Am" />);
    expect(container.querySelectorAll('circle')).toHaveLength(1);
  });

  it('renders 0 circles for chord Am7 (open chord)', () => {
    const { container } = render(<Ukelele chord="Am7" />);
    expect(container.querySelectorAll('circle')).toHaveLength(0);
  });

  it('returns null for an unrecognised chord', () => {
    const { container } = render(<Ukelele chord="Z" />);
    expect(container.firstChild).toBeNull();
  });

  // ── chord aliases ────────────────────────────────────────────────────────

  it('resolves Spanish alias "La" to the same diagram as "A"', () => {
    const { container: a } = render(<Ukelele chord="A" />);
    const { container: la } = render(<Ukelele chord="La" />);
    expect(a.querySelectorAll('circle')).toHaveLength(
      la.querySelectorAll('circle').length,
    );
  });

  it('resolves "Am" and "A Minor" to the same diagram', () => {
    const { container: am } = render(<Ukelele chord="Am" />);
    const { container: full } = render(<Ukelele chord="A Minor" />);
    expect(am.querySelectorAll('circle')).toHaveLength(
      full.querySelectorAll('circle').length,
    );
  });

  // ── SVG output ───────────────────────────────────────────────────────────

  it('renders an <svg> element', () => {
    const { container } = render(<Ukelele chord="A" />);
    expect(container.querySelector('svg')).not.toBeNull();
  });

  it('respects the width prop on the svg element', () => {
    const { container } = render(<Ukelele chord="A" width={200} />);
    const svg = container.querySelector('svg')!;
    expect(svg.getAttribute('width')).toBe('200');
  });

  it('respects the height prop on the svg element', () => {
    const { container } = render(<Ukelele chord="A" height={400} />);
    const svg = container.querySelector('svg')!;
    expect(svg.getAttribute('height')).toBe('400');
  });

  // ── showLabel prop ───────────────────────────────────────────────────────

  it('shows the chord label by default', () => {
    const { container } = render(<Ukelele chord="A" />);
    const text = container.querySelector('text');
    expect(text).not.toBeNull();
    expect(text!.textContent).toBe('A');
  });

  it('hides the chord label when showLabel=false', () => {
    const { container } = render(<Ukelele chord="A" showLabel={false} />);
    expect(container.querySelector('text')).toBeNull();
  });
});
