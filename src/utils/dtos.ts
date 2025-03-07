// Dto(data tranfer object)
export interface CreatArticleDto {
  title: string;
  body: string;
}

export interface UpdateArticleDto {
  title?: string;
  body?: string;
}
