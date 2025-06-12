import './ListaCanciones.css'
import SongCard from "./SongCard"

function ListaCanciones({songList, handleClick}){

  if(!songList || !Array.isArray(songList)){
    return (
      <div className="flex flex-col gap-0.5 w-full h-full rounded-t-2xl p-3 overflow-y-auto">
        <SongCard songNumber={"..."} songTitle={"Cargando..."} songArtist={"Cargando..."} handleClick={handleClick}/>
      </div>
    )
  }

  return(
    <div className="flex flex-col gap-0.5 w-full h-full rounded-t-2xl p-3 overflow-y-auto lista-canciones">
      {
        songList.map((track) => (
          <SongCard key={`${track.id}`} songNumber={track.position} songTitle={track.title_short} songArtist={track.artist.name} songURL={track.preview} handleClick={handleClick}/>
        ))
      }
    </div>
  )
}

export default ListaCanciones