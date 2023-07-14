import React, { useState } from "react";

const Banner = ({ ...props }) => {
    const [bannerOpen, setBannerOpen] = useState(true);

    return (
        <>
            {bannerOpen && (
                <div {...props} className="banner">
                    <div className="banner-inner text-xxs">
                        <div className="banner-container">
                            <span className="banner-separator">
                                Posjetite našu
                            </span>{" "}
                            <a
                                className="banner-link banner-link-facebook"
                                href="https://github.com/cruip/open-react-template"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Facebook
                            </a>{" "}
                            <span className="banner-separator">ili</span>{" "}
                            <a
                                className="banner-link banner-link-instagram"
                                href="https://cruip.com/open-pro/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Instagram
                            </a>{" "}
                            <span className="banner-separator">stranicu</span>
                        </div>
                        <button
                            className="banner-close"
                            onClick={() => setBannerOpen(false)}
                        >
                            <span className="screen-reader">Close</span>
                            <svg viewBox="0 0 16 16">
                                <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Banner;
