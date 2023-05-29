import { HTMLClip } from "@donkeyclip/motorcortex";
import css from "./clip.css";
import html from "./clip.html";
import { top } from "./effects/top";
import initParams from "./initParams";
import initParamsValidationRules from "./initParamsValidationRules";
import { left } from "./effects/left";
import { opacity } from "./effects/opacity";
import { itemsCombo } from "./effects/itemsCombo";
import { outroCombo } from "./effects/outroCombo";

const clip = new HTMLClip({
  html,
  css,
  host: document.getElementById("clip"),
  initParamsValidationRules,
  initParams: initParams[0].value,
  containerParams: {
    width: "1920px",
    height: "1080px",
  },
  fonts: [
    {
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap",
    },
  ],
});

clip.addIncident(top("0%","-100%",".intro-info",800,0,"easeOutCirc"),0);
clip.addIncident(top("0%","100%",".image1",800,0,"easeOutCirc"),0);
clip.addIncident(left("0%","-50%",".image2",800,0,"easeOutCirc"),0);
clip.addIncident(opacity(1,0,".collection",700,0,"easeOutCirc"),2000);

clip.addIncident(top("-100%","0%",".intro-info",800,0,"easeInCirc"),1800);
clip.addIncident(top("100%","0%",".image1",800,0,"easeInCirc"),1800);
clip.addIncident(left("-50%","0%",".image2",800,0,"easeInCirc"),1800);

clip.addIncident(opacity(0.1,0,".bg-text",1),1700);
clip.addIncident(left("100%","-250%",".bg-text","@expression(initParams.products.length*4000+900+2000)",0),1800);
clip.addIncident(itemsCombo(".left-right"),2700);

clip.addIncident(outroCombo(".image","@expression(initParams.products.length*4000+300*index)"),2700)
clip.addIncident(top("0%","-100%",".outro", 1,"@expression(initParams.products.length*4000+300*index)"),2700)

export { clip };
