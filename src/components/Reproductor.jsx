import ListaCanciones from "./ListaCanciones"
import Botones from "./Botones"
import { useEffect, useRef, useState } from "react"
import { getAllSongs } from "../service/service.js"
import { Hourglass } from 'ldrs/react'
import 'ldrs/react/Hourglass.css'


function Reproductor(){
  const [songList, setSongList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songNameAndArtist, setSongNameAndArtist] = useState({});

  const audioRef = useRef(null)

  const handleSongClick = (songUrl, name, artist) => {
    setCurrentSong(songUrl)
    setSongNameAndArtist({ title: name, singer: artist })

    setTimeout(() => {
      if(audioRef.current) {
        audioRef.current.load()
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true)
          })
          .catch(error => {console.error(error)})
      }
    }, 0)
  }

  useEffect(()=>{
    const getSongListFromAPI = async () => {
      const dataFromAPI = await getAllSongs()
      setSongList(dataFromAPI)
      setIsLoading(false)
    }

    getSongListFromAPI()
  }, [])

  useEffect(()=>{
    console.log(songList);
  }), [songList]

  if(isLoading){
    return(
      <div className='flex flex-col justify-center items-center w-160 h-170 rounded-3xl bg-green-800'>
        <Hourglass 
          size="70"
          bgOpacity="0.1"
          speed="1"
          color="#B40EE1"
        />
      </div>
    )
  }

  return (
    <div className='flex flex-col md:w-160 h-170 rounded-3xl bg-green-800 overflow-hidden'>
      <ListaCanciones songList={songList} handleClick={handleSongClick}/>
      <Botones 
        audioRef={audioRef}
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songNameAndArtist={songNameAndArtist}
      />
    </div>
  )
}

export default Reproductor