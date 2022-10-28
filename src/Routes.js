import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";

export default function Router() {
    return(
        <Routes>
            <Route index path="/" element={<Home />} />
        </Routes>
    )
}
