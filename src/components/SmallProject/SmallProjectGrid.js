import React from "react";
import styled from "styled-components";
import SmallProject from "./SmallProject";

const ProjectsContainer = styled.div`
  /* border: 1px solid yellow; */
  max-width: 1200px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
`;

// todo: support for icons in title
// todo: image alt text, hover for 2nd image, and positioning
// todo?: note which project were for UT austin?
export default function SmallProjectsGrid() {
  return (
    <ProjectsContainer>
      <SmallProject
        title={"Demystifying Gig Work"}
        image1={"/projects/gigwork/hero.png"}
        image2={"/projects/gigwork/overview.png"}
        blurb={
          "Informational site to demystify technologies used to manage digital gig workers. Includes complex data tools for estimating driver earnings and expenses."
        }
        site={"https://gig-work-new-iteration-66296e5a690a.herokuapp.com/"}
        technologies={[
          "Typescript",
          "Next.js",
          "Material UI",
          "Leaflet.js",
          "Playwright",
        ]}
      />

      <SmallProject
        title={"HAI Lab Site"}
        image1={"/projects/labsite/publications.png"}
        image2={"/projects/labsite/landing.png"}
        blurb={
          "Built a CMS for the Human-AI Interaction Lab's website at UT Austin and made improvements to various pages on the site."
        }
        site={"https://hai.ischool.utexas.edu/"}
        technologies={["Typescript", "Next.js", "React", "Payload", "Tailwind"]}
      />

      <SmallProject
        title={"Contextual Metadata"}
        image1={"/projects/cm/tmp.png"}
        image2={"/projects/cm/questions-tmp.gif"}
        blurb={
          "Classroom tool for teaching students how to research and analyze data. (Currently a work in progress.)"
        }
        site={"https://playerbase.fun/"}
        github={null}
        technologies={[
          "Typescript",
          "Next.js",
          "Material UI",
          "socket.io",
          "Redis",
          "Django",
          "Docker",
        ]}
      />

      <SmallProject
        title={"Playerbase"}
        image1={"/projects/rd2l-01.png"}
        image2={"/projects/rd2l-01.png"}
        blurb={
          "Web application for running live auctions for amateur e-sports leagues directly in the browser."
        }
        site={"https://playerbase.fun/"}
        github={null}
        technologies={[
          "Typescript",
          "Next.js",
          "Material UI",
          "socket.io",
          "Redis",
          "Django",
          "Docker",
        ]}
      />

      <SmallProject
        title={"Umami Meats"}
        image1={"/projects/umami-meats-0.png"}
        image2={"/projects/umami-meats-1.png"}
        blurb={
          "E-commerce site that sells a small variety of high-quality steak and sushi."
        }
        github={"https://github.com/dexters-lab-fsa-2208/umami-meats"}
        technologies={["Node.js", "Next.js", "React", "Redux", "PostgreSQL"]}
      />

      <SmallProject
        title={"Book Beasts"}
        image1={"/projects/book-beasts-1.png"}
        image2={"/projects/book-beasts-2.png"}
        blurb={
          "An educational and interactive experience in which children can create their own storybooks and their parents can manage their works."
        }
        github={"https://github.com/fsa-2208-mspiggy/Book-Beasts"}
        technologies={[
          "Node.js",
          "Express",
          "PostgreSQL",
          "React",
          "Redux",
          "Mocha",
        ]}
      />

      <SmallProject
        title={"Tusk"}
        image1={"/projects/tusk-01.png"}
        image2={"/projects/tusk-03.png"}
        blurb={
          "Tool for evaluating unique and complex hero matchups in Dota 2."
        }
        site={"https://l-ohman.github.io/tusk-d2/"}
        github={"https://github.com/l-ohman/tusk-d2"}
        technologies={[
          "Node.js",
          "React",
          "Redux",
          "Express",
          "PostgreSQL",
          "GraphQL",
        ]}
      />

      <SmallProject
        title={"Solar Sandbox"}
        image1={"/projects/solar-sandbox-1b.jpg"}
        image2={"/projects/solar-sandbox-1a.jpg"}
        blurb={
          "A fun, interactive site where users can design their own solar system from scratch."
        }
        site={"https://solar-sandbox.vercel.app/"}
        github={"https://github.com/l-ohman/solar-sandbox"}
        technologies={[
          "React",
          "React Flow",
          "Three.js",
          "React Three Fiber",
          "Zustand",
        ]}
      />
    </ProjectsContainer>
  );
}
