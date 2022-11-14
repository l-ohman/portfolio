import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainPage, ProjectView } from "./components";

export default function Router() {
    return(
        <Routes>
            <Route index path="/" element={<MainPage />} />
            <Route path="projects/:id" element={<ProjectView />}/>
        </Routes>
    )
}
