import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LineWobble } from 'ldrs/react'
import 'ldrs/react/LineWobble.css'

function Botones({audioRef, currentSong, isPlaying, setIsPlaying, songNameArtistPosition, handleLastSong, handleNextSong}){
  const handlePlay = () => {
    if (isPlaying){
      setIsPlaying(false)
      setTimeout(() => {
        audioRef.current.pause()
      }, 0)
      
      return console.log('Pause')
    }
    setIsPlaying(true)
    setTimeout(() => {
      audioRef.current.play()
    }, 0)
    return console.log('Play')
  }

  const handleVolumeDown = () => {
    audioRef.current.volume -= 0.1
  }

  const handleVolumeUp = () => {
    audioRef.current.volume += 0.1
  }

  return(
    <div className="flex flex-row items-center gap-7 sm:justify-between rounded-b-2xl bg-green-600 h-20 w-full">
      <div className='flex flex-col justify-center ms-3 w-1/3 h-full overflow-y-auto'>
        <p className='w-full text-sm'>
          <FontAwesomeIcon className='mr-2' icon="fa-record-vinyl" />
          {songNameArtistPosition.title ? songNameArtistPosition.title : <LineWobble
            size="50"
            stroke="3"
            bgOpacity="0.1"
            speed="1.75"
            color="black" 
          />}
        </p>
        <p className='w-full text-sm'>
          <FontAwesomeIcon className='mr-2' icon="fa-user" />
          {songNameArtistPosition.singer? songNameArtistPosition.singer : <LineWobble
            size="50"
            stroke="3"
            bgOpacity="0.1"
            speed="1.75"
            color="black" 
          />}
        </p>
      </div>
      <div className='flex flex-row w-1/3 items-center gap-7 justify-center'>
        <button className='text-3xl hover:text-purple-700 cursor-pointer'onClick={() => handleLastSong(songNameArtistPosition.number)}>
          <FontAwesomeIcon icon="fa-backward-step" /> 
        </button>
        <button className='text-3xl hover:text-purple-700 cursor-pointer' onClick={handlePlay}>
          <FontAwesomeIcon icon={isPlaying ? "fa-pause" : "fa-play"} /> 
        </button>
        <button className='text-3xl hover:text-purple-700 cursor-pointer' onClick={() => handleNextSong(songNameArtistPosition.number)}>
           <FontAwesomeIcon icon="fa-forward-step" />
        </button>
      </div>
      <div className='hidden sm:flex flex-row w-1/3 items-center gap-5 justify-center '>
        <button className='hover:text-purple-700 cursor-pointer' onClick={handleVolumeDown}>
          <FontAwesomeIcon icon="fa-volume-down"/>
        </button>
        <button className='hover:text-purple-700 cursor-pointer' onClick={handleVolumeUp}>
          <FontAwesomeIcon icon="fa-volume-high"/>
        </button>
      </div>
      
      <audio ref={audioRef} src={currentSong} onEnded={() => setIsPlaying(false)}></audio>
    </div>
  )
}

export default Botones