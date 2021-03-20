import { newE2EPage } from "@stencil/core/testing";

describe("fl-link", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<fl-link></fl-link>");

    const element = await page.find("fl-link");
    expect(element).toHaveClass("hydrated");
  });
});
