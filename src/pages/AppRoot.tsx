import {Outlet} from "react-router-dom";
import React from "react";

export default function AppRoot() {
    return (
        <div>
            <div>App Root</div>
            <Outlet />
        </div>
    )
}