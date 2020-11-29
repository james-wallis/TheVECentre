import YouTube from 'react-youtube'
import { YouTubeVideo } from '../interfaces'

type Props = {
    videos: YouTubeVideo[]
}

const VideoGallery = ({ videos }: Props) => (
    <div className="flex w-screen flex-wrap justify-center items-center p-8">
        {videos.map(video => (
            <div key={video.snippet.resourceId.videoId} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
                <YouTube
                    className="h-52"
                    videoId={video.snippet.resourceId.videoId}
                    opts={{ height: '100%', width: '100%'}}
                />
            </div>
        ))}
    </div>
)

export default VideoGallery
