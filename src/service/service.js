const getAllSongs = async () => {
  const response = await fetch(`http://localhost:3000/tracks`, {
    method: 'GET',
  });

  const data = await response.json();
  return data;
}

const getAllFX = async () => {
  const response = await fetch('https://playground.4geeks.com/sound/effects', {
    method: 'GET',
  });

  const data = await response.json();
  return data;
}

export { getAllSongs, getAllFX }