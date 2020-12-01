import React from 'react'
import ReactPlayer from 'react-player/lazy'

interface Props {
    videoId: string
}

interface WrapperProps extends Props {
    light?: boolean
    controls?: boolean
}

export const YouTubePlayerWrapper = ({ videoId, light, controls = true }: WrapperProps) => (
    <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`} controls={controls} light={light} height="100%" width="100%" />
)

const VideoPlayer = ({ videoId }: Props) => (
    <div className="my-10 w-screen px-4 h-56 sm:px-18 sm:h-80 md:h-video md:w-video">
        <YouTubePlayerWrapper
            videoId={videoId}
        />
    </div>
)

export default VideoPlayer
