import React from "react";
import SectionHeader from "../components/sections/partials/SectionHeader";
import AboutUsTiles from "../components/sections/AboutUsTiles";

const ONama = () => {
    return (
        <>
            <div className="container section">
                <div className="section-inner">
                    <SectionHeader
                        data={{
                            title: "O nama",
                            paragraph:
                                "Sarajevo Mikro Pigmentacija je salon osnovan 2019. godine kao prvi centar za mikropigmentaciju u Bosni i Hercegovini. Od tada, svakodnevno se razvijamo i napredujemo da bismo našim klijentima pružili maksimalno profesionalnu uslugu vrhunskog kvaliteta.",
                        }}
                        className="center-content"
                    />
                    <AboutUsTiles />
                </div>
            </div>
        </>
    );
};

export default ONama;
