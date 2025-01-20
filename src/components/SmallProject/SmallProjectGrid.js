import React from "react";
import styled from "styled-components";
import SmallProject from "./SmallProject";
import colors from "../../colors.json";

const ContentContainer = styled.div`
  background: ${colors.backgroundSecondary};
  padding: 64px 12px;
  width: 100%;
`;

const ProjectsContainer = styled.div`
  /* border: 1px solid yellow; */
  max-width: 1200px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const SectionHeader = styled.h1`
  text-align: center;
  font-size: 2.9rem;
  margin: 0;
  padding: 0.1em 0.2rem 0.55em;

  @media screen and (min-width: 650px) {
    font-size: 3.5rem;
    margin: 0;
    padding: 0 0 3rem;
  }
`;

// todo: support for icons in title
// todo: image alt text, hover for 2nd image, and positioning
// todo?: note which project were for UT austin?
export default function SmallProjectsGrid() {
  return (
    <ContentContainer>
      <SectionHeader>recent work</SectionHeader>
      <ProjectsContainer>
        <SmallProject
          title={"Demystifying Gig Work"}
          image={"/projects/gigwork/hero.png"}
          alt="Demystifying Gig Work landing page"
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
          // detailText="Built for the HAI Lab at UT Austin"
        />

        <SmallProject
          title={"HAI Lab Site"}
          image={"/projects/labsite/publications.png"}
          alt="HAI Lab site publications page"
          blurb={
            "The primary site for the Human-AI Interaction Lab's website at UT Austin. I built a CMS for this application and made improvements to various pages on the site."
          }
          site={"https://hai.ischool.utexas.edu/"}
          technologies={[
            "Typescript",
            "Next.js",
            "React",
            "Payload",
            "Tailwind",
          ]}
          // detailText="Built for the HAI Lab at UT Austin"
        />

        <SmallProject
          title={"Contextual Metadata"}
          image={"/projects/cm/tmp.png"}
          alt="Contextual Metadata student view"
          blurb={
            "Classroom tool for teaching students how to research and analyze data."
          }
          technologies={[
            "Typescript",
            "Next.js",
            "Material UI",
            "socket.io",
            "Redis",
            "Django",
            "Docker",
          ]}
          detailText="Currently a work in progress"
        />

        <SmallProject
          title={"Playerbase"}
          image={"/projects/rd2l-01.png"}
          alt="Ongoing auction on Playerbase"
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
          image={"/projects/umami-meats-0.png"}
          alt="Umami Meats homepage"
          blurb={
            "E-commerce site that sells a small variety of high-quality steak and sushi."
          }
          github={"https://github.com/dexters-lab-fsa-2208/umami-meats"}
          technologies={["Node.js", "Next.js", "React", "Redux", "PostgreSQL"]}
          // detailText="Built while studying at Fullstack Academy"
        />

        <SmallProject
          title={"Book Beasts"}
          image={"/projects/book-beasts-1.png"}
          alt="Book Beasts student dashboard"
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
          // detailText="Built while studying at Fullstack Academy"
        />

        <SmallProject
          title={"Tusk"}
          image={"/projects/tusk-01.png"}
          alt="Tusk hero selection table"
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
          image={"/projects/solar-sandbox-1b.jpg"}
          alt="Solar Sandbox custom 3D solar system"
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
          // detailText="Built while studying at Fullstack Academy"
        />
      </ProjectsContainer>
    </ContentContainer>
  );
}
