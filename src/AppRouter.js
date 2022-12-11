import React from 'react';
import {Route, Routes} from "react-router-dom";
import {MENU} from "./constants";

function AppRouter() {
    return (
        <>
            <Routes>
                {
                    MENU.map(({id, title, path, element}) =>
                        <Route key={`${id}_${title}`} path={path} element={element}/>)
                }
            </Routes>
        </>
    );
}

export default AppRouter;