import Grid from "../Grid.svelte";
import { MasonryGrid as GridClass } from "@grasshopper42/grid";

let MasonryGrid;

if (typeof Grid === "object") {
  MasonryGrid = Grid;
} else {
  MasonryGrid = class MasonryGrid extends Grid {
    constructor(options) {
      options.props.GridClass = GridClass;
      super(options);
    }
  }
}
export { MasonryGrid };
