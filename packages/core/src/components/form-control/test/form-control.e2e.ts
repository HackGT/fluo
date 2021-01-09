import { newE2EPage } from "@stencil/core/testing";

describe("fl-form-control", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<fl-form-control></fl-form-control>");

    const element = await page.find("fl-form-control");
    expect(element).toHaveClass("hydrated");
  });
});
