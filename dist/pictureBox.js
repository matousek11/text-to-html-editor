"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PictureBox = void 0;
const elementsGenerator_1 = require("./elementsGenerator");
class PictureBox {
    constructor() {
        this.elementsGenerator = new elementsGenerator_1.ElementsGenerator();
    }
    showBox(url) {
        // main div
        const mainImageDiv = document.getElementById("hideFullscreen");
        mainImageDiv?.removeAttribute("id");
        if (mainImageDiv !== null)
            mainImageDiv.id = "FullscreenImage";
        // image
        const image = document.getElementById("image");
        image?.removeAttribute("src");
        if (image !== null) {
            image.src = url.split("|")[0];
            image.alt = url.split("|")[1];
        }
        // alt
        const alt = document.getElementById("alt");
        if (alt !== null)
            alt.innerHTML = url.split("|")[1];
        if (url.split("|")[1] === undefined && alt !== null)
            alt.innerHTML = "";
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
        if (mainImageDiv !== null)
            mainImageDiv.id = "hideFullscreen";
    }
}
exports.PictureBox = PictureBox;
