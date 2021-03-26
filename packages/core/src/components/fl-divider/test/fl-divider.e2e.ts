import { newE2EPage } from '@stencil/core/testing';

describe('fl-divider', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fl-divider></fl-divider>');

    const element = await page.find('fl-divider');
    expect(element).toHaveClass('hydrated');
  });
});
