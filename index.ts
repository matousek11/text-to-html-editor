import { ArticleGenerator } from "./articleGenerator";

export const createArticle = (data: string, idOfRootElement: string) => {
  let articleGenerator: ArticleGenerator = new ArticleGenerator();
  articleGenerator.generateArticle(data, idOfRootElement);
};
