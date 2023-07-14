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

    return (
        <section {...props} className={outerClasses}>
            <div className="container">
                <div className={innerClasses}>
                    <SectionHeader
                        data={{
                            title: "Tretmani skalp mikropigmentacije",
                            paragraph:
                                "Mikropigmentacija skalpa je modificirani oblik tetoviranja koji uključuje taloženje malih pigmentnih implantata ispod gornjeg i donjeg sloja kože. Idealan je za muškarce i žene koji žele vratiti samopouzdanje uz prirodan izgled folikula dlake, bez obzira na stupanj gubitka kose. Ovaj prirodni postupak koji zahtijeva malo održavanja može vam pomoći poboljšati izgled kose i podići Vaše samopouzdanje. Koriste se prirodni pigmenti prilagođeni nijansi koja odgovara vašoj prirodnoj boji kose i tonu kože. Ovaj svestrani tretman može promijeniti život muškarcima i ženama koji se bore s gubitkom kose.",
                        }}
                        className="center-content"
                    />
                    <div className={splitClasses}>
                        <div className="split-item has-top-divider">
                            <div
                                className="split-item-content center-content-mobile reveal-from-left"
                                data-reveal-container=".split-item"
                            >
                                <div className="text-xxs text-color-secondary fw-600 tt-u mb-8">
                                    Mikropigmentacija usljed
                                </div>
                                <h3 className="mt-0 mb-12">
                                    Opadanja kose kod muškaraca
                                </h3>
                                <p className="m-0">
                                    Ljudi mogu doživjeti gubitak kose na
                                    različite načine. Oni koji dožive mušku
                                    ćelavost obično svjedoče opadanju linije
                                    kose nakon čega slijedi gubitak kose na
                                    tjemenu. Ovo stanje ruši samopouzdanje ljudi
                                    i čini ih previše svjesnima svog fizičkog
                                    izgleda. Zahvaljujući mikropigmentaciji
                                    skalpa, ne morate se oslanjati na
                                    presađivanje kose, laserske kapice ili druge
                                    invazivne postupke za liječenje muške
                                    ćelavosti.
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

                        <div className="split-item">
                            <div
                                className="split-item-content center-content-mobile reveal-from-left"
                                data-reveal-container=".split-item"
                            >
                                <p className="m-0">
                                    Ovo je idealan nekirurški način za stvaranje
                                    definirane linije kose i uživanje u
                                    prirodnom, obrijanom izgledu kose. Umjetnici
                                    mikropigmentacije skalpa stvaraju
                                    individualni plan tretmana za svakog
                                    klijenta, uzimajući u obzir činjenicu da
                                    svatko ima drugačiji oblik kose. Korištena
                                    mješavina pigmenata također je jedinstvena
                                    za svakoga. Još jedna sjajna stvar kod ovog
                                    neinvazivnog tretmana je to što se možete
                                    vratiti na posao i nastaviti sa svojim
                                    svakodnevnim aktivnostima.
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

                        <div className="split-item has-top-divider">
                            <div
                                className="split-item-content center-content-mobile reveal-from-right"
                                data-reveal-container=".split-item"
                            >
                                <div className="text-xxs text-color-secondary fw-600 tt-u mb-8">
                                    Mikropigmentacija usljed
                                </div>
                                <h3 className="mt-0 mb-12">
                                    Transplatacije kose
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
                                    src={require("./../../assets/images/DSC_0342.JPG")}
                                    alt="Features split 02"
                                    width={528}
                                    height={396}
                                />
                            </div>
                        </div>

                        <div className="split-item has-top-divider">
                            <div
                                className="split-item-content center-content-mobile reveal-from-left"
                                data-reveal-container=".split-item"
                            >
                                <div className="text-xxs text-color-secondary fw-600 tt-u mb-8">
                                    Mikropigmentacija usljed
                                </div>
                                <h3 className="mt-0 mb-12">
                                    Opadanja kose na pečate
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
                                    src={require("./../../assets/images/cover.jpg")}
                                    alt="Features split 03"
                                    width={528}
                                    height={396}
                                />
                            </div>
                        </div>

                        <div className="split-item has-top-divider">
                            <div
                                className="split-item-content center-content-mobile reveal-from-left"
                                data-reveal-container=".split-item"
                            >
                                <div className="text-xxs text-color-secondary fw-600 tt-u mb-8">
                                    Mikropigmentacija kao
                                </div>
                                <h3 className="mt-0 mb-12">
                                    Pokrivanje ožiljaka
                                </h3>
                                <p className="m-0">
                                    Ovo je jedan od najčešćih tretmana
                                    mikropigmentacije vlasišta jer mnogi su
                                    ljudi zabrinuti zbog ugroženog izgleda kose
                                    usljed ožiljaka na glavi. Ti ožiljci mogu biti
                                    posljedica bilo kakve životne nezgode usljed
                                    koje čovjek može ostati bez određenog dijela
                                    kose. Štoviše, preostala kosa može izgledati
                                    izuzetno tanka i neujednačena, zbog čega se
                                    muškarci osjećaju posramljeno i pretjerano
                                    samosvjesno.
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
                                    src={require("./../../assets/images/cover.jpg")}
                                    alt="Features split 03"
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
                                <p className="m-0">
                                    Mikropigmentacija vlasišta služi kao
                                    učinkovit postupak za prikrivanje ovih
                                    ožiljaka kako bi se osigurao dobro uklopljen
                                    izgled kose. Pigmenti se ugrađuju u područje
                                    ožiljka i stapaju s okolnom dlakom. Ovom
                                    metodom možete očekivati ​​60-80%
                                    prikrivanja ožiljka. Rezultati ovise o
                                    teksturi i agresivnosti ožiljka. Što je vaš
                                    ožiljak uzdignutiji i istaknutiji, to je
                                    vjerojatnije da ćete morati duže držati kosu
                                    za učinkovito kamufliranje. Budite uvjereni
                                    da mikropigmentacija vlasišta ne zahtijeva
                                    visoku toleranciju na bol. Postupak je više
                                    neugodan nego bolan.
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
                                    src={require("./../../assets/images/cover.jpg")}
                                    alt="Features split 03"
                                    width={528}
                                    height={396}
                                />
                            </div>
                        </div>

                        <div className="split-item has-top-divider">
                            <div
                                className="split-item-content center-content-mobile reveal-from-left"
                                data-reveal-container=".split-item"
                            >
                                <div className="text-xxs text-color-secondary fw-600 tt-u mb-8">
                                    Mikropigmentacija kao
                                </div>
                                <h3 className="mt-0 mb-12">
                                    Korekcija nestručnog tretmana
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
                                    src={require("./../../assets/images/cover.jpg")}
                                    alt="Features split 03"
                                    width={528}
                                    height={396}
                                />
                            </div>
                        </div>

                        <div className="split-item has-top-divider">
                            <div
                                className="split-item-content center-content-mobile reveal-from-left"
                                data-reveal-container=".split-item"
                            >
                                <div className="text-xxs text-color-secondary fw-600 tt-u mb-8">
                                    Mikropigmentacija usljed
                                </div>
                                <h3 className="mt-0 mb-12">
                                    Proređene kose kod žena
                                </h3>
                                <p className="m-0">
                                    Dok ljudi obično gubitak kose povezuju s
                                    muškarcima, stanjivanje kose čest je problem
                                    s kojim se suočavaju žene svih dobnih
                                    skupina. Međutim, za razliku od muškaraca,
                                    žene ne doživljavaju gubitak kose zbog
                                    genetskih razloga. Općenito, krive su
                                    fiziološke promjene i bolesti. Neki od
                                    razloga zašto se žene bore s gubitkom i
                                    stanjivanjem kose su alopecija, liječenje
                                    raka, menopauza, stres, hormonske
                                    fluktuacije nakon trudnoće, hipotireoza...
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
                                    src={require("./../../assets/images/cover.jpg")}
                                    alt="Features split 03"
                                    width={528}
                                    height={396}
                                />
                            </div>
                        </div>
                        <div className="split-item has-bottom-divider">
                            <div
                                className="split-item-content center-content-mobile reveal-from-left"
                                data-reveal-container=".split-item"
                            >
                                <p className="m-0">
                                    Srećom, mikropigmentacija vlasišta omogućuje
                                    ženama da vrate izgled gušće, punije kose u
                                    samo nekoliko sesija. Vaš umjetnik će
                                    razgovarati o vašim potrebama, ciljevima i
                                    očekivanjima kako bi odredio odgovarajući
                                    postupak liječenja za vas. Također se
                                    usredotočuju na razmjere gubitka kose dok
                                    smišljaju savršen plan liječenja.
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
                                    src={require("./../../assets/images/cover.jpg")}
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
