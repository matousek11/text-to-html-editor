import { ArticleGenerator } from "./articleGenerator";

const createArticle = (data: string, idOfRootElement: string) => {
  let articleGenerator: ArticleGenerator = new ArticleGenerator();
  articleGenerator.generateArticle(data, idOfRootElement);
};
