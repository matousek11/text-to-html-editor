import { ElementsGenerator } from "./elementsGenerator";
import { PictureBox } from "./pictureBox";
import { TextReader } from "./textReader";

declare module "@matousek11/text-to-html-editor" {
  export class ArticleGenerator {
    textReader: TextReader;
    elementsGenerator: ElementsGenerator;
    pictureBox: PictureBox;
    container: HTMLElement | null;
    constructor();
    generateArticle(data: string, idOfRootElement: string): void;
    private appendAllElements(
      paragraphs: string[],
      imageDivs: string[],
      container: HTMLElement
    ): void;
    private appendImagesFromContainer(
      mainIterator: number,
      imageDivs: string[],
      paragraphs: string[]
    ): void;
    private appendText(newText: string, container: HTMLElement): void;
    private findHeaders(textWithHeaders: string): number[];
    private recognizeElements(
      i: number,
      indexOfHeader: number,
      indexOfHeaders: number[],
      splitedText: string[]
    ): HTMLElement;
    private findParagraph(
      i: number,
      indexOfHeader: number,
      indexOfHeaders: number[],
      splitedText: string[]
    ): HTMLElement;
  }
  export class ElementsGenerator {
    generateHeader(headerText: string): HTMLHeadingElement;
    generateParagraph(text: string): HTMLParagraphElement;
    generateDiv(): HTMLDivElement;
    generateDivWithId(id: string): HTMLDivElement;
    generateImage(url: string): HTMLImageElement;
  }
  export class PictureBox {
    elementsGenerator: ElementsGenerator;
    constructor();
    showBox(url: string): void;
    hideBox(): void;
  }
  export class TextReader {
    splitData(data: string): string[];
    getParagraphs(splitedData: string[]): string[];
    getImages(splitedData: string[]): string[];
  }
  export function createArticle(data: string, idOfRootElement: string): void;
}
