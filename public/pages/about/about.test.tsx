import { render } from '@testing-library/preact';

import About from './';

describe('Counter', () => {
  test('テキストが表示されている', () => {
    const { container } = render(<About />);

    expect(container.querySelector('h1').textContent).toMatch('About');
    expect(container.querySelector('p').textContent).toMatch(
      'A page all about this website.'
    );
  });
});
