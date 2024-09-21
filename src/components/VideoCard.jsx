const VideoCard = ({ videoInfo }) => {
  // console.log(videoInfo);
  const { snippet, statistics } = videoInfo;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div>
      <div className="m-2 p-2 shadow-lg w-60 cursor-pointer h-full">
        <img className="rounded-lg" src={thumbnails.medium.url} />
        <ul>
          <li className="font-bold">{title}</li>
          <li>{channelTitle}</li>
          <li>👁{statistics.viewCount} views</li>
        </ul>
      </div>
    </div>
  );
};

export default VideoCard;
