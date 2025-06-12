import './App.css'
import Reproductor from './components/Reproductor'
import Footer from './components/Footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBackwardStep, faForwardStep, faHeadphones, faPause, faPlay, faRecordVinyl, faUser, faVolumeDown, faVolumeHigh, } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faPlay, faPause, faForwardStep, faBackwardStep, faHeadphones, faUser, faRecordVinyl, faVolumeHigh, faVolumeDown)

function App() {

  return (
    <>
      <div className='flex flex-col justify-center items-center w-full bg-gray-800 min-h-dvh'>
        <Reproductor />
        <Footer />
      </div>
    </>
  )
}

export default App
