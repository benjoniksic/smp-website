import React from "react";
import SectionHeader from "../components/sections/partials/SectionHeader";
import Image from "../components/elements/Image";

const Blog = () => {
    return (
        <div className="container section">
            <div className="section-inner">
                <SectionHeader
                    data={{
                        title: "U izgradnji.",
                        paragraph:
                            "Uskoro na našem sajtu blog materijali za čitanje o iskustvima klijenata.",
                    }}
                    className="center-content"
                />
                <div className="center-content mb-32 pb-32">
                    <div
                        className="hero-figure reveal-from-bottom illustration-element-01"
                    >
                        <Image
                            className="has-shadow"
                            src={require("../assets/images/under-construction.png")}
                            alt="Under construction"
                            width={600}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
