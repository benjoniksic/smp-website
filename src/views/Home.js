import React from "react";
// import sections
import FeaturesTiles from "../components/sections/FeaturesTiles";
import VideoModal from "../components/sections/VideoModal";
import Testimonial from "../components/sections/Testimonial";
import VideoOverlay from "../components/sections/VideoOverlay";

const Home = () => {
    return (
        <>
            <VideoOverlay />
            <FeaturesTiles />
            <VideoModal
                invertMobile
                topDivider
                imageFill
                className="illustration-section-02"
            />
            <Testimonial topDivider />
        </>
    );
};

export default Home;
