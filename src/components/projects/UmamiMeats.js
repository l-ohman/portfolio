import React from "react";
import images from "../../images";
import ProjectContainer from "../ProjectContainer";

export default function UmamiMeats() {
  return (
    <ProjectContainer
      title="Umami Meats"
      images={[{ src: images.umamiMeats.main, alt: "Umami Meats homepage" }]}
      technologies={["Node.js", "Next.js", "React", "Redux", "PostgreSQL"]}
      dateStart="September 2022"
      githubLink="https://github.com/dexters-lab-fsa-2208/umami-meats"
    >
      <p>
        Umami Meats is an ecommerce site that sells a small variety of
        high-quality steak and sushi. This project was built in roughly 10 days
        for the 'Grace Shopper' project at Fullstack Academy.
      </p>
    </ProjectContainer>
  );
}
