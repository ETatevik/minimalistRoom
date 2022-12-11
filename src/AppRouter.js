import React from 'react';
import {Route, Routes} from "react-router-dom";
import {MENU} from "./constants";

function AppRouter() {
    return (
        <main className="main_wrapper">
            <div className="container">
                <Routes>
                    {
                        MENU.map(({id, title, path, element}) =>
                            <Route key={`${id}_${title}`} path={path} element={element}/>)
                    }
                </Routes>
            </div>
        </main>
    );
}

export default AppRouter;