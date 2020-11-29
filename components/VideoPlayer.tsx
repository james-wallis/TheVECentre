import YouTube from 'react-youtube'

type Props = {
    videoId: string
}

const VideoPlayer = ({ videoId }: Props) => (
    // <div className="my-10 w-screen">
        <YouTube
            // sm:px-18 sm:h-72 md:px-36 md:h-80 lg:px-56 lg:h-92 xl:px-96
            className="my-10 w-screen px-4 h-56 sm:px-18 sm:h-80 md:h-video md:w-video"
            videoId={videoId}
            opts={{ height: '100%', width: '100%'}}
        />
    // </div>
)

export default VideoPlayer
