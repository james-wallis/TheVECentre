import React from 'react'
import { YouTubeVideo } from '../interfaces'
import { YouTubePlayerWrapper } from './VideoPlayer'

type Props = {
    videos: YouTubeVideo[]
}

const VideoGallery = ({ videos }: Props) => (
    <div className="flex w-screen flex-wrap justify-center items-center p-8">
        {videos.map(video => (
            <div key={video.snippet.resourceId.videoId} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2 lg:p-4 xl:p-5 h-52 lg:h-56 xl:h-72">
                <YouTubePlayerWrapper videoId={video.snippet.resourceId.videoId} light />
            </div>
        ))}
    </div>
)

export default VideoGallery
