import { newSpecPage } from "@stencil/core/testing";
import { FlBadge } from "../fl-badge";
// Gonna ignore the comment about double quotes
// Single quotes need love too ;)
/*eslint quotes: ["error", "double", { "allowTemplateLiterals": true }]*/
describe("fl-badge", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [FlBadge],
      html: `<fl-badge></fl-badge>`,
    });
    expect(page.root).toEqualHtml(`
      <fl-badge class="badge badge-- badge--primary">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fl-badge>
    `);
    /* stylelint-enable */
  });
});
