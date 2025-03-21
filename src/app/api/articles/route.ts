import { NextRequest, NextResponse } from "next/server";
import { articles } from "@/utils/data";
import { Article } from "@/utils/types";
import { createArtecleSchema } from "@/utils/validationSchemas";
import { CreatArticleDto } from "@/utils/dtos";

// @method   GET
// @route    ~/api/articles
// @desc     Get All Articles
// @access   public

export function GET(request: NextRequest) {
  return NextResponse.json(articles, { status: 200 });
}

// @method  POST
// @route   ~/api/articles
// @desc    Create All Articles
// @access  public

export async function POST(request: NextRequest) {
  const body = (await request.json()) as CreatArticleDto;

  const validation = createArtecleSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(
      { message: validation.error.errors[0].message },
      { status: 400 }
    );
  }

  const newArticle: Article = {
    title: body.title,
    body: body.body,
    id: articles.length + 1,
    userId: 200,
  };

  articles.push(newArticle);

  return NextResponse.json(newArticle, { status: 201 });
}
