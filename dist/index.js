"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createArticle = void 0;
const articleGenerator_1 = require("./articleGenerator");
const createArticle = (data, idOfRootElement) => {
    let articleGenerator = new articleGenerator_1.ArticleGenerator();
    articleGenerator.generateArticle(data, idOfRootElement);
};
exports.createArticle = createArticle;
