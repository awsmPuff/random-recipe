import React from "react";

export default function YoutubeEmbed(props) {
  return (
    <iframe
      className="youtube-box"
      src={`https://www.youtube.com/embed/${props.embedId}`}
      allowFullScreen
      title="youtube_video"
    />
  );
}
