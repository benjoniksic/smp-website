import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";

const propTypes = {
    ...SectionTilesProps.types,
};

const defaultProps = {
    ...SectionTilesProps.defaults,
};
const AboutUsTiles = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    pushLeft,
    ...props
}) => {
    const outerClasses = classNames(
        "features-tiles section",
        "removePadding",
        topOuterDivider && "has-top-divider",
        bottomOuterDivider && "has-bottom-divider",
        hasBgColor && "has-bg-color",
        invertColor && "invert-color",
        className
    );

    const innerClasses = classNames(
        "features-tiles-inner section-inner pt-0",
        topDivider && "has-top-divider",
        bottomDivider && "has-bottom-divider"
    );

    const tilesClasses = classNames(
        "tiles-wrap center-content",
        pushLeft && "push-left"
    );

    return (
        <section {...props} className={outerClasses}>
            <div className="container">
                <div className={innerClasses}>
                    {/* <SectionHeader data={sectionHeader} className="center-content" /> */}
                    <div className={tilesClasses}>
                        <div className="tiles-item reveal-from-bottom">
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div className="features-tiles-item-image mb-16">
                                        <img
                                            src={require("./../../assets/images/trophy.jpg")}
                                            width={400}
                                            height={400}
                                            alt={"gg"}
                                        />
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">
                                        Master licenca
                                    </h4>
                                    <p className="m-0 text-sm">
                                        Da bi tretman mikropigmentacije bio uspješno izveden
                                        potrebna je kvalitetna edukacija,
                                        posjedovanje prirodnih vještina, strpljenja i
                                        preciznosti. Pored samostalne edukacije, naša <b>Aida</b> je
                                        dostigla sami vrh izučavanja mikropigmentacije sa master
                                        certifikatom iz Londona!
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="tiles-item reveal-from-bottom"
                            data-reveal-delay="200"
                        >
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div className="features-tiles-item-image mb-16">
                                        <img
                                            src={require("./../../assets/images/clients.jpg")}
                                            width={400}
                                            height={400}
                                            alt={"gg"}
                                        />
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">
                                        Broj zadovoljnih klijenata
                                    </h4>
                                    <p className="m-0 text-sm">
                                        Velikom broju klijenata smo vratili
                                        samopouzdanje i ispunili očekivanja! 
                                        Uz pažljivo odabranu nijansu
                                        boje, koja odgovara prirodnoj folikuli
                                        kose, naši klijenti su dobili konačne
                                        rezultate nakon samo par tretmana u 
                                        našem studiju u Sarajevu!
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="tiles-item reveal-from-bottom"
                            data-reveal-delay="400"
                        >
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div className="features-tiles-item-image mb-16">
                                        <img
                                            src={require("./../../assets/images/experience.jpg")}
                                            width={400}
                                            height={400}
                                            alt={"gg"}
                                        />
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">
                                        Godine iskustva
                                    </h4>
                                    <p className="m-0 text-sm">
                                        Naš studio za mikropigmentaciju pruža 
                                        usluge još od 2019. godine čemu svjedoče
                                        mnogi zadovoljni klijenti i foto-video
                                        materijal koji možete pronaći na našoj stranici
                                        i društvenim mrežama. Pored toga naš salon
                                        drži periodične grupne edukacije za nove 
                                        potencijalne artiste mikropigmentacije!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

AboutUsTiles.propTypes = propTypes;
AboutUsTiles.defaultProps = defaultProps;

export default AboutUsTiles;
