import { useGlobal, useTokens } from "@dash-ui/react";
import resetGlobalStyles from "@dash-ui/reset";
import { useAtom } from "jotai";
import * as React from "react";
import { useSubscription } from "use-subscription";
import { mq, styles } from "@/dash.config";
import { fontScale, fontScaleAtom } from "@/styles/text";

/**
 * Injects global styles for the app
 */
export function GlobalStyles() {
  const [fontScaleKey] = useAtom(fontScaleAtom);
  useFillAvailable();
  useGlobal(styles, resetGlobalStyles, []);
  useGlobal(
    styles,
    (t) => ({
      "*, ::before, ::after, body": {
        position: "relative",
        margin: 0,
        overflowWrap: "break-word",
      },
      "*:focus": {
        outline: "none",
      },
      "::selection, ::-moz-selection": {
        backgroundColor: t.color.indigo200,
      },
      html: {
        fontSize: fontScale[fontScaleKey],
        overflowX: "hidden",

        ":focus-within": {
          scrollBehavior: "smooth",
        },
      },
      body: {
        minWidth: "100%",
        minHeight: t.vh,
        backgroundColor: t.color.bodyBg,
      },
      ".loud": {
        transitionProperty: "opacity,visibility",
        transitionDuration: t.transition.duration.slower,
        transitionTimingFunction: t.transition.timing.primary,
      },
      ".writing-mode-enabled .loud": {
        opacity: "0!important",
        visibility: "hidden",
      },
      ".writing-mode-disabled .loud": {
        opacity: 1,
        visibility: "visible",
      },
    }),
    [fontScaleKey]
  );
  useGlobal(
    styles,
    mq({
      default: (t) => ({
        body: {
          fontSize: t.font.size[200],
          fontFamily: t.font.family.sans,
          color: t.color.text,
          textRendering: "optimizeSpeed",
        },
        "h1,h2,h3": {
          textRendering: "optimizeLegibility",
        },
        "h1,h2,h3,h4,h5,h6": {
          fontWeight: "inherit",
        },
      }),
      retina: {
        "h1,h2,h3,h4,h5,h6": {
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "coolGrayscale",
        },
      },
    }),
    []
  );

  return null;
}

function useFillAvailable() {
  const windowHeight = useSubscription(
    React.useMemo(
      () => ({
        getCurrentValue() {
          return typeof window === "undefined"
            ? "100vh"
            : window.innerHeight + "px";
        },
        subscribe(callback) {
          window.addEventListener("resize", callback);

          return () => {
            window.removeEventListener("resize", callback);
          };
        },
      }),
      []
    )
  );

  useTokens(styles, { vh: windowHeight }, [windowHeight]);
}
