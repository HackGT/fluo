import { newE2EPage } from "@stencil/core/testing";

describe("fl-card-header", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<fl-card-header></fl-card-header>");

    const element = await page.find("fl-card-header");
    expect(element).toHaveClass("hydrated");
  });
});
