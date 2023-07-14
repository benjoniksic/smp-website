import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";

const propTypes = {
    ...SectionTilesProps.types,
};

const defaultProps = {
    ...SectionTilesProps.defaults,
};

const Testimonial = ({
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
        "testimonial section",
        topOuterDivider && "has-top-divider",
        bottomOuterDivider && "has-bottom-divider",
        hasBgColor && "has-bg-color",
        invertColor && "invert-color",
        className
    );

    const innerClasses = classNames(
        "testimonial-inner section-inner",
        topDivider && "has-top-divider",
        bottomDivider && "has-bottom-divider"
    );

    const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

    const sectionHeader = {
        title: "Preporuke klijenata",
        paragraph:
            "Donosimo vam iskustva naših zadovoljnih klijenata koji su prošli SMP tretman i njihove preporuke za Vas.",
    };

    return (
        <section {...props} className={outerClasses}>
            <div className="container">
                <div className={innerClasses}>
                    <SectionHeader
                        data={sectionHeader}
                        className="center-content"
                    />
                    <div className={tilesClasses}>
                        <div
                            className="tiles-item reveal-from-right"
                            data-reveal-delay="200"
                        >
                            <div className="tiles-item-inner">
                                <div className="testimonial-item-content">
                                    <p className="text-sm mb-0">
                                        — Nakon nekoliko dana što je prošlo od
                                        zadnjeg tretmana, SMP je ostavio
                                        vrhunski utisak. Prirodan, i toliko je
                                        realan da i mene zavara ponekad, hvala
                                        Vam jos jednom na svemu!
                                    </p>
                                </div>
                                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                                    <span className="testimonial-item-name text-color-high">
                                        Ime
                                    </span>
                                    <span className="text-color-low"> / </span>
                                    <span className="testimonial-item-link">
                                        <a href="tretmani">
                                            Mikropigmentacija skalpa
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="tiles-item reveal-from-bottom">
                            <div className="tiles-item-inner">
                                <div className="testimonial-item-content">
                                    <p className="text-sm mb-0">
                                        — Najbolje od svega je što se ne
                                        primjeti razlika između kose i boje
                                        pigmenta. Također moram dodati da ni
                                        roditelji ne primjećuju da sam išta
                                        radio jer tretman ostavlja utisak
                                        stvarne kose.
                                    </p>
                                </div>
                                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                                    <span className="testimonial-item-name text-color-high">
                                        Senad
                                    </span>
                                    <span className="text-color-low"> / </span>
                                    <span className="testimonial-item-link">
                                        <a href="tretmani">
                                            Mikropigmentacija skalpa
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div
                            className="tiles-item reveal-from-left"
                            data-reveal-delay="200"
                        >
                            <div className="tiles-item-inner">
                                <div className="testimonial-item-content">
                                    <p className="text-sm mb-0">
                                        — Prezadovoljan sam finalnim izgledom,
                                        naročito mi je drago što je rezultat već
                                        tu nakon prvog SMP tretmana. Definitivna
                                        preporuka za našu Aidu!
                                    </p>
                                </div>
                                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                                    <span className="testimonial-item-name text-color-high">
                                        Dalibor
                                    </span>
                                    <span className="text-color-low"> / </span>
                                    <span className="testimonial-item-link">
                                        <a href="tretmani">
                                            Mikropigmentacija skalpa
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
