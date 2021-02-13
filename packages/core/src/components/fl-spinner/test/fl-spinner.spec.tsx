import { newSpecPage } from "@stencil/core/testing";
import { FlSpinner } from "../fl-spinner";

describe("fl-spinner", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [FlSpinner],
      html: "<fl-spinner></fl-spinner>",
    });
    expect(page.root).toEqualHtml(`
      <fl-spinner class="fl-spinner">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fl-spinner>
    `);
  });
});
