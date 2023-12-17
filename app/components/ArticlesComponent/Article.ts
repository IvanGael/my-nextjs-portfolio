import Step from "./Step";

// Article.ts
interface Article {
    id: number;
    title: string;
    description: string;
    image: string;
    creationDate: string;
    steps: Step[]
}
export default Article;
