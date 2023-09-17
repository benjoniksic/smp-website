import React, { useEffect } from "react";
import Hero from "./Hero";
import videoBgCompressed from "../../assets/videos/videoBgCompressed.mp4";

const VideoOverlay = () => {
    useEffect(() => {
        const videoElement = document.getElementById("home_video");
      if (videoElement?.paused === true) {
          videoElement.play();
      }
    }, []);

    return (
        <>
            <div className="video-container">
                <div className="video-overlay" />
                <div 
                    dangerouslySetInnerHTML={
                        { __html: `<video id="home_video" loop muted autoplay playsinline src="${videoBgCompressed}" style="object-fit: cover;"/>` }
                    }
                    className="video-class"
                >
                </div>
                <div className="video-content">
                    <Hero className="illustration-section-01" />
                </div>
            </div>
        </>
    );
};

export default VideoOverlay;
