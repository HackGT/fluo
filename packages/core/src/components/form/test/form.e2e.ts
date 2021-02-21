import { newE2EPage } from "@stencil/core/testing";

describe("fl-form", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<fl-form></fl-form>");

    const element = await page.find("fl-form");
    expect(element).toHaveClass("hydrated");
  });
});
