import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Footer(){

  return(
    <div className="flex flex-row justify-center items-center">
      <p className="text-purple-50 opacity-30">&copy; Adr1Est | </p>
      <a href="https://github.com/Adr1Est/web-music-player" target="_blank">
        <FontAwesomeIcon className="ms-1 text-purple-50 hover:text-purple-900 opacity-30 hover:opacity-100" icon={['fab', 'github']}/>
      </a>
    </div>
  )
}

export default Footer