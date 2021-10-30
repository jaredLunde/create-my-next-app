import compound from "@dash-ui/compound";
import dashMq from "@dash-ui/mq";
import responsive from "@dash-ui/responsive";
import type { Responsive } from "@dash-ui/responsive";
import { createStyles } from "@dash-ui/styles";
import type { StyleMap, TokensUnion } from "@dash-ui/styles";
import { persistAtom } from "@/stores/atoms";

/**
 * Design tokens
 * Mostly courtesy of: https://tailwindcss.com
 */
const colorSystem = {
  current: "currentColor",

  black: "#000",
  white: "#fff",

  rose50: "#fff1f2",
  rose100: "#ffe4e6",
  rose200: "#fecdd3",
  rose300: "#fda4af",
  rose400: "#fb7185",
  rose500: "#f43f5e",
  rose600: "#e11d48",
  rose700: "#be123c",
  rose800: "#9f1239",
  rose900: "#881337",

  pink50: "#fdf2f8",
  pink100: "#fce7f3",
  pink200: "#fbcfe8",
  pink300: "#f9a8d4",
  pink400: "#f472b6",
  pink500: "#ec4899",
  pink600: "#db2777",
  pink700: "#be185d",
  pink800: "#9d174d",
  pink900: "#831843",

  fuchsia50: "#fdf4ff",
  fuchsia100: "#fae8ff",
  fuchsia200: "#f5d0fe",
  fuchsia300: "#f0abfc",
  fuchsia400: "#e879f9",
  fuchsia500: "#d946ef",
  fuchsia600: "#c026d3",
  fuchsia700: "#a21caf",
  fuchsia800: "#86198f",
  fuchsia900: "#701a75",

  purple50: "#faf5ff",
  purple100: "#f3e8ff",
  purple200: "#e9d5ff",
  purple300: "#d8b4fe",
  purple400: "#c084fc",
  purple500: "#a855f7",
  purple600: "#9333ea",
  purple700: "#7e22ce",
  purple800: "#6b21a8",
  purple900: "#581c87",

  violet50: "#f5f3ff",
  violet100: "#ede9fe",
  violet200: "#ddd6fe",
  violet300: "#c4b5fd",
  violet400: "#a78bfa",
  violet500: "#8b5cf6",
  violet600: "#7c3aed",
  violet700: "#6d28d9",
  violet800: "#5b21b6",
  violet900: "#4c1d95",

  indigo50: "#eef2ff",
  indigo100: "#e0e7ff",
  indigo200: "#c7d2fe",
  indigo300: "#a5b4fc",
  indigo400: "#818cf8",
  indigo500: "#6366f1",
  indigo600: "#4f46e5",
  indigo700: "#4338ca",
  indigo800: "#3730a3",
  indigo900: "#312e81",

  blue50: "#eff6ff",
  blue100: "#dbeafe",
  blue200: "#bfdbfe",
  blue300: "#93c5fd",
  blue400: "#60a5fa",
  blue500: "#3b82f6",
  blue600: "#2563eb",
  blue700: "#1d4ed8",
  blue800: "#1e40af",
  blue900: "#1e3a8a",

  lightBlue50: "#f0f9ff",
  lightBlue100: "#e0f2fe",
  lightBlue200: "#bae6fd",
  lightBlue300: "#7dd3fc",
  lightBlue400: "#38bdf8",
  lightBlue500: "#0ea5e9",
  lightBlue600: "#0284c7",
  lightBlue700: "#0369a1",
  lightBlue800: "#075985",
  lightBlue900: "#0c4a6e",

  cyan50: "#ecfeff",
  cyan100: "#cffafe",
  cyan200: "#a5f3fc",
  cyan300: "#67e8f9",
  cyan400: "#22d3ee",
  cyan500: "#06b6d4",
  cyan600: "#0891b2",
  cyan700: "#0e7490",
  cyan800: "#155e75",
  cyan900: "#164e63",

  teal50: "#f0fdfa",
  teal100: "#ccfbf1",
  teal200: "#99f6e4",
  teal300: "#5eead4",
  teal400: "#2dd4bf",
  teal500: "#14b8a6",
  teal600: "#0d9488",
  teal700: "#0f766e",
  teal800: "#115e59",
  teal900: "#134e4a",

  emerald50: "#ecfdf5",
  emerald100: "#d1fae5",
  emerald200: "#a7f3d0",
  emerald300: "#6ee7b7",
  emerald400: "#34d399",
  emerald500: "#10b981",
  emerald600: "#059669",
  emerald700: "#047857",
  emerald800: "#065f46",
  emerald900: "#064e3b",

  green50: "#f0fdf4",
  green100: "#dcfce7",
  green200: "#bbf7d0",
  green300: "#86efac",
  green400: "#4ade80",
  green500: "#22c55e",
  green600: "#16a34a",
  green700: "#15803d",
  green800: "#166534",
  green900: "#14532d",

  lime50: "#f7fee7",
  lime100: "#ecfccb",
  lime200: "#d9f99d",
  lime300: "#bef264",
  lime400: "#a3e635",
  lime500: "#84cc16",
  lime600: "#65a30d",
  lime700: "#4d7c0f",
  lime800: "#3f6212",
  lime900: "#365314",

  yellow50: "#fefce8",
  yellow100: "#fef9c3",
  yellow200: "#fef08a",
  yellow300: "#fde047",
  yellow400: "#facc15",
  yellow500: "#eab308",
  yellow600: "#ca8a04",
  yellow700: "#a16207",
  yellow800: "#854d0e",
  yellow900: "#713f12",

  amber50: "#fffbeb",
  amber100: "#fef3c7",
  amber200: "#fde68a",
  amber300: "#fcd34d",
  amber400: "#fbbf24",
  amber500: "#f59e0b",
  amber600: "#d97706",
  amber700: "#b45309",
  amber800: "#92400e",
  amber900: "#78350f",

  orange50: "#fff7ed",
  orange100: "#ffedd5",
  orange200: "#fed7aa",
  orange300: "#fdba74",
  orange400: "#fb923c",
  orange500: "#f97316",
  orange600: "#ea580c",
  orange700: "#c2410c",
  orange800: "#9a3412",
  orange900: "#7c2d12",

  red50: "#fef2f2",
  red100: "#fee2e2",
  red200: "#fecaca",
  red300: "#fca5a5",
  red400: "#f87171",
  red500: "#ef4444",
  red600: "#dc2626",
  red700: "#b91c1c",
  red800: "#991b1b",
  red900: "#7f1d1d",

  warmGray50: "#fafaf9",
  warmGray100: "#f5f5f4",
  warmGray200: "#e7e5e4",
  warmGray300: "#d6d3d1",
  warmGray400: "#a8a29e",
  warmGray500: "#78716c",
  warmGray600: "#57534e",
  warmGray700: "#44403c",
  warmGray800: "#292524",
  warmGray900: "#1c1917",

  trueGray50: "#fafafa",
  trueGray100: "#f5f5f5",
  trueGray200: "#e5e5e5",
  trueGray300: "#d4d4d4",
  trueGray400: "#a3a3a3",
  trueGray500: "#737373",
  trueGray600: "#525252",
  trueGray700: "#404040",
  trueGray800: "#262626",
  trueGray900: "#171717",

  gray50: "#fafafa",
  gray100: "#f4f4f5",
  gray200: "#e4e4e7",
  gray300: "#d4d4d8",
  gray400: "#a1a1aa",
  gray500: "#71717a",
  gray600: "#52525b",
  gray700: "#3f3f46",
  gray800: "#27272a",
  gray900: "#18181b",

  coolGray50: "#f9fafb",
  coolGray100: "#f3f4f6",
  coolGray200: "#e5e7eb",
  coolGray300: "#d1d5db",
  coolGray400: "#9ca3af",
  coolGray500: "#6b7280",
  coolGray600: "#4b5563",
  coolGray700: "#374151",
  coolGray800: "#1f2937",
  coolGray900: "#111827",

  blueGray50: "#f8fafc",
  blueGray100: "#f1f5f9",
  blueGray200: "#e2e8f0",
  blueGray300: "#cbd5e1",
  blueGray400: "#94a3b8",
  blueGray500: "#64748b",
  blueGray600: "#475569",
  blueGray700: "#334155",
  blueGray800: "#1e293b",
  blueGray900: "#0f172a",
} as const;

const tokens = {
  vh: "100vh",

  font: {
    family: {
      sans: [
        `system-ui`,
        `-apple-system`,
        `BlinkMacSystemFont`,
        `Segoe UI`,
        `Roboto`,
        `sans-serif`,
      ]
        .map((s) => `"${s}"`)
        .join(","),
      serif: ["Palatino", "Times New Roman", "Times", "serif"]
        .map((s) => `"${s}"`)
        .join(","),
      mono: [
        "Monaco",
        "Andale Mono",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace",
      ]
        .map((s) => `"${s}"`)
        .join(","),
    } as const,

    size: {
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      xl100: "1.5rem",
      xl200: "1.875rem",
      xl300: "2.25rem",
      xl400: "3rem",
      xl500: "4rem",
    },

    leading: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
      em100: "0.75em",
      em200: "1em",
      em300: "1.25em",
      em400: "1.5em",
      em500: "1.75em",
      em600: "2em",
      em700: "2.25em",
      em800: "2.5em",
    },

    tracking: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
  } as const,

  radius: {
    none: "0",
    primary: "1rem",
    sm: "0.125rem",
    md: "0.25rem",
    lg: "0.375rem",
    xl: "0.5rem",
    xl100: "1rem",
    max: "625rem",
  } as const,

  pad: {
    none: "0",

    xs200: "0.0625rem",
    xs100: "0.125rem",
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "2rem",
    xl: "4rem",
    xl100: "8rem",
    xl200: "16rem",

    emXs200: "0.125em",
    emXs100: "0.25em",
    emXs: "0.5em",
    emSm: "0.75em",
    emMd: "1em",
    emLg: "1.25em",
    emXl: "2em",
    emXl100: "3.25em",
    emXl200: "5.25em",
  } as const,

  gap: {
    none: "0",
    auto: "auto",

    "-xs200": "-0.0625rem",
    "-xs100": "-0.125rem",
    "-xs": "-0.25rem",
    "-sm": "-0.5rem",
    "-md": "-1rem",
    "-lg": "-2rem",
    "-xl": "-4rem",
    "-xl100": "-8rem",
    "-xl200": "-16rem",

    xs200: "0.0625rem",
    xs100: "0.125rem",
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "2rem",
    xl: "4rem",
    xl100: "8rem",
    xl200: "16rem",

    "-emXs200": "-0.125em",
    "-emXs100": "-0.25em",
    "-emXs": "-0.5em",
    "-emSm": "-0.75em",
    "-emMd": "-1em",
    "-emLg": "-1.25em",
    "-emXl": "-2em",
    "-emXl100": "-3.25em",
    "-emXl200": "-5.25em",

    emXs200: "0.125em",
    emXs100: "0.25em",
    emXs: "0.5em",
    emSm: "0.75em",
    emMd: "1em",
    emLg: "1.25em",
    emXl: "2em",
    emXl100: "3.25em",
    emXl200: "5.25em",
  } as const,

  transition: {
    duration: {
      faster: "120ms",
      fast: "240ms",
      normal: "320ms",
      slow: "480ms",
      slower: "640ms",
    },
    timing: {
      primary: "cubic-bezier(0.4, 0, 0.2, 1)",
      accelerated: "cubic-bezier(0.4, 0, 1, 1)",
      decelerated: "cubic-bezier(0, 0, 0.2, 1)",
      elastic: "cubic-bezier(0.8, -0.5, 0.2, 1.4)",
      bounce: "cubic-bezier(0.8, 0.5, 0.2, 1.4)",
    },
  } as const,

  zIndex: {
    min: 0,
    100: 1,
    200: 10,
    300: 100,
    400: 1000,
    500: 10000,
    600: 100000,
    700: 1000000,
    800: 10000000,
    max: 2147483647,
  } as const,

  borderWidth: {
    none: 0,
    // Hairline borders
    50:
      (typeof window === "undefined"
        ? 1
        : "devicePixelRatio" in window && devicePixelRatio >= 2
        ? 0.5
        : 1) + "px",
    100: 1,
    200: 2,
    300: 4,
  } as const,

  color: colorSystem,
};

export const themes = {
  light: {
    shadow: {
      none: "none",
      primary:
        "0 0 12px -3px rgba(0, 0, 0, 0.2), 0 0 6px -2px rgba(0, 0, 0, 0.2)",
      100: "0 0 0 1px rgba(0, 0, 0, 0.05)",
      200: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      300: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 0 15px -3px rgba(0, 0, 0, 0.2), 0 0 6px -2px rgba(0, 0, 0, 0.2)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      xl100: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      outline: "0 0 3px 3px rgba(66, 153, 225, 0.5)",
    },

    color: {
      bodyBg: colorSystem.white,

      text: colorSystem.blueGray900,
      text500: colorSystem.blueGray600,
      text400: colorSystem.blueGray400,
    },
  },

  dark: {
    shadow: {
      none: "none",
      primary:
        "0 0 12px -3px rgba(255, 255, 255, 0.2), 0 0 6px -2px rgba(255, 255, 255, 0.2)",
      xs: "0 0 0 1px rgba(255, 255, 255, 0.05)",
      sm: "0 1px 2px 0 rgba(255, 255, 255, 0.05)",
      md: "0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -1px rgba(255, 255, 255, 0.06)",
      lg: "0 0 15px -3px rgba(255, 255, 255, 0.2), 0 0 6px -2px rgba(255, 255, 255, 0.2)",
      xl: "0 20px 25px -5px rgba(255, 255, 255, 0.1), 0 10px 10px -5px rgba(255, 255, 255, 0.04)",
      xl100: "0 25px 50px -12px rgba(255, 255, 255, 0.25)",
      inner: "inset 0 2px 4px 0 rgba(255, 255, 255, 0.06)",
      outline: "0 0 3px 3px rgba(66, 153, 225, 0.5)",
    },

    color: {
      bodyBg: colorSystem.black,

      text: colorSystem.blueGray300,
      text500: colorSystem.blueGray400,
      text400: colorSystem.blueGray500,
    },
  },
} as const;

/**
 * A `styles` instance that is configured to use your design tokens
 * and themes.
 *
 * @see https://github.com/dash-ui/styles
 */
export const styles = createStyles({
  tokens,
  themes,
  mangleTokens: process.env.NODE_ENV === "production" ? { vh: true } : false,
});

/**
 * These are the media queries you're using throughout your app.
 * These media queries will be available in media query props and
 * through the `mq()` helper below.
 */
export const mediaQueries = {
  min: "only screen and (min-width: 0)",
  // 560px
  sm: "only screen and (min-width: 35em)",
  // 768px
  md: "only screen and (min-width: 48em)",
  // 1024px
  lg: "only screen and (min-width: 64em)",
  // 1280px
  xl: "only screen and (min-width: 80em)",
  // 1440px
  xl100: "only screen and (min-width: 90em)",
  // 1920px
  xl200: "only screen and (min-width: 120em)",
  // High DPI devices
  retina: "(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)",
  // Hover-enabled devices
  hover: "(hover: hover)",
} as const;

/**
 * A helper for adding media queries to Dash `styles.variants`, `styles.one`,
 * `styles.cls`, etc. without having to type `@media blah blah` every
 * time.
 *
 * @see https://github.com/dash-ui/mq
 */
export const mq = dashMq(styles, mediaQueries);

/**
 * A function for adding responsive props/styles to components
 *
 * @see https://github.com/dash-ui/responsive
 */
export const responsiveStyles = responsive(styles, mediaQueries);

/**
 * A function for creating compound/multi-variant styles
 *
 * @see https://github.com/dash-ui/compound
 */
export const compoundStyles = compound(styles);

/**
 * An localsStorage atom that stores the name of the current theme
 *
 * @see https://github.com/pmndrs/jotai
 */
export const themeAtom = persistAtom<keyof Themes>("theme", "light");

type Tokens = typeof tokens;
type Themes = typeof themes;
export type DesignTokens = TokensUnion<Tokens, Themes>;
export type ThemeNames = keyof Themes;
export type MediaQueries = typeof mediaQueries;
export type ResponsiveProp<Variant> =
  | Variant
  | Responsive<Variant, MediaQueries>;
export type TokenVariants<T extends Record<string, unknown>> = StyleMap<
  Extract<keyof T, string>,
  Tokens,
  Themes
>;
