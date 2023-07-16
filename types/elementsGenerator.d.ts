export declare class ElementsGenerator {
    generateHeader(headerText: string): HTMLHeadingElement;
    generateParagraph(text: string): HTMLParagraphElement;
    generateParagraphWithAnchors(text: string[], startsWithAnchor: boolean): HTMLParagraphElement;
    generateAnchor(text: string, url: string): HTMLAnchorElement;
    generateDiv(): HTMLDivElement;
    generateDivWithId(id: string): HTMLDivElement;
    generateImage(url: string): HTMLImageElement;
}
