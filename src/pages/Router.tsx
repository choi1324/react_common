import React from "react";
import { useRoutes } from "react-router-dom";
import Root from "@/pages/Root"
import Common from "@/pages/Common";

const PAGE_ROUTES = {
    ROOT: '/',
    COMMON: '/common',
}

function Router () {
    const {ROOT, COMMON} = PAGE_ROUTES;

    return useRoutes([
        {path: ROOT, element: <Root/>},
        {path: COMMON, element: <Common/>},
    ])
}

export default Router;