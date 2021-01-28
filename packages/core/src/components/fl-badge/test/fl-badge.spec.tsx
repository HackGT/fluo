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
      <fl-badge style="background-color: #B10DC9; border-radius: 0px; position: absolute; padding-top: 3px; padding-bottom: 4px; padding-left: 6px; padding-right: 6px; text-align: center;">
        <mock:shadow-root>
	  primary
          <slot></slot>
        </mock:shadow-root>
      </fl-badge>
    `);
    /* stylelint-enable */
  });
});
