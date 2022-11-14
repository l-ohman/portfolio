import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Error } from ".";

export default function ProjectView() {
  const projectSlug = useParams().id;
  const project = useSelector((state) => state.projects[projectSlug]);

  if (!project) return <Error is404={true} />;
  return <div>Project View</div>;
}
