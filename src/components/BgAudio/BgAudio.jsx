import { forwardRef } from 'react'
// import Sound from 'react-sound'

function BgAudio(props, ref) {

  return (
    <audio ref={ref} loop={true} />
    )
}

const intAudioRef = forwardRef(BgAudio);

export default intAudioRef;