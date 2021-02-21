import { newSpecPage } from "@stencil/core/testing";
import { FlSlider } from "../fl-slider";

describe("fl-slider", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [FlSlider],
      html: "<fl-slider></fl-slider>",
    });
    expect(page.root).toEqualHtml(`
      <fl-slider style="--step: 1; --max: 100; --min: 30;">
        <mock:shadow-root>
          <slot></slot>
          TEST
          <div class="ticks">
            <input max="100" min="30" step="1" type="range" value="30">
         </div>
        </mock:shadow-root>
      </fl-slider>
    `);
  });
});
