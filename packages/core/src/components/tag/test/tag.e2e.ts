import { newE2EPage } from "@stencil/core/testing";

describe("fl-tag", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<fl-tag></fl-tag>");

    const element = await page.find("fl-tag");
    expect(element).toHaveClass("hydrated");
  });
});
