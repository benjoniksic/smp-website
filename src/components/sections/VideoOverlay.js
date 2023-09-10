import React, { useRef } from "react";
import Hero from "./Hero";
import videoBgCompressed from "../../assets/videos/videoBgCompressed.mp4";

const VideoOverlay = () => {
    const videoElement = useRef(null)
    const touchStartHandler = () => {
        videoElement.current.play()
    }
    
    return (
        <>
            <div className="video-container" onTouchStart={touchStartHandler}>
                <div className="video-overlay" />
                <video src={videoBgCompressed} autoPlay loop muted ref={videoElement}/>
                <div className="video-content">
                    <Hero className="illustration-section-01" />
                </div>
            </div>
        </>
    );
};

export default VideoOverlay;
