import { NextResponse } from 'next/server'

type VideoItem = {
  id: string
  title: string
  description: string
  thumbnail: string
  publishedAt: string
}

async function fetchPlaylist(playlistId: string, apiKey: string): Promise<VideoItem[]> {
  const videos: VideoItem[] = []
  let nextPageToken = ''

  do {
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}${nextPageToken ? `&pageToken=${nextPageToken}` : ''}`
    const res = await fetch(url, { next: { revalidate: 3600 } })
    const data = await res.json()

    if (data.error) throw new Error(data.error.message)

    const items: VideoItem[] = (data.items || [])
      .filter(
        (item: any) =>
          item.snippet.title !== 'Deleted video' &&
          item.snippet.title !== 'Private video'
      )
      .map((item: any) => ({
        id: item.snippet.resourceId.videoId,
        title: item.snippet.title,
        description: item.snippet.description || '',
        thumbnail:
          item.snippet.thumbnails?.maxres?.url ||
          item.snippet.thumbnails?.high?.url ||
          item.snippet.thumbnails?.medium?.url ||
          `https://img.youtube.com/vi/${item.snippet.resourceId.videoId}/mqdefault.jpg`,
        publishedAt: item.snippet.publishedAt,
      }))

    videos.push(...items)
    nextPageToken = data.nextPageToken || ''
  } while (nextPageToken)

  return videos
}

export async function GET() {
  const apiKey = process.env.YOUTUBE_API_KEY
  const playlistIds = [
    process.env.YOUTUBE_PLAYLIST_ID_1,
    process.env.YOUTUBE_PLAYLIST_ID_2,
    process.env.YOUTUBE_PLAYLIST_ID_3,
  ].filter(Boolean) as string[]

  if (!apiKey || playlistIds.length === 0) {
    return NextResponse.json(
      { error: 'Missing API key or playlist IDs' },
      { status: 500 }
    )
  }

  try {
    // Fetch all playlists in parallel
    const results = await Promise.all(
      playlistIds.map((id) => fetchPlaylist(id, apiKey))
    )

    // Merge all videos, remove duplicates by video ID, sort newest first
    const seen = new Set<string>()
    const allVideos = results
      .flat()
      .filter((v) => {
        if (seen.has(v.id)) return false
        seen.add(v.id)
        return true
      })
      .sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      )

    return NextResponse.json({ videos: allVideos })
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || 'Failed to fetch videos' },
      { status: 500 }
    )
  }
}