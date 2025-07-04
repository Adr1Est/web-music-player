import ListaCanciones from "./ListaCanciones"
import Botones from "./Botones"
import { useEffect, useRef, useState } from "react"
import { getAllSongs } from "../service/service.js"
import { Hourglass } from 'ldrs/react'
import 'ldrs/react/Hourglass.css'


function Reproductor(){
  const [songList, setSongList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentSong, setCurrentSong] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioLevel, setAudioLevel] = useState(0.3);

  const audioRef = useRef(null)

  const handleAudioLoad= () => {
    setTimeout(() => {
      if(audioRef.current) {
        audioRef.current.load()
        audioRef.current.volume = audioLevel
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true)
          })
          .catch(error => {console.error(error)})
      }
    }, 0)
  }

  const handleSongClick = (songUrl, name, artist, position) => {
    setCurrentSong({ title: name, singer: artist, number: position, preview: songUrl })
    handleAudioLoad()
  }

  const handleLastSong = (songPosition) => {
    const lastSongPosition = songPosition === 1 ? songPosition : songPosition - 1
    const lastSong = songList.filter((song) => song.position === lastSongPosition)
    setCurrentSong({ title: lastSong[0].title_short, singer: lastSong[0].artist.name, number: lastSong[0].position, preview: lastSong[0].preview})
    handleAudioLoad()
  }

  const handleNextSong = (songPosition) => {
    const nextSongPosition = songPosition === songList.length ? songPosition : songPosition + 1
    const nextSong = songList.filter((song) => song.position === nextSongPosition)
    setCurrentSong({ title: nextSong[0].title_short, singer: nextSong[0].artist.name, number: nextSong[0].position, preview: nextSong[0].preview})
    handleAudioLoad()
  }

  useEffect(()=>{
    const getSongListFromAPI = async () => {
      const dataFromAPI = await getAllSongs()
      setSongList(dataFromAPI)
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
        
    }

    getSongListFromAPI()
  }, [])

  if(isLoading){
    return(
      <div className='flex flex-col justify-center items-center w-90 md:w-160 h-170 rounded-3xl bg-green-800'>
        <Hourglass 
          size="70"
          bgOpacity="0.1"
          speed="1"
          color="#C27AFF"
        />
      </div>
    )
  }

  return (
    <div className='flex flex-col md:w-160 h-170 rounded-3xl bg-green-800 shadow-2xl shadow-purple-400 transition-shadow duration-3000 overflow-hidden'>
      <ListaCanciones songList={songList} handleClick={handleSongClick}/>
      <Botones 
        audioRef={audioRef}
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        handleLastSong={handleLastSong}
        handleNextSong={handleNextSong}
        setAudioLevel={setAudioLevel}
      />
    </div>
  )
}

export default Reproductor