import { newE2EPage } from "@stencil/core/testing";

describe("fl-slider", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<fl-slider></fl-slider>");

    const element = await page.find("fl-slider");
    expect(element).toHaveClass("hydrated");
  });
});
