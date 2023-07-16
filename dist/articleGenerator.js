"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleGenerator = void 0;
const elementsGenerator_1 = require("./elementsGenerator");
const pictureBox_1 = require("./pictureBox");
const textReader_1 = require("./textReader");
class ArticleGenerator {
    constructor() {
        this.textReader = new textReader_1.TextReader();
        this.elementsGenerator = new elementsGenerator_1.ElementsGenerator();
        this.pictureBox = new pictureBox_1.PictureBox();
        this.container = null;
    }
    // main method which generates whole article
    generateArticle(data, idOfRootElement) {
        const container = document.getElementById(idOfRootElement);
        // prepare data
        let splitedData = this.textReader.splitData(data);
        let paragraphs = this.textReader.getParagraphs(splitedData);
        let imageDivs = this.textReader.getImages(splitedData);
        // check if container is empty
        if (container !== undefined && container !== null)
            container.innerHTML = "";
        // check if containe exists
        if (container === null)
            return null;
        this.container = container;
        //append of elements
        this.appendAllElements(paragraphs, imageDivs, container);
    }
    appendAllElements(paragraphs, imageDivs, container) {
        for (let i = 0; i < paragraphs.length; i++) {
            this.appendText(paragraphs[i], container);
            this.appendImagesFromContainer(i, imageDivs, paragraphs);
        }
    }
    appendImagesFromContainer(mainIterator, imageDivs, paragraphs) {
        let divElement = this.elementsGenerator.generateDiv();
        // check if there is images
        if (mainIterator < imageDivs.length) {
            let images = imageDivs[mainIterator]
                .split(/\[|\]/)
                .filter((item) => (item === " " ? false : true));
            // append image one by one
            images.forEach((image) => {
                let newImage = this.elementsGenerator.generateImage(image.split("|")[0]);
                newImage.alt = image;
                if (image.includes("|"))
                    newImage.alt = image.split("|")[1];
                // append event to every image
                newImage.addEventListener("click", () => {
                    const showBoxEvent = new Event("showBox");
                    newImage.dispatchEvent(showBoxEvent);
                });
                newImage.addEventListener("showBox", () => {
                    this.pictureBox.showBox(image);
                });
                divElement.appendChild(newImage);
            });
            this.container?.appendChild(divElement);
        }
        if (mainIterator === paragraphs.length - 1 &&
            imageDivs[mainIterator + 1] !== undefined) {
            let images = imageDivs[mainIterator + 1]
                .split(/\[|\]/)
                .filter((item) => (item === " " ? false : true));
            // append image one by one
            images.forEach((image) => {
                let newImage = this.elementsGenerator.generateImage(image.split("|")[0]);
                newImage.alt = image;
                if (image.includes("|"))
                    newImage.alt = image.split("|")[1];
                newImage.addEventListener("showBox", () => console.log("clicking"));
                divElement.appendChild(newImage);
            });
        }
    }
    // Append all text like headers, paragraphs, etc...
    appendText(newText, container) {
        //find headers
        let splitedText = newText.split(" ");
        let indexOfHeaders = this.findElements(newText, "#");
        let indexOfAnchors = this.findElements(newText, "*");
        let firstPartOfText = splitedText.slice(0, indexOfHeaders[0]).join(" ");
        container.appendChild(this.createParagraph(firstPartOfText));
        // Append of all text
        indexOfHeaders.forEach((indexOfHeader, i) => {
            let elementToAppend = this.recognizeElements(i, indexOfHeader, indexOfHeaders, indexOfAnchors, splitedText);
            container.appendChild(elementToAppend);
        });
    }
    findElements(text, searchedLetter) {
        let splitedText = text.split(" ");
        let indexOfSearchedElements = splitedText
            .map((part, i) => {
            if (part.includes(searchedLetter))
                return i;
            else
                return -1;
        })
            .filter((part) => part !== -1);
        return indexOfSearchedElements;
    }
    recognizeElements(i, indexOfHeader, indexOfHeaders, indexOfAnchors, splitedText) {
        if (i % 2 === 0 || i === 0) {
            // make header
            let nextHeaderText = splitedText
                .slice(indexOfHeader, indexOfHeaders[i + 1] + 1)
                .join(" ")
                .replaceAll("#", "");
            let headerElement = this.elementsGenerator.generateHeader(nextHeaderText);
            return headerElement;
        }
        else {
            // make paragraph
            let paragraphElement = this.findParagraph(i, indexOfHeader, indexOfHeaders, indexOfAnchors, splitedText);
            return paragraphElement;
        }
    }
    // find paragraph
    findParagraph(i, indexOfHeader, indexOfHeaders, indexOfAnchors, splitedText) {
        if (i < indexOfHeaders.length - 1) {
            let nextParagraph = splitedText
                .slice(indexOfHeader + 1, indexOfHeaders[i + 1])
                .join(" ");
            let paragraphElement = this.createParagraph(nextParagraph);
            return paragraphElement;
        }
        else {
            let nextParagraph = splitedText
                .slice(indexOfHeader + 1, splitedText.length)
                .join(" ");
            let paragraphElement = this.createParagraph(nextParagraph);
            return paragraphElement;
        }
    }
    createParagraph(text) {
        let paragraph;
        if (text.includes("*"))
            paragraph = this.elementsGenerator.generateParagraph(text);
        else {
            let splitedText = text.split("*");
            let startsWithAnchor;
            if (text[0] === "*")
                startsWithAnchor = false;
            else
                startsWithAnchor = true;
            paragraph = this.elementsGenerator.generateParagraphWithAnchors(splitedText, startsWithAnchor);
        }
        return paragraph;
    }
}
exports.ArticleGenerator = ArticleGenerator;
