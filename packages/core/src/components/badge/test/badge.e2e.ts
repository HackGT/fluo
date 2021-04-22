import { newE2EPage } from "@stencil/core/testing";

describe("fl-badge", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<fl-badge></fl-badge>");

    const element = await page.find("fl-badge");
    expect(element).toHaveClass("hydrated");
  });
});
