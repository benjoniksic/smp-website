import React from "react";
import Hero from "./Hero";
import videoBG from "../../assets/videos/videoBgCompressed.mp4";

const VideoOverlay = () => {
    return (
        <>
            <div className="video-container">
                <div className="video-overlay" />
                <video src={videoBG} autoPlay loop muted />
                <div className="video-content">
                    <Hero className="illustration-section-01" />
                </div>
            </div>
        </>
    );
};

export default VideoOverlay;
