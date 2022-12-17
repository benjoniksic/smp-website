import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
    ...SectionTilesProps.types,
};

const defaultProps = {
    ...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
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

    const sectionHeader = {
        title: "Build up the whole picture",
        paragraph:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.",
    };

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
                                        <Image
                                            src={require("./../../assets/images/feature-tile-icon-01.svg")}
                                            alt="Features tile icon 01"
                                            width={200}
                                            height={200}
                                        />
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">
                                        Vratite samopouzdanje
                                    </h4>
                                    <p className="m-0 text-sm">
                                        Velikom broju klijenata smo vratili
                                        samopouzdanje SMP tehnikom ubrizgavanja
                                        pigmenta! Uz pažljivo odabranu nijansu
                                        boje, koja odgovara prirodnoj folikuli
                                        kose, naši klijenti su dobili konačne
                                        rezultate u samo 2 do 3 posjete SMP
                                        centru u Sarajevu!
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
                                        <Image
                                            src={require("./../../assets/images/feature-tile-icon-02.svg")}
                                            alt="Features tile icon 02"
                                            width={200}
                                            height={200}
                                        />
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">
                                        Master osoblje
                                    </h4>
                                    <p className="m-0 text-sm">
                                        Da biste uspješno izveli SMP tretman,
                                        potrebno je jako puno edukacija,
                                        prirodnih vještina, strpljenja i
                                        preciznosti. Ukratko, ovaj tretman ne
                                        može raditi svako a naša <b>Aida</b> je
                                        dostigla sami vrh edukacija sa master
                                        certifikatom iz Londona!
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
                                        <Image
                                            src={require("./../../assets/images/feature-tile-icon-03.svg")}
                                            alt="Features tile icon 03"
                                            width={200}
                                            height={200}
                                        />
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">
                                        Robust Workflow
                                    </h4>
                                    <p className="m-0 text-sm">
                                        Upoznajte se sa nehirurškim zahvatom
                                        kojim se vizuelno dodaje gustina na
                                        dijelovima glave gdje je kosa
                                        prorijeđena usljed ćelavosti, ožiljaka.
                                        Precizno iscrtavanje i imitiranje
                                        folikula dlake može se primjenjivati na
                                        svim mjestima.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/*<div className="tiles-item reveal-from-bottom">
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div className="features-tiles-item-image mb-16">
                                        <Image
                                            src={require("./../../assets/images/feature-tile-icon-04.svg")}
                                            alt="Features tile icon 04"
                                            width={200}
                                            height={200}
                                        />
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">
                                        Robust Workflow
                                    </h4>
                                    <p className="m-0 text-sm">
                                        Duis aute irure dolor in reprehenderit
                                        in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat.
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
                                        <Image
                                            src={require("./../../assets/images/feature-tile-icon-05.svg")}
                                            alt="Features tile icon 05"
                                            width={200}
                                            height={200}
                                        />
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">
                                        Robust Workflow
                                    </h4>
                                    <p className="m-0 text-sm">
                                        Duis aute irure dolor in reprehenderit
                                        in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat.
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
                                        <Image
                                            src={require("./../../assets/images/feature-tile-icon-06.svg")}
                                            alt="Features tile icon 06"
                                            width={200}
                                            height={200}
                                        />
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">
                                        Robust Workflow
                                    </h4>
                                    <p className="m-0 text-sm">
                                        Duis aute irure dolor in reprehenderit
                                        in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat.
                                    </p>
                                </div>
                            </div>
                        </div>*/}
                    </div>
                </div>
            </div>
        </section>
    );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
