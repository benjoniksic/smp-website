import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const LayoutDefault = ({ children }) => (
    <>
        <Header navPosition="right" className="reveal-from-bottom" />
        <main className="site-content">{children}</main>
        {/*<Banner />*/}
        <Footer />
    </>
);

export default LayoutDefault;
