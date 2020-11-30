export interface ILink {
    text: string
    href: string
}

export interface PageProps {
    canonical: string
}

export interface YouTubeVideo {
    etag: string
    id: string
    kind: string
    snippet: {
        channelId: string
        channelTitle: string
        description: string
        playlistId: string
        position: number
        publishedAt: string
        resourceId: {
            kind: string,
            videoId: string,
        }
        thumbnails: object
        title: string
    }
}
