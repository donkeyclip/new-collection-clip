import { CSSEffect, Combo } from "@donkeyclip/motorcortex";
export const outroCombo = (selector,delay=0) =>
  new Combo(
    {
      incidents: [
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
                left:"@expression(index *45)%"
            },
            initialValues: {
                left:"-200%"
            },
          },
          props: {
            duration: 800,
            easing:"easeOutCirc",
          },
          position: 0,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
                opacity:1
            },
            initialValues: {
                opacity:0
            },
          },
          props: {
            duration: 500,
            easing:"easeOutCirc",
          },
          position: 500,
        },
      ],
    },
    {
      selector,
      delay,
    }
  );