import { ArticleGenerator } from "./articleGenerator";

const createArticle = (data, idOfRootElement) => {
  let articleGenerator = new ArticleGenerator();
  articleGenerator.generateArticle(data, idOfRootElement);
};
