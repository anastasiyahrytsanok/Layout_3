import "./PlayerBtn.css";

export default function PlayerBtn({ icon, color = "" }) {
  return <button className={`player-btn player-btn--${color}`}>{icon}</button>;
}
