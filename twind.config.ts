import { Options } from "$fresh/plugins/twind.ts";

export default {
  theme: {
    extend: {
      spacing: {
        "header-mobile": "3rem",
        "header-desktop": "3.5rem",
        "inherit": "inherit",
        "tVH": "var(--tVH)",
      },
      minHeight: {
        "tVH": "var(--tVH)",
      },
    },
  },
} as Pick<Options, "theme">;
