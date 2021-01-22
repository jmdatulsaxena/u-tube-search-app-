import { useState, useEffect } from 'react'
import youtube from '../apis/youtube'

const useVideos = (defaultSearchTerm) => {
  const KEY = 'AIzaSyCF7e6k6PrBB7Ispg41wGHK50T_veGG2N8'
  const [videos, setVideos] = useState([])
  useEffect(() => {
    search(defaultSearchTerm)
  }, [defaultSearchTerm])

  const search = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
      }
    })
    setVideos(response.data.items)
  }
  return [videos, search]
}

export default useVideos
