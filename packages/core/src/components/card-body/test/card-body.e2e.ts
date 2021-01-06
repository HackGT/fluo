import { newE2EPage } from "@stencil/core/testing";

describe("fl-card-body", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<fl-card-body></fl-card-body>");

    const element = await page.find("fl-card-body");
    expect(element).toHaveClass("hydrated");
  });
});
