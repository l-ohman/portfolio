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
// todo?: note which project were for UT austin?
// todo: extract this data to a static file instead of writing it directly in react
export default function SmallProjectsGrid() {
  return (
    <ContentContainer>
      <SectionHeader>recent work</SectionHeader>
      <ProjectsContainer>
        <SmallProject
          title={"Demystifying Gig Work"}
          image={"/projects/gigwork/hero.png"}
          alt="Demystifying Gig Work landing page"
          altImage="/projects/gigwork/breakdown.png"
          altImageAltText="Gig work breakdown"
          altImageObjectPosition="0% 30%"
          blurb={
            "Informational site to demystify technologies used to manage digital gig workers. Includes complex data tools for estimating driver earnings and expenses."
          }
          site={"https://demystifying-gigwork.com/"}
          technologies={[
            "Typescript",
            "Next.js",
            "Material UI",
            "Leaflet.js",
            "Playwright",
          ]}
          imageObjectPosition="50% 35%"
          // detailText="Built for the HAI Lab at UT Austin"
        />

        <SmallProject
          title={"Contextual Metadata"}
          image={"/projects/cm/initial-reflection.png"}
          alt="Student reflection form"
          altImage="/projects/cm/answer-update.png"
          altImageAltText="Student answer modal"
          blurb={
            "Classroom tool for teaching students how to research and analyze data. Includes several question sets and forms in which students iterate on their answers multiple times as they progress through the learning material."
          }
          technologies={[
            "Typescript",
            "Next.js",
            "React",
            "Tailwind",
            "Prisma",
          ]}
          detailText="Built for the HAI Lab at UT Austin"
          imageObjectPosition="0% 0%"
          altImageObjectPosition="65% 50%"
        />

        <SmallProject
          title={"HAI Lab Site"}
          image="/projects/labsite/publications.png"
          alt="HAI Lab site publications page"
          altImage="/projects/labsite/admin.png"
          altImageAltText="HAI Lab site admin view"
          altImageObjectPosition="0% 0%"
          blurb={
            "Made several contributions to the UT Austin Human-AI Interaction Lab website, ranging from the integration of a headless CMS to various UX improvements."
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
          title={"Playerbase"}
          image={"/projects/playerbase/history-tab.png"}
          alt="Ongoing auction on Playerbase"
          altImage="/projects/playerbase/gunnar-stream.png"
          altImageAltText="Pro Dota 2 player 'Gunnar' livestreams his perspective in the auction"
          altImageObjectPosition="0% 0%"
          blurb={
            "Web application that runs live auctions for amateur e-sports leagues directly in the browser."
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
          imageObjectPosition="20% 0%"
        />

        <SmallProject
          title={"Umami Meats"}
          image={"/projects/umami/home.png"}
          alt="Umami Meats homepage"
          altImage="/projects/umami/cart.png"
          altImageAltText="Umami Meats cart"
          altImageObjectPosition="0% 0%"
          blurb={
            "E-commerce site that sells a small variety of high-quality steak and sushi."
          }
          github={"https://github.com/dexters-lab-fsa-2208/umami-meats"}
          technologies={["Node.js", "Next.js", "React", "Redux", "PostgreSQL"]}
          // detailText="Built while studying at Fullstack Academy"
          imageObjectPosition="10% 0%"
        />

        <SmallProject
          title={"Book Beasts"}
          image={"/projects/bb/editor-view.png"}
          alt="Book Beasts student dashboard"
          altImage="/projects/bb/my-books.png"
          altImageAltText="'My Books' view"
          altImageObjectPosition="0% 0%"
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
            // "Mocha",
          ]}
          // detailText="Built while studying at Fullstack Academy"
          imageObjectPosition="0% 35%"
        />

        <SmallProject
          title={"Tusk"}
          image={"/projects/tusk/home.png"}
          alt="Tusk hero selection table"
          altImage="/projects/tusk/breakdown.png"
          altImageAltText="Tusk matchup breakdown"
          altImageObjectPosition="0% 0%"
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
          image={"/projects/solar/3d-view.jpg"}
          alt="Solar Sandbox custom 3D solar system"
          altImage="/projects/solar/node-graph.jpg"
          altImageAltText="Solar Sandbox node graph editor"
          altImageObjectPosition="50% 0%"
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
