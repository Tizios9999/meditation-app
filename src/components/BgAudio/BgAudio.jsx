import { forwardRef } from 'react'

// This component is responsible for loading music

function BgAudio(props, ref) {

  return (
    <audio ref={ref} loop={true} />
    )
}

const intAudioRef = forwardRef(BgAudio);

export default intAudioRef;