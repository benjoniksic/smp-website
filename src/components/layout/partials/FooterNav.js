import React, { useEffect } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

const FooterNav = ({ className, ...props }) => {
    const classes = classNames("footer-nav", className);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToTop();
    }, [])

    return (
        <nav {...props} className={classes}>
            <ul className="list-reset">
                <li>
                    <Link to="zakazivanje" onClick={scrollToTop}>Kontakt</Link>
                </li>
                <li>
                    <Link to="o-nama" onClick={scrollToTop}>O nama</Link>
                </li>
                <li>
                    <Link to="#0">FAQ</Link>
                </li>
                {/*<li>
                    <Link to="#0">Podrška</Link>
                </li>*/}
            </ul>
        </nav>
    );
};

export default FooterNav;
