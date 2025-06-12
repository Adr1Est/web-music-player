import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Botones({audioRef, currentSong, isPlaying, setIsPlaying, songNameAndArtist}){
  const handlePlay = () => {
    if (isPlaying){
      setIsPlaying(false)
      setTimeout(() => {
        audioRef.current.pause()
      }, 0)
      
      return console.log('Reproducción pausada.')
    }
    setIsPlaying(true)
    setTimeout(() => {
      audioRef.current.play()
    }, 0)
  }

  const handleVolumeDown = () => {
    audioRef.current.volume -= 0.1
  }

  const handleVolumeUp = () => {
    audioRef.current.volume += 0.1
  }

  return(
    <div className="flex flex-row items-center gap-7 justify-between rounded-b-2xl bg-green-600 h-20 w-full">
      <div className='flex flex-col justify-center ms-3 w-1/3 h-full'>
        <p className='w-full text-sm'>{songNameAndArtist.title}</p>
        <p className='w-full text-sm'>{songNameAndArtist.singer}</p>
      </div>
      <div className='flex flex-row w-1/3 items-center gap-7 justify-center'>
        <button className='text-3xl hover:text-purple-700 cursor-pointer'>
          <FontAwesomeIcon icon="fa-backward-step" /> 
        </button>
        <button className='text-3xl hover:text-purple-700 cursor-pointer' onClick={handlePlay}>
          <FontAwesomeIcon icon={isPlaying ? "fa-pause" : "fa-play"} /> 
        </button>
        <button className='text-3xl hover:text-purple-700 cursor-pointer'>
           <FontAwesomeIcon icon="fa-forward-step" />
        </button>
      </div>
      <div className='flex flex-row w-1/3 items-center gap-3 justify-center'>
        <button className='hover:text-purple-700 cursor-pointer' onClick={handleVolumeDown}>
          <FontAwesomeIcon icon="fa-volume-down"/>
        </button>
        <button className='hover:text-purple-700 cursor-pointer' onClick={handleVolumeUp}>
          <FontAwesomeIcon icon="fa-volume-high"/>
        </button>
      </div>
      
      <audio ref={audioRef} src={currentSong}></audio>
    </div>
  )
}

export default Botones