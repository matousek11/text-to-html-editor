"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementsGenerator = void 0;
class ElementsGenerator {
    // return small header element
    generateHeader(headerText) {
        const header = document.createElement("h2");
        header.textContent = headerText;
        return header;
    }
    // return paragraph element
    generateParagraph(text) {
        const paragraph = document.createElement("p");
        paragraph.textContent = text;
        return paragraph;
    }
    generateParagraphWithAnchors(text, startsWithAnchor) {
        let paragraph = document.createElement("p");
        let isAnchor = (i) => i % 2 === 0 || i === 0;
        if (!startsWithAnchor)
            isAnchor = (i) => i % 2 !== 0 && i !== 0;
        for (let i = 0; i < text.length; i++) {
            if (isAnchor(i)) {
                let splitedText = text[i].split("|");
                let anchor = this.generateAnchor(splitedText[0], splitedText[1]);
                paragraph.appendChild(anchor);
            }
            else {
                let textNode = document.createTextNode(text[i]);
                paragraph.appendChild(textNode);
            }
        }
        return paragraph;
    }
    generateAnchor(text, url) {
        const anchor = document.createElement("a");
        anchor.textContent = text;
        anchor.href = url;
        return anchor;
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
