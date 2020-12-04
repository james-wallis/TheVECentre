import React from 'react'
import Layout from '../components/Layout'
import { MainHeading, TextBlock } from '../components/PageElements'
import VideoGallery from '../components/VideoGallery';
import { YouTubeVideo } from '../interfaces';
const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';
const playlistId = 'PLZVn3qin-fWbSUqmGv3m63atAwIH4mCaf';

interface PageProps {
    videos: YouTubeVideo[]
}

const GalleryPage = ({ videos }: PageProps) => {
    return (
        <Layout title="Gallery" description="A selection of videos showing what is on offer at The VECentre">
            <MainHeading thin>The gallery</MainHeading>
            <TextBlock>
                <p>Our 3D projects have included individual rooms, galleries and exhibition stands.</p>
            </TextBlock>
            <TextBlock>
                <p>3D models both geometric and sculpted object from food to teddies.</p>
            </TextBlock>
            <VideoGallery videos={videos} />
    </Layout>
    )
}

export async function getStaticProps(): Promise<{ props: PageProps }> {
    const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=${playlistId}&key=${process.env.GOOGLE_API_KEY}`)
    const data = await res.json();
    return {
        props: {
            videos: data.items
        }
    }
}

export default GalleryPage
