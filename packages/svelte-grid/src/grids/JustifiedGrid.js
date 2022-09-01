import Grid from "../Grid.svelte";
import { JustifiedGrid as GridClass } from "@grasshopper42/grid";

let JustifiedGrid;

if (typeof Grid === "object") {
  JustifiedGrid = Grid;
} else {
  JustifiedGrid = class JustifiedGrid extends Grid {
    constructor(options) {
      options.props.GridClass = GridClass;
      super(options);
    }
  }
}
export { JustifiedGrid };
