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

const FeaturesSplit = ({
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

    const splitClasses = classNames(
        "split-wrap",
        invertMobile && "invert-mobile",
        invertDesktop && "invert-desktop",
        alignTop && "align-top"
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
                            video="https://player.vimeo.com/video/174002812"
                            videoTag="iframe"
                        />
                    </div>
                    <div className={splitClasses}>
                        <div className="split-item">
                            <div
                                className="split-item-content center-content-mobile reveal-from-left"
                                data-reveal-container=".split-item"
                            >
                                <div className="text-xxs text-color-secondary fw-600 tt-u mb-8">
                                    Lightning fast workflow
                                </div>
                                <h3 className="mt-0 mb-12">
                                    Data-driven insights
                                </h3>
                                <p className="m-0">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua
                                    — Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </p>
                            </div>
                            <div
                                className={classNames(
                                    "split-item-image center-content-mobile reveal-from-bottom",
                                    imageFill && "split-item-image-fill"
                                )}
                                data-reveal-container=".split-item"
                            >
                                <Image
                                    src={require("./../../assets/images/features-split-image-01.png")}
                                    alt="Features split 01"
                                    width={528}
                                    height={396}
                                />
                            </div>
                        </div>

                        <div className="split-item">
                            <div
                                className="split-item-content center-content-mobile reveal-from-right"
                                data-reveal-container=".split-item"
                            >
                                <div className="text-xxs text-color-secondary fw-600 tt-u mb-8">
                                    Lightning fast workflow
                                </div>
                                <h3 className="mt-0 mb-12">
                                    Data-driven insights
                                </h3>
                                <p className="m-0">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua
                                    — Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </p>
                            </div>
                            <div
                                className={classNames(
                                    "split-item-image center-content-mobile reveal-from-bottom",
                                    imageFill && "split-item-image-fill"
                                )}
                                data-reveal-container=".split-item"
                            >
                                <Image
                                    src={require("./../../assets/images/features-split-image-02.png")}
                                    alt="Features split 02"
                                    width={528}
                                    height={396}
                                />
                            </div>
                        </div>

                        <div className="split-item">
                            <div
                                className="split-item-content center-content-mobile reveal-from-left"
                                data-reveal-container=".split-item"
                            >
                                <div className="text-xxs text-color-secondary fw-600 tt-u mb-8">
                                    Lightning fast workflow
                                </div>
                                <h3 className="mt-0 mb-12">
                                    Data-driven insights
                                </h3>
                                <p className="m-0">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua
                                    — Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </p>
                            </div>
                            <div
                                className={classNames(
                                    "split-item-image center-content-mobile reveal-from-bottom",
                                    imageFill && "split-item-image-fill"
                                )}
                                data-reveal-container=".split-item"
                            >
                                <Image
                                    src={require("./../../assets/images/features-split-image-03.png")}
                                    alt="Features split 03"
                                    width={528}
                                    height={396}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
