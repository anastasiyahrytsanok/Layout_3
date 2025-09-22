import "./VideoBlock.css";

import poster from "../../assets/video-poster.png";
import PlayerBtn from "../PlayerBtn/PlayerBtn";
import PauseIcon from "../../assets/svg/PauseIcon";
import NextIcon from "../../assets/svg/NextIcon";
import VolumeIcon from "../../assets/svg/VolumeIcon";
import SubtitlesIcon from "../../assets/svg/SubtitlesIcon";
import SettingsIcon from "../../assets/svg/SettingsIcon";
import FullScreenIcon from "../../assets/svg/FullScreenIcon";
import SizeIcon from "../../assets/svg/SizeIcon";
import MoreIcon from "../../assets/svg/MoreIcon";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import LikeIcon from "../../assets/svg/LikeIcon";
import DislikeIcon from "../../assets/svg/DislikeIcon";
import ShareIcon from "../../assets/svg/ShareIcon";
import ArrowDownIcon from "../../assets/svg/ArrowDownIcon";
import PauseSmallIcon from "../../assets/svg/PauseSmallIcon";
import VolumeSmallIcon from "../../assets/svg/VolumeSmallIcon";
import avatar from "../../assets/channel-avatar.png";

import { ICON_COLORS, BREADCRUMBS_COLORS } from "../../constants.js";

export default function VideoBlock() {
  return (
    <div className="watch">
      <main className="watch__main">
        <div className="player">
          <img className="player__poster" src={poster} alt="player  poster" />
          <div className="player__controls">
            <div className="player__time">
              <p>1:34</p>
              <p>19:00</p>
            </div>
            <div className="player__progress">
              <span
                className="player__progress-fill"
                style={{ width: "25%" }}
              />
            </div>
            <div className="player__buttons">
              <div className="player__buttons--left">
                <PlayerBtn icon={<PauseIcon />} color={ICON_COLORS.BRIGHT} />
                <PlayerBtn icon={<NextIcon />} color={ICON_COLORS.BRIGHT} />
                <div className="volume-container">
                  <PlayerBtn icon={<VolumeIcon />} color={ICON_COLORS.BRIGHT} />
                  <div className="volume__progress">
                    <span
                      className="volume__progress-fill"
                      style={{ width: "35%" }}
                    />
                  </div>
                </div>
              </div>
              <div className="player__buttons--right">
                <PlayerBtn icon={<SubtitlesIcon />} color={ICON_COLORS.DARK} />
                <PlayerBtn icon={<SettingsIcon />} color={ICON_COLORS.DARK} />
                <PlayerBtn icon={<SizeIcon />} color={ICON_COLORS.DARK} />
                <PlayerBtn icon={<FullScreenIcon />} color={ICON_COLORS.DARK} />
              </div>
            </div>
          </div>
          <div className="player__controls--mobile">
            <PlayerBtn icon={<PauseSmallIcon />} color={ICON_COLORS.BRIGHT} />
            <p className="player__time player__time--left">1:34</p>
            <div className="player__progress">
              <span
                className="player__progress-fill"
                style={{ width: "25%" }}
              />
            </div>
            <p className="player__time player__time--right">19:00</p>
            <PlayerBtn icon={<VolumeSmallIcon />} color={ICON_COLORS.BRIGHT} />
          </div>
        </div>

        <div className="watch__title--container">
          <h1 className="watch__title">Dude You Re Getting A Telescope</h1>
          <button className="watch__more--mobile">
            <ArrowDownIcon />
          </button>
        </div>
        <div className="watch__details">
          <p className="watch__meta">123k views</p>
          <div className="watch__actions">
            <div className="watch__actions--breadcrumbs">
              <Breadcrumb
                icon={<LikeIcon />}
                text={"123k"}
                color={BREADCRUMBS_COLORS.GREY}
                clickable
              />
              <Breadcrumb
                icon={<DislikeIcon />}
                text={"435k"}
                color={BREADCRUMBS_COLORS.GREY}
                clickable
              />
              <Breadcrumb
                icon={<ShareIcon />}
                text={"Share"}
                color={BREADCRUMBS_COLORS.GREY}
                clickable
              />
            </div>
            <button className="watch__more">
              <MoreIcon />
            </button>
          </div>
        </div>

        <section className="channel">
          <div className="channel__container">
            <img className="channel__avatar" src={avatar} alt="Food & Drink" />
            <div className="channel__body">
              <h2 className="channel__name">Food &amp; Drink</h2>
              <div className="channel__published">Published on 14 Jun</div>
              <p className="channel__desc">
                A successful marketing plan relies heavily on the pulling-power
                of advertising copy. Writing result-oriented ad copy is
                difficult, as it must appeal to, entice, and convince consumers
                to take action. There is no magic formula to write perfect ad
                copy; it is based on a number of factors, including ad
                placement, demographic, even the consumer’s mood when they see
                your ad.
              </p>
              <button className="channel__more">Show more</button>
            </div>
          </div>
          <Breadcrumb
            text={"Subscribe 2.3m"}
            color={BREADCRUMBS_COLORS.RED}
            clickable
            className="channel__subscribe"
          />
          <button className="channel__subscribe--mobile">Subscribe</button>
        </section>
      </main>
    </div>
  );
}
