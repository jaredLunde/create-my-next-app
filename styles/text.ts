import type { DashTokens, StyleMap } from "@dash-ui/styles";
import { compoundStyles, responsiveStyles, styles } from "@/dash.config";
import { persistAtom } from "@/stores/atoms";

export const text = compoundStyles(
  {
    /**
     * Select a text variant
     */
    variant: responsiveStyles.variants({
      heading: (t) => ({
        fontSize: t.font.size.xl,
        lineHeight: t.font.leading.tight,
        letterSpacing: t.font.tracking.normal,
        fontWeight: 700,
      }),
      subheading: (t) => ({
        fontSize: t.font.size.lg,
        lineHeight: t.font.leading.tight,
        letterSpacing: t.font.tracking.tight,
        fontWeight: 500,
      }),
      caption: (t) => ({
        fontSize: t.font.size.xs,
        lineHeight: t.font.leading.snug,
        letterSpacing: t.font.tracking.normal,
        fontWeight: 300,
      }),
      action: (t) => ({
        fontSize: t.font.size.xs,
        lineHeight: t.font.leading.snug,
        letterSpacing: t.font.tracking.tight,
        textTransform: "uppercase",
        textRendering: "optimizeLegibility",
        fontWeight: 600,
      }),
    }),
    /**
     * Select a font weight
     */
    weight: responsiveStyles.variants({
      100: {
        fontWeight: 100,
      },
      200: {
        fontWeight: 200,
      },
      300: {
        fontWeight: 300,
      },
      400: {
        fontWeight: 400,
      },
      500: {
        fontWeight: 500,
      },
      600: {
        fontWeight: 600,
      },
      700: {
        fontWeight: 700,
      },
      800: {
        fontWeight: 800,
      },
      900: {
        fontWeight: 900,
      },
    }),
    align: responsiveStyles.variants({
      left: {
        textAlign: "left",
      },
      center: {
        textAlign: "center",
      },
      right: {
        textAlign: "right",
      },
    }),
    /**
     * Creates `line-height` styles for all of your `font.leading`
     * design tokens.
     */
    leading: responsiveStyles.variants(
      (
        Object.keys(
          styles.tokens.font.leading
        ) as (keyof DashTokens["font"]["leading"])[]
      ).reduce<Partial<StyleMap<keyof DashTokens["font"]["leading"]>>>(
        (obj, key) => {
          obj[key] = ({ font }) => ({
            lineHeight: font.leading[key],
          });

          return obj;
        },
        {}
      )
    ),
    /**
     * Creates `letter-spacing` styles for all of your `font.tracking`
     * design tokens.
     */
    tracking: responsiveStyles.variants(
      (
        Object.keys(
          styles.tokens.font.tracking
        ) as (keyof DashTokens["font"]["tracking"])[]
      ).reduce<Partial<StyleMap<keyof DashTokens["font"]["tracking"]>>>(
        (obj, key) => {
          obj[key] = ({ font }) => ({
            letterSpacing: font.tracking[key],
          });

          return obj;
        },
        {}
      )
    ),
    /**
     * Creates font `color` styles for all of your `color`
     * design tokens.
     */
    color: responsiveStyles.variants(
      (
        Object.keys(styles.tokens.color) as (keyof DashTokens["color"])[]
      ).reduce<Partial<StyleMap<keyof DashTokens["color"]>>>((obj, key) => {
        obj[key] = ({ color }) => ({
          color: color[key],
        });

        return obj;
      }, {})
    ),
    /**
     * Creates `font-family` styles for all of your `font.family`
     * design tokens.
     */
    font: responsiveStyles.variants(
      (
        Object.keys(
          styles.tokens.font.family
        ) as (keyof DashTokens["font"]["family"])[]
      ).reduce<Partial<StyleMap<keyof DashTokens["font"]["family"]>>>(
        (obj, key) => {
          obj[key] = ({ font }) => ({
            fontFamily: font.family[key],
          });

          return obj;
        },
        {}
      )
    ),
    /**
     * Creates `font-size` styles for all of your `font.size`
     * design tokens.
     */
    size: responsiveStyles.variants(
      (
        Object.keys(
          styles.tokens.font.size
        ) as (keyof DashTokens["font"]["size"])[]
      ).reduce<Partial<StyleMap<keyof DashTokens["font"]["size"]>>>(
        (obj, key) => {
          obj[key] = ({ font }) => ({
            fontSize: font.size[key],
          });

          return obj;
        },
        {}
      )
    ),
  },
  { atomic: true }
);

export const fontScale = {
  xs: "75%",
  sm: "87%",
  md: "100%",
  lg: "112%",
  xl: "125%",
} as const;

export const fontScaleAtom = persistAtom<keyof typeof fontScale>(
  "fontSize",
  "md"
);
