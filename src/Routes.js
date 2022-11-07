import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Contact, AllProjects, ProjectView } from "./components";

export default function Router() {
    return(
        <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="contact" element={<Contact />}/>
            <Route path="projects" element={<AllProjects />}/>
            <Route path="project/:id" element={<ProjectView />}/>
        </Routes>
    )
}
