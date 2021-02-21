import { newE2EPage } from "@stencil/core/testing";

describe("fl-select", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<fl-select></fl-select>");

    const element = await page.find("fl-select");
    expect(element).toHaveClass("hydrated");
  });
});
