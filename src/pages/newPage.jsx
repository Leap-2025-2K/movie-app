import useSWR from "swr";

const fetcher = (url) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
    },
  }).then((res) => {
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    return res.json();
  });

const Category = () => {
  const url = `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}movie/574475/videos?language=en-US`;

  const { data, error, loading } = useSWR(url, fetcher);

  return <div>category</div>;
};

export default Category;
