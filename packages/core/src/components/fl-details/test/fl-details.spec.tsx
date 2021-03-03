import { newSpecPage } from '@stencil/core/testing';
import { FlDetails } from '../fl-details';

describe('fl-details', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FlDetails],
      html: `<fl-details></fl-details>`,
    });
    expect(page.root).toEqualHtml(`
      <fl-details>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fl-details>
    `);
  });
});
