import ArticleItem from "@/components/articles/ArticleItem";
import Pagination from "@/components/articles/Pagination";
import SearchArticlesInput from "@/components/articles/SearchArticlesInput";
import { Article } from "@/utils/types";

const ArticlesPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("faild to fetch articles");
  }
  const articles: Article[] = await response.json();

  return (
    <section className="container mx-auto px-5 py-5">
      <SearchArticlesInput />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {articles.splice(0, 8).map((item) => (
          <ArticleItem article={item} key={item.id} />
        ))}
      </div>
      <Pagination />
    </section>
  );
};

export default ArticlesPage;
