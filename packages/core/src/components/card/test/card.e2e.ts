import { newE2EPage } from "@stencil/core/testing";

describe("fl-card", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<fl-card></fl-card>");

    const element = await page.find("fl-card");
    expect(element).toHaveClass("hydrated");
  });
});
