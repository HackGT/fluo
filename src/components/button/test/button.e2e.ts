import { newE2EPage } from '@stencil/core/testing';

describe('fl-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fl-button></fl-button>');

    const element = await page.find('fl-button');
    expect(element).toHaveClass('hydrated');
  });
});
