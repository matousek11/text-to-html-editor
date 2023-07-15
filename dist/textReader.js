"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextReader = void 0;
class TextReader {
    splitData(data) {
        return data.split("<div>");
    }
    // find paragraphs
    getParagraphs(splitedData) {
        let paragraphs = splitedData.filter((item, i) => {
            if (i === 0 || i % 2 === 0)
                return true;
            else
                return false;
        });
        return paragraphs;
    }
    // find image containers
    getImages(splitedData) {
        let filteredData = splitedData.filter((item, i) => {
            if (i === 0 || i % 2 === 0)
                return false;
            else
                return true;
        });
        return filteredData;
    }
}
exports.TextReader = TextReader;
