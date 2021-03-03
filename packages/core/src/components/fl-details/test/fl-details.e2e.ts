import { newE2EPage } from '@stencil/core/testing';

describe('fl-details', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fl-details></fl-details>');

    const element = await page.find('fl-details');
    expect(element).toHaveClass('hydrated');
  });
});
