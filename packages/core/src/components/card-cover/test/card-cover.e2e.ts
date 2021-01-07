import { newE2EPage } from "@stencil/core/testing";

describe("fl-card-cover", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<fl-card-cover></fl-card-cover>");

    const element = await page.find("fl-card-cover");
    expect(element).toHaveClass("hydrated");
  });
});
