export default {
  backgroundColor:{ type: "color" },
  primaryColor:{ type: "color" },
  secondaryColor:{ type: "color" },
  fontColor:{ type: "color" },
  title:{ type: "string" },
  collectionName:{ type: "string" },
  products: {
    label: "Products",
    type: "array",
    min:2,
    max:3,
    items: {
      type: "object",
      props: {
        image: { 
          type: "array",
          min:2,
          max:2,
          items:{
            type:"string"
          }
      },
        title: { type: "string" },
        description: { type: "string" },
        variants: {
          type: "array",
          items: {
            type:"string"

          },
        },
        price: { type: "string" },
        url: { type: "string" },
      },
    },
  },
};