import { newSpecPage } from '@stencil/core/testing';
import { FlDivider } from '../fl-divider';

describe('fl-divider', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FlDivider],
      html: `<fl-divider></fl-divider>`,
    });
    expect(page.root).toEqualHtml(`
      <fl-divider>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fl-divider>
    `);
  });
});
