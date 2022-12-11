import {translations} from "../utils/config";
import Home from "../components/Home";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import OurTeams from "../components/OurTeams";

export const MENU = [
    {
        id: 0,
        title: translations.HOME,
        element: <Home/>,
        path: "/"
    },
    {
        id: 1,
        title: translations.ABOUT_US,
        element: <AboutUs/>,
        path: "/aboutUs"
    },
    {
        id: 2,
        title: translations.SERVICES,
        element: <Services/>,
        path: "/services"
    },
    {
        id: 3,
        title: translations.OUT_TEAMS,
        element: <OurTeams/>,
        path: "/ourTeams"
    }
];

export const menuActiveClassName = "navitem_active";

export const MODE_TYPE = {
    DARK: "dark",
    LIGHT: "light"
}