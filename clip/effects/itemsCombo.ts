import { CSSEffect, Combo } from "@donkeyclip/motorcortex";
export const itemsCombo = (selector) =>
  new Combo(
    {
      incidents: [
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
                top:"0"
            },
            initialValues: {
                top:"-100%"
            },
          },
          props: {
            duration: 1,
            selector:".left.product"
          },
          position: 0,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
                top:"0"
            },
            initialValues: {
                top:"100%"
            },
          },
          props: {
            duration: 1,
            selector:".right.product"
          },
          position: 0,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
                top:"13%"
            },
            initialValues: {
                top:"-100%"
            },
          },
          props: {
            duration: 800,
            easing:"easeOutCirc",
            selector:".left .product-image1"
          },
          position: 0,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
                top:"13%"
            },
            initialValues: {
                top:"100%"
            },
          },
          props: {
            duration: 800,
            easing:"easeOutCirc",
            selector:".right .product-image1"
          },
          position: 0,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
                left:"40%"
            },
            initialValues: {
                left:"100%"
            },
          },
          props: {
            duration: 800,
            easing:"easeOutCirc",
            selector:".left .product-image2"
          },
          position: 0,
        
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
                right:"40%"
            },
            initialValues: {
                right:"100%"
            },
          },
          props: {
            duration: 800,
            easing:"easeOutCirc",
            selector:".right .product-image2"
          },
          position: 0,
        
        },
        {
            incidentClass: CSSEffect,
            attrs: {
              animatedAttrs: {
                  left:"0%"
              },
              initialValues: {
                  left:"-100%"
              },
            },
            props: {
              duration: 400,
              selector:".product-name"
            },
            position: 450,
          
          },
          {
            incidentClass: CSSEffect,
            attrs: {
              animatedAttrs: {
                  left:"0%"
              },
              initialValues: {
                  left:"100%"
              },
            },
            props: {
              duration: 400,
              selector:".product-description"
            },
            position: 450,
          },
          {
            incidentClass: CSSEffect,
            attrs: {
              animatedAttrs: {
                  transform:{
                    scale:1
                  }
              },
              initialValues: {
                transform:{
                    scale:0
                  }
              },
            },
            props: {
              duration: 300,
              selector:".price"
            },
            position: 950,
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
              duration: 300,
              selector:".cta"
            },
            position: 950,
          },
          // remove 
          {
            incidentClass: CSSEffect,
            attrs: {
              animatedAttrs: {
                  top:"-100%"
              },
              initialValues: {
                  top:"13%"
              },
            },
            props: {
              duration: 800,
              easing:"easeInCirc",
              selector:".left .product-image1"
            },
            position: 3000,
          },
          {
            incidentClass: CSSEffect,
            attrs: {
              animatedAttrs: {
                  top:"100%"
              },
              initialValues: {
                  top:"13%"
              },
            },
            props: {
              duration: 800,
              easing:"easeInCirc",
              selector:".right .product-image1"
            },
            position: 3000,
          },
          {
            incidentClass: CSSEffect,
            attrs: {
              animatedAttrs: {
                  left:"100%"
              },
              initialValues: {
                  left:"40%"
              },
            },
            props: {
              duration: 800,
              easing:"easeInCirc",
              selector:".left .product-image2"
            },
            position: 3000,
          
          },
          {
            incidentClass: CSSEffect,
            attrs: {
              animatedAttrs: {
                  right:"100%"
              },
              initialValues: {
                  right:"40%"
              },
            },
            props: {
              duration: 800,
              easing:"easeInCirc",
              selector:".right .product-image2"
            },
            position: 3000,
          
          },
          {
              incidentClass: CSSEffect,
              attrs: {
                animatedAttrs: {
                    left:"-100%"
                },
                initialValues: {
                    left:"0%"
                },
              },
              props: {
                duration: 400,
                selector:".product-name"
              },
              position: 3000,
            
            },
            {
              incidentClass: CSSEffect,
              attrs: {
                animatedAttrs: {
                    left:"100%"
                },
                initialValues: {
                    left:"0%"
                },
              },
              props: {
                duration: 400,
                selector:".product-description"
              },
              position: 3000,
            },
            {
              incidentClass: CSSEffect,
              attrs: {
                animatedAttrs: {
                    transform:{
                      scale:0
                    }
                },
                initialValues: {
                  transform:{
                      scale:1
                    }
                },
              },
              props: {
                duration: 300,
                selector:".price"
              },
              position: 3000,
            },
            {
              incidentClass: CSSEffect,
              attrs: {
                animatedAttrs: {
                    opacity:0
                },
                initialValues: {
                  opacity:1
                },
              },
              props: {
                duration: 300,
                selector:".cta"
              },
              position: 3000,
            },
            {
              incidentClass: CSSEffect,
              attrs: {
                animatedAttrs: {
                    top:"-100%"
                },
                initialValues: {
                  top:"0%"
                },
              },
              props: {
                duration: 1,
                selector:".left.product"
              },
              position: 3999,
            },
            {
              incidentClass: CSSEffect,
              attrs: {
                animatedAttrs: {
                    top:"100%"
                },
                initialValues: {
                  top:"0%"
                },
              },
              props: {
                duration: 1,
                selector:".right.product"
              },
              position: 3999,
            },
      ],
    },
    {
      selector,
      delay: "@expression(index *4000)",
    }
  );