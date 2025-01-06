import React, { useRef, useEffect } from "react";
import { useLocation, Switch } from "react-router-dom";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";
import ReactGA from "react-ga";

// Layouts
import LayoutDefault from "./layouts/LayoutDefault";

// Views
import Home from "./views/Home";
import Tretmani from "./views/Tretmani";
import Zakazivanje from "./views/Zakazivanje";
import PrijePoslije from "./views/PrijePoslije";
import ONama from "./views/ONama";
import Edukacija from "./views/Edukacija";
import Blog from "./views/Blog";

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = (page) => {
    ReactGA.set({ page });
    ReactGA.pageview(page);
};

const App = () => {
    const childRef = useRef();
    let location = useLocation();

    useEffect(() => {
        document.title = 'Sarajevo Mikropigmentacija';
        const page = location.pathname;
        document.body.classList.add("is-loaded");
        childRef.current.init();
        trackPage(page);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    return (
        <ScrollReveal
            ref={childRef}
            children={() => (
                <Switch>
                    <AppRoute
                        exact
                        path="/"
                        component={Home}
                        layout={LayoutDefault}
                    />
                    <AppRoute
                        exact
                        path="/tretmani/"
                        component={Tretmani}
                        layout={LayoutDefault}
                    />
                    <AppRoute
                        exact
                        path="/zakazivanje/"
                        component={Zakazivanje}
                        layout={LayoutDefault}
                    />
                    <AppRoute
                        exact
                        path="/prije-i-poslije/"
                        component={PrijePoslije}
                        layout={LayoutDefault}
                    />
                    <AppRoute
                        exact
                        path="/blog/"
                        component={Blog}
                        layout={LayoutDefault}
                    />
                    <AppRoute
                        exact
                        path="/o-nama/"
                        component={ONama}
                        layout={LayoutDefault}
                    />
                    <AppRoute
                        exact
                        path="/edukacija/"
                        component={Edukacija}
                        layout={LayoutDefault}
                    />
                </Switch>
            )}
        />
    );
};

export default App;
