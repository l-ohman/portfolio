import bookBeasts1 from "./screenshots/book-beasts-1.png";
import bookBeasts2 from "./screenshots/book-beasts-2.png";
import bookBeastsIcon from "./icons/book-beasts-favicon.png";

import umamiMeats0 from "./screenshots/umami-meats-0.png";
import umamiMeats1 from "./screenshots/umami-meats-1.png";
import umamiMeatsIcon from "./icons/umami-meats-favicon.ico";

import solarSandbox1a from "./screenshots/solar-sandbox-1a.jpg";
import solarSandbox1b from "./screenshots/solar-sandbox-1b.jpg";

// should just grab all of these images from https://github.com/l-ohman/l-ohman/tree/main/icons
import Nodejs from "./techLogos/Node.js.png";
import PostgreSQL from "./techLogos/PostgreSQL.png";
import Express from "./techLogos/Express.png";
import Reactjs from "./techLogos/React.js.png";
import Nextjs from "./techLogos/Next.js.png";
import Redux from "./techLogos/Redux.png";
import HTML from "./techLogos/HTML.png";
import CSS from "./techLogos/CSS.png";
import Javascript from "./techLogos/Javascript.png";
import Python from "./techLogos/Python.png";

import headshot from "./headshot.jpg";

export default {
  1: {
    icon: bookBeastsIcon,
    main: bookBeasts1,
    secondary: bookBeasts2,
  },
  2: {
    icon: umamiMeatsIcon,
    main: umamiMeats0,
    secondary: umamiMeats1,
  },
  3: {
    main: solarSandbox1a,
    secondary: solarSandbox1b,
  },
  skills: {
    "Node.js": Nodejs,
    PostgreSQL,
    Express,
    React: Reactjs,
    "Next.js": Nextjs,
    Redux,
    HTML,
    CSS,
    Javascript,
    Python,
    Sequelize: "https://raw.githubusercontent.com/l-ohman/l-ohman/main/icons/Sequelize.png",
    Mocha: "https://raw.githubusercontent.com/l-ohman/l-ohman/main/icons/Mocha.png",
    Chai: "https://raw.githubusercontent.com/l-ohman/l-ohman/main/icons/Chai.png",
    "Less CSS": "https://raw.githubusercontent.com/l-ohman/l-ohman/main/icons/Less.png",
    "Three.js": "https://raw.githubusercontent.com/l-ohman/l-ohman/main/icons/Three.png"
  },
  headshot,
};
