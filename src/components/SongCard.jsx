import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SongCard({songNumber, songTitle, songArtist, songURL, handleClick}){

  if(!songURL) {songURL = "Cargando..."}

  return(
    <div className="flex flex-row justify-between items-center w-full rounded-2xl p-2 bg-green-900 hover:bg-purple-700 text-green-200">
      <div className='flex justify-center items-center gap-5'>
        <p className="text-lg ms-4">
          <FontAwesomeIcon className='mr-2' icon="fa-headphones" />
          {songNumber}
        </p>
        <div className="flex flex-col">
          <p className="text-lg">
            <FontAwesomeIcon className='mr-2' icon="fa-record-vinyl" />
            {songTitle}
          </p>
          <p className="text-lg">
            <FontAwesomeIcon className='mr-2' icon="fa-user" />
            {songArtist}
          </p>
        </div>
      </div>
      <button className='mr-5 cursor-pointer' onClick={() => handleClick(songURL, songTitle, songArtist)}>
        <FontAwesomeIcon className='hover:text-green-50' icon="fa-play"/>
      </button>
    </div>
  )
}

export default SongCard