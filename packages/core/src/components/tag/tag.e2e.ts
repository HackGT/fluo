import { newE2EPage } from "@stencil/core/testing";

describe("fl-alert", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<fl-alert></fl-alert>");

    const element = await page.find("fl-alert");
    expect(element).toHaveClass("hydrated");
  });
});