import { useEffect, useState } from "react"
import { YOUTUBE_MP_API } from "../utils/constant"
import VideoCard from "./VideoCard"
import { Link } from "react-router-dom"

const VideoContainer=()=>{

    const [videos,setVideos] = useState([])
    
    useEffect(()=>{
        fetchVideosData()
    },[])

    const fetchVideosData= async ()=>{
        const data = await fetch(YOUTUBE_MP_API)
        const json = await data.json()
        
        setVideos(json.items)
        
    }
    
    return (
        <div className="flex flex-wrap">
            {
                videos.map((video,index)=>(
                   <Link key={index} to={"/watch?v=" + video.id}> <VideoCard key={video.id} videoInfo={video}/></Link>
                ))
            }
        </div>
    )
}

export default VideoContainer