import {useSelector} from "react-redux"
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HistoryIcon from '@mui/icons-material/History';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DownloadIcon from '@mui/icons-material/Download';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MovieIcon from '@mui/icons-material/Movie';
import SensorsIcon from '@mui/icons-material/Sensors';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import { Link } from "react-router-dom";
const Sidebar=()=>{

    const isMenuOpen =useSelector((store) => store.app.sideNavOpen)

    if(!isMenuOpen) return null
    
    return (
        <div className="p-2 m-1 shadow-lg grid-col-1">
            <h1 className="font-bold">General</h1>
            <ul className='py-2'>
                <Link to={'/'}><li className="py-2"><HomeIcon/> &nbsp; &nbsp; Home</li></Link>
                <li className="py-2"><WhatshotIcon/>&nbsp; &nbsp; Shorts</li>
                <li className="py-2"><SubscriptionsIcon/>&nbsp; &nbsp; Subscriptions</li>
                <li className="py-2"><LibraryMusicIcon/>&nbsp; &nbsp;YouTube Music</li>
            </ul>
            <hr/>
            <h1 className="font-bold py-2">You</h1>
            <ul className='py-2'>
                <li className="py-2"><AccountCircleIcon/>&nbsp; &nbsp;Your Channel</li>
                <li className="py-2"><HistoryIcon/>&nbsp; &nbsp;History</li>
                <li className="py-2"><PlaylistPlayIcon/>&nbsp; &nbsp;Playlists</li>
                <li className="py-2"><PlayCircleOutlineIcon/>&nbsp; &nbsp;Your videos</li>
                <li className="py-2"><WatchLaterIcon/>&nbsp; &nbsp;Watch Later</li>
                <li className="py-2"><ThumbUpIcon/>&nbsp; &nbsp;Liked Videos</li>
                <li className="py-2"><DownloadIcon/>&nbsp; &nbsp;Downloads</li>
            </ul>
            <hr/>
            <h1 className="font-bold py-2">Subscriptions</h1>
            <ul className='py-2'>
                <li className="py-2">&nbsp; &nbsp; ANI News</li>
                <li className="py-2">&nbsp; &nbsp;MHRD India</li>
                <li className="py-2">&nbsp; &nbsp;RBI News</li>
                <li className="py-2">&nbsp; &nbsp;Akshay Saini</li>
            </ul>
            <hr/>
            <h1 className="font-bold py-2">Explore</h1>
            <ul className='py-2'>
                <li className="py-2"><TrendingUpIcon/>&nbsp; &nbsp;Trending</li>
                <li className="py-2"><LocalMallIcon/>&nbsp; &nbsp;Shopping</li>
                <li className="py-2"><MusicNoteIcon/>&nbsp; &nbsp;Music</li>
                <li className="py-2"><MovieIcon/>&nbsp; &nbsp;Movies</li>
                <li className="py-2"><SensorsIcon/>&nbsp; &nbsp;Live</li>
                <li className="py-2"><SportsEsportsIcon/>&nbsp; &nbsp;Gaming</li>
                <li className="py-2"><NewspaperIcon/>&nbsp; &nbsp;News</li>
                <li className="py-2"><EmojiEventsIcon/>&nbsp; &nbsp;Sports</li>
                <li className="py-2"><LibraryBooksIcon/>&nbsp; &nbsp;Courses</li>
                <li className="py-2"><PodcastsIcon/>&nbsp; &nbsp;Podcasts</li>
            </ul>
        </div>
    )
}

export default Sidebar