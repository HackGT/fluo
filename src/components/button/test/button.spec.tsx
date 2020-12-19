import { newSpecPage } from "@stencil/core/testing";
import { Button } from "../button";

describe("fl-button", () => {
    it("renders", async () => {
        const page = await newSpecPage({
            components: [Button],
            html: "<fl-button></fl-button>",
        });
        expect(page.root).toEqualHtml(`
      <fl-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fl-button>
    `);
    });
});
