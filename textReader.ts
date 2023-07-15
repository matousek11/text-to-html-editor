export class TextReader {
  splitData(data: string) {
    return data.split("<div>");
  }
  // find paragraphs
  getParagraphs(splitedData: string[]) {
    let paragraphs = splitedData.filter((item, i) => {
      if (i === 0 || i % 2 === 0) return true;
      else return false;
    });
    return paragraphs;
  }
  // find image containers
  getImages(splitedData: string[]) {
    let filteredData = splitedData.filter((item, i) => {
      if (i === 0 || i % 2 === 0) return false;
      else return true;
    });
    return filteredData;
  }
}
