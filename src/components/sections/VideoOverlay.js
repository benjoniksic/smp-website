import React from "react";
import Hero from "./Hero";
import videoBgCompressed from "../../assets/videos/videoBgCompressed.mp4";

const VideoOverlay = () => {
    return (
        <>
            <div className="video-container">
                <div className="video-overlay" />
                <div 
                    dangerouslySetInnerHTML={
                        { __html: `<video loop muted autoplay playsinline src="${videoBgCompressed}" style="object-fit: cover;"/>` }
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
