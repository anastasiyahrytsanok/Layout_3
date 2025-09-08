import "./VideoCard.css";

export default function VideoCard({
  background,
  time,
  videoTitle,
  viewsCount,
  channelTitle,
}) {
  return (
    <div className="video-card">
      <div
        className="video-preview"
        style={{ background: `url(${background}) center / cover no-repeat` }}
      >
        {time && <span className="video-preview__badge">{time}</span>}
      </div>

      <h4 className="video-card__title">{videoTitle}</h4>

      <p className="video-card__description">
        <span className="video-card__description--first-part">
          {viewsCount}
        </span>
        <span className="video-card__description--second-part">
          {channelTitle}
        </span>
      </p>
    </div>
  );
}
