"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementsGenerator = void 0;
class ElementsGenerator {
    // return small header element
    generateHeader(headerText) {
        const header = document.createElement("h4");
        header.textContent = headerText;
        return header;
    }
    // return paragraph element
    generateParagraph(text) {
        const paragraph = document.createElement("p");
        paragraph.textContent = text;
        return paragraph;
    }
    generateDiv() {
        const div = document.createElement("div");
        return div;
    }
    generateDivWithId(id) {
        const div = document.createElement("div");
        div.id = id;
        return div;
    }
    // return image element
    generateImage(url) {
        const image = document.createElement("img");
        image.src = url;
        let urlArray = url.split("/");
        image.alt = urlArray[urlArray.length - 1];
        return image;
    }
}
exports.ElementsGenerator = ElementsGenerator;
