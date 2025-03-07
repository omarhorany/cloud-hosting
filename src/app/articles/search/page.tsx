interface SearchArticlesPageProps {
  searchParams: { searchText: string };
}

const SearchArticlesPage = ({ searchParams }: SearchArticlesPageProps) => {
  return (
    <section className="fix-height cotainer m-auto px-5">
      <h1 className="text-2xl font-bold">
        Search Articles Page : {searchParams.searchText}
      </h1>
    </section>
  );
};

export default SearchArticlesPage;
