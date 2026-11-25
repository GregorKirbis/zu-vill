"use client";

import React from "react";

interface VideoBlockProps {
  id?: string;
  smallTitle?: string;
  title?: string;
  description?: string;
  youtubeUrl: string;
}

function extractYouTubeId(input: string): string | null {
  if (!input) return null;
  const trimmed = input.trim();
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    return trimmed;
  }
  const match = trimmed.match(
    /(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : null;
}

export const VideoBlock: React.FC<VideoBlockProps> = ({
  id,
  smallTitle,
  title,
  description,
  youtubeUrl,
}) => {
  const videoId = extractYouTubeId(youtubeUrl);
  if (!videoId) return null;

  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0`;
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <div id={id} className="section-full content-inner bg-gray">
      <div className="container">
        {(smallTitle || title || description) && (
          <div className="section-head text-center m-b30">
            {smallTitle && <span className="text-primary">{smallTitle}</span>}
            {title && <h2 className="title">{title}</h2>}
            <div className="dlab-separator bg-primary"></div>
            {description && (
              <p className="m-t15" style={{ maxWidth: 720, margin: "15px auto 0" }}>
                {description}
              </p>
            )}
          </div>
        )}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-12">
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
                overflow: "hidden",
                borderRadius: 0,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.12)",
                backgroundColor: "#000",
              }}
            >
              <iframe
                src={embedUrl}
                title={title || "YouTube video"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                }}
              />
            </div>
            <div className="text-center m-t15">
              <a
                href={watchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary"
                style={{ fontSize: 14 }}
              >
                Oglejte si video na YouTube &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBlock;
