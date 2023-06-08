
import {useState} from 'react'
import YouTube from 'react-youtube';



const YoutubeVideo = () => {

    const [videoId, setVideoId] = useState('KjY94sAKLlw');

    return (
        <>
        <h1 className="text-center my-5">Recently studying Next JS</h1>
      <YouTube className="text-center  mx-auto" videoId={videoId} />
        </>
    )
}

export default YoutubeVideo