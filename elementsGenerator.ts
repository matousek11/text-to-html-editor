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
