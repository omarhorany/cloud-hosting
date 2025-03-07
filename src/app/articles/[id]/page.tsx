import AddCommentForm from "@/components/comments/AddCommentForm";
import { Article } from "@/utils/types";
import CommentItem from "../../../components/comments/CommentItem";

interface SingleArticlesPageProps {
  params: { id: string };
}

const SindleArticlesPage = async ({ params }: SingleArticlesPageProps) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch article details");
  }

  const article: Article = await response.json();

  return (
    <section className="min-h-screen flex flex-col items-center px-4 py-8 bg-gray-50">
      {/* Article Content */}
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-6 border border-gray-200 md:p-8">
        <h1 className="text-xl md:text-3xl font-bold text-gray-900">{article.title}</h1>
        <p className="text-xs md:text-sm text-gray-500 mt-2">🗓️ 20/01/2025</p>
        <p className="text-gray-700 mt-4 text-sm md:text-base leading-relaxed">{article.body}</p>
      </div>

      {/* Add Comment Section */}
      <div className="w-full max-w-3xl mt-6 p-4 md:p-6 bg-white shadow-md rounded-xl border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Leave a Comment</h2>
        <AddCommentForm />
      </div>

      {/* Comments Section */}
      <div className="w-full max-w-3xl mt-6 p-4 md:p-6 bg-white shadow-md rounded-xl border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Comments</h2>
          <CommentItem />
          <CommentItem />
          <CommentItem />
      </div>
    </section>
  );
};

export default SindleArticlesPage;