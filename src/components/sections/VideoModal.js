import React, { useState } from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import Modal from "../elements/Modal";

const propTypes = {
    ...SectionSplitProps.types,
};

const defaultProps = {
    ...SectionSplitProps.defaults,
};

const VideoModal = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    invertMobile,
    invertDesktop,
    alignTop,
    imageFill,
    ...props
}) => {
    const outerClasses = classNames(
        "features-split section",
        topOuterDivider && "has-top-divider",
        bottomOuterDivider && "has-bottom-divider",
        hasBgColor && "has-bg-color",
        invertColor && "invert-color",
        className
    );

    const innerClasses = classNames(
        "features-split-inner section-inner",
        topDivider && "has-top-divider",
        bottomDivider && "has-bottom-divider"
    );

    const sectionHeader = {
        title: "Neinvazivna metoda nanošenja pigmenta",
        paragraph:
            " Mikroiglicama se pigment veoma površnim ubodima nanosi pod kožu. Ubodi su dubine između 1-2mm, konzistentni su kako bi se boja ujednačeno nanosila. Obično je potrebno minimum dva tretmana, a nekad i tri kako bi se kompletirao efekat.",
    };

    const [videoModalActive, setVideomodalactive] = useState(false);

    const openModal = (e) => {
        e.preventDefault();
        setVideomodalactive(true);
    };

    const closeModal = (e) => {
        e.preventDefault();
        setVideomodalactive(false);
    };

    return (
        <section {...props} className={outerClasses}>
            <div className="container">
                <div className={innerClasses}>
                    <SectionHeader
                        data={sectionHeader}
                        className="center-content"
                    />
                    <div className="center-content mb-32 pb-32">
                        <div
                            className="hero-figure reveal-from-bottom illustration-element-01"
                            data-reveal-value="20px"
                            data-reveal-delay="800"
                        >
                            <a
                                data-video="https://player.vimeo.com/video/174002812"
                                href="#0"
                                aria-controls="video-modal"
                                onClick={openModal}
                            >
                                <Image
                                    className="has-shadow"
                                    src={require("./../../assets/images/video-placeholder.jpg")}
                                    alt="Hero"
                                    width={896}
                                    height={504}
                                />
                            </a>
                        </div>
                        <Modal
                            id="video-modal"
                            show={videoModalActive}
                            handleClose={closeModal}
                            video={require("./../../assets/videos/videoModalv3Compressed.mp4")}
                            videoTag="iframe"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

VideoModal.propTypes = propTypes;
VideoModal.defaultProps = defaultProps;

export default VideoModal;
