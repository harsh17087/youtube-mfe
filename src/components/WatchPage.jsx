import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSideNav } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import LiveChat from "./LiveChat";
const WatchPage = () => {
  const [ searchParams ] = useSearchParams();
  // console.log(searchParams)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeSideNav());
  }, []);

  return (
    <div className="p-2 m-2 flex">
      <div>
      <iframe
        width="800"
        height="400"
        src={"https://www.youtube.com/embed/"+searchParams?.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      </div>
      <div>
        <LiveChat/>

      </div>
    </div>
  );
};

export default WatchPage;
