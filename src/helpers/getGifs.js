export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=c4mzjAhvfYiiJClT30KTPk3rY9cyjkgG&q=${category}&limit=5`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifs;
};
