import { Options } from "$fresh/plugins/twind.ts";

export default {
  theme: {
    extend: {
      spacing: {
        "inherit": "inherit",
        "tVH": "var(--tVH)",
      },
      minHeight: {
        "tVH": "var(--tVH)",
      },
    },
  },
} as Pick<Options, "theme">;
