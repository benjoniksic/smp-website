import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
    ...SectionSplitProps.types,
};

const defaultProps = {
    ...SectionSplitProps.defaults,
};

const Contacts = ({
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

    return (
        <section {...props} className={outerClasses}>
            <div className="container">
                <div className={innerClasses}>
                    <SectionHeader
                        data={{
                            title: "Zakažite Vaš termin danas",
                            paragraph:
                                "Vaš tretman i proces mikropigmentacije započinjete zakazivanjem besplatnih konsultacija. Dolaskom na konsultacije se ne obavezujete na tretman, međutim za konsultacije, kao i za sam tretman, obavezno je zakazivanje.",
                        }}
                        className={classNames(
                            "center-content",
                            "contentwithoutMargin"
                        )}
                    />
                    <SectionHeader
                        data={{
                            paragraph:
                                "Naše master osoblje će Vas pregledati, porazgovarati sa Vama o svemu što vas interesuje o samom tretmanu i predložiti adekvatan tretman za najbolje rješenje Vašeg problema. Ukoliko želite, imaćete mogućnost da vidite kako izgleda tretman mikropigmentacije kose kroz slike naših prijašnjih klijenata i uvjerite se u njegove efekte.",
                        }}
                        className={classNames(
                            "center-content",
                            "contentWithoutMargin"
                        )}
                    />
                    <div className={splitClasses}>
                        <div className="split-item">
                            <div
                                className="split-item-content center-content-mobile reveal-from-left"
                                data-reveal-container=".split-item"
                            >
                                <div className="text-xxs text-color-secondary fw-600 tt-u mb-8">
                                    Kontakt telefon i socijalne mreže
                                </div>
                                <p className="m-0">
                                    <b>Telefon:</b> 061/700-877 (Viber, WhatsApp) <br />
                                    <b>Instagram:</b> smp.sarajevo_ <br />
                                    <b>Facebook:</b> SMP Sarajevo Mikro
                                    Pigmentacija <br />
                                    <b>Adresa:</b> Džemala Bijedića 279G <br />
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
                                    src={require("./../../assets/images/DSC_0391.JPG")}
                                    alt="Features split 01"
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

Contacts.propTypes = propTypes;
Contacts.defaultProps = defaultProps;

export default Contacts;
