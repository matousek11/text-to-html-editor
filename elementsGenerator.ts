export class ElementsGenerator {
  // return small header element
  generateHeader(headerText: string) {
    const header = document.createElement("h2");
    header.textContent = headerText;
    return header;
  }

  // return paragraph element
  generateParagraph(text: string) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
  }

  generateParagraphWithAnchors(text: string[], startsWithAnchor: boolean) {
    let paragraph = document.createElement("p");
    let isAnchor = (i: number) => i % 2 === 0 || i === 0;
    if (!startsWithAnchor) isAnchor = (i: number) => i % 2 !== 0 && i !== 0;
    for (let i = 0; i < text.length; i++) {
      if (isAnchor(i)) {
        let splitedText = text[i].split("|");
        let anchor = this.generateAnchor(splitedText[0], splitedText[1]);
        paragraph.appendChild(anchor);
      } else {
        let textNode = document.createTextNode(text[i]);
        paragraph.appendChild(textNode);
      }
    }
    return paragraph;
  }

  generateAnchor(text: string, url: string) {
    const anchor = document.createElement("a");
    anchor.textContent = text;
    anchor.href = url;
    anchor.target = '_blank'
    return anchor;
  }

  generateDiv() {
    const div = document.createElement("div");
    return div;
  }

  generateDivWithId(id: string) {
    const div = document.createElement("div");
    div.id = id;
    return div;
  }

  // return image element
  generateImage(url: string) {
    const image = document.createElement("img");
    image.src = url;
    let urlArray = url.split("/");
    image.alt = urlArray[urlArray.length - 1];
    return image;
  }
}
