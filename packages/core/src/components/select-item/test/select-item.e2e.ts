import { newE2EPage } from "@stencil/core/testing";

describe("fl-select-item", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<fl-select-item></fl-select-item>");

    const element = await page.find("fl-select-item");
    expect(element).toHaveClass("hydrated");
  });
});
