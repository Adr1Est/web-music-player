const getAllSongs = async () => {
  const response = await fetch(`https://proxy-deezer-api.onrender.com/tracks`, {
    method: 'GET',
  });

  const data = await response.json();
  return data;
}

export { getAllSongs }