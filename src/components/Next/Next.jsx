import "./Next.css";
import VideoCard from "../VideoPreview/VideoCard";
import video1 from "../../assets/video1.png";
import video2 from "../../assets/video2.png";
import video3 from "../../assets/video3.png";
import video4 from "../../assets/video4.png";

const nextVideos = [
  {
    background: video1,
    time: "8:00",
    videoTitle: "Baby Monitor Technology",
    viewsCount: "123k views",
    channelTitle: "Dollie Blair",
  },
  {
    background: video2,
    time: "8:00",
    videoTitle: "A Good Autoresponder",
    viewsCount: "123k views",
    channelTitle: "Dollie Blair",
  },
  {
    background: video3,
    time: "8:00",
    videoTitle: "Selecting The Right Hotel",
    viewsCount: "123k views",
    channelTitle: "Dollie Blair",
  },
  {
    background: video4,
    time: "8:00",
    videoTitle: "Baby Monitor",
    viewsCount: "123k views",
    channelTitle: "Dollie Blair",
  },
];

export default function Next() {
  return (
    <div className="next">
      <div className="next__title--container">
        <h2 className="next__title">Next</h2>
        <div className="autoplay">
          <p className="autoplay__text">AUTOPLAY</p>
          <label className="switch">
            <input className="switch__input" type="checkbox" />
            <span className="switch__track">
              <span className="switch__thumb"></span>
            </span>
          </label>
        </div>
      </div>
      {nextVideos.map((video) => (
        <VideoCard
          key={video.videoTitle}
          background={video.background}
          time={video.time}
          videoTitle={video.videoTitle}
          viewsCount={video.viewsCount}
          channelTitle={video.channelTitle}
        ></VideoCard>
      ))}
    </div>
  );
}
