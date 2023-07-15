import { ElementsGenerator } from "./elementsGenerator";

export class PictureBox {
  elementsGenerator: ElementsGenerator;
  constructor() {
    this.elementsGenerator = new ElementsGenerator();
  }
  showBox(url: string) {
    // main div
    const mainImageDiv = document.getElementById("hideFullscreen");
    mainImageDiv?.removeAttribute("id");
    if (mainImageDiv !== null) mainImageDiv.id = "FullscreenImage";

    // image
    const image: any = document.getElementById("image");
    image?.removeAttribute("src");
    if (image !== null) {
      image.src = url.split("|")[0];
      image.alt = url.split("|")[1];
    }

    // alt
    const alt = document.getElementById("alt");
    if (alt !== null) alt.innerHTML = url.split("|")[1];
    if (url.split("|")[1] === undefined && alt !== null) alt.innerHTML = "";

    // events
    let buttonImage = document.getElementById("button");
    buttonImage?.addEventListener("click", () => {
      const showBoxEvent = new Event("closeBox");
      buttonImage?.dispatchEvent(showBoxEvent);
    });
    buttonImage?.addEventListener("closeBox", () => {
      console.log("click");
      this.hideBox();
    });
  }
  hideBox() {
    const mainImageDiv = document.getElementById("FullscreenImage");
    mainImageDiv?.removeAttribute("id");
    if (mainImageDiv !== null) mainImageDiv.id = "hideFullscreen";
  }
}
