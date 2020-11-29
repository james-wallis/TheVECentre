import YouTube from 'react-youtube'

type Props = {
    videoId: string
}

const VideoPlayer = ({ videoId }: Props) => (
        <YouTube
            className="my-10 w-screen px-4 h-56 sm:px-18 sm:h-80 md:h-video md:w-video"
            videoId={videoId}
            opts={{ height: '100%', width: '100%'}}
        />
)

export default VideoPlayer
