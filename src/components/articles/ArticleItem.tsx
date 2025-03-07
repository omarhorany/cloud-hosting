import Link from 'next/link'
import { Article } from '@/utils/types'



interface ArticlesItemProps {
    article: Article
}


const ArticlesItem = ({ article }: ArticlesItemProps) => {
    return (
        <div
            className="flex flex-col p-6 rounded-2xl shadow-lg border border-gray-300 bg-white transition-transform transform hover:scale-105 hover:shadow-2xl h-[250px]"
        >
            <h1 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 h-[48px]">
                {article.title}
            </h1>

            <p className="text-gray-600 line-clamp-3 h-[72px]">
                {article.body}
            </p>

            <div className="mt-auto">
                <Link
                    href={`/articles/${article.id}`}
                    className="inline-block w-full text-center px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700"
                >
                    Read More
                </Link>
            </div>
        </div>
    )
}

export default ArticlesItem
