import { ElementsGenerator } from "./elementsGenerator";
import { PictureBox } from "./pictureBox";
import { TextReader } from "./textReader";
export declare class ArticleGenerator {
    textReader: TextReader;
    elementsGenerator: ElementsGenerator;
    pictureBox: PictureBox;
    container: HTMLElement | null;
    constructor();
    generateArticle(data: string, idOfRootElement: string): any;
    private appendAllElements;
    private appendImagesFromContainer;
    private appendText;
    private findElements;
    private recognizeElements;
    private findParagraph;
    private createParagraph;
}
