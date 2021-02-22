import { newE2EPage } from "@stencil/core/testing";

describe("fl-spinner", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<fl-spinner></fl-spinner>");

    const element = await page.find("fl-spinner");
    expect(element).toHaveClass("hydrated");
  });
});
