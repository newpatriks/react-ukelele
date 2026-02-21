import { render } from '@testing-library/react';
import Ukelele from '../src';

describe('Ukelele', () => {
  it('renders expected number of circle elements for chord A', () => {
    const { container } = render(<Ukelele chord="A" />);
    const circles = container.querySelectorAll('circle');
    expect(circles).toHaveLength(2);
  });

  it('returns null for invalid chord', () => {
    const { container } = render(<Ukelele chord="Z" />);
    expect(container.firstChild).toBeNull();
  });
});
