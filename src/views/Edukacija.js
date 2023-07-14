import React from "react";
import SectionHeader from "../components/sections/partials/SectionHeader";
import AboutUsTiles from "../components/sections/AboutUsTiles";

const Edukacija = () => {
    return (
        <>
            <div className="container section">
                <div className="section-inner">
                    <SectionHeader
                        data={{
                            title: "Edukacija",
                            paragraph: "Under construction",
                        }}
                        className="center-content"
                    />
                </div>
            </div>
        </>
    );
};

export default Edukacija;
