export const fetcher = (url) =>
  fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
    },
  }).then((res) => {
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    return res.json();
  });
