import { newE2EPage } from "@stencil/core/testing";

describe("fl-card-footer", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<fl-card-footer></fl-card-footer>");

    const element = await page.find("fl-card-footer");
    expect(element).toHaveClass("hydrated");
  });
});
