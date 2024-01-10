import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaSass,
  FaPython,
  FaNodeJs,
  FaDocker,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import {
  TbBrandTypescript,
  TbBrandJavascript,
  TbBrandCpp,
  TbBrandRedux,
  TbBrandBootstrap,
} from "react-icons/tb";
import { BiLogoJquery, BiLogoPostgresql } from "react-icons/bi";
import {
  SiPug,
  SiExpress,
  SiPostman,
  SiGnubash,
  SiNextdotjs,
  SiSwift,
  SiKotlin,
  SiSqlite,
  SiVisualstudio,
} from "react-icons/si";
import { AiFillCode } from "react-icons/ai";
import { FaHashnode } from "react-icons/fa6";
import {
  BsGlobe,
  BsCodeSlash,
  BsRobot,
  BsFileBarGraph,
  BsGit,
  BsMarkdown,
  BsFillPhoneVibrateFill,
} from "react-icons/bs";
import { GiArchiveResearch, GiArtificialIntelligence } from "react-icons/gi";
import { FcElectronics } from "react-icons/fc";

export const links = [
  { text: "Home", path: "/" },
  { text: "About", path: "/about" },
  { text: "Skills", path: "/skills" },
  { text: "Projects", path: "/projects" },
  { text: "Experience", path: "/experience" },
  // { text: "Blogs", path: "/blogs" },
  { text: "Contact", path: "/contact" },
  { text: "Resume", path: "/resume" },
];

export const interestsData = [
  {
    interest: "Software Engineering",
    icon: BsCodeSlash,
  },
  {
    interest: "Tech Blog",
    icon: FaHashnode,
  },
  // {
  //   interest: "Internet of Things",
  //   icon: FcElectronics,
  // },
  // {
  //   interest: "Market Research",
  //   icon: GiArchiveResearch,
  // },
  {
    interest: "Visualization",
    icon: BsFileBarGraph,
  },
  {
    interest: "Software Development",
    icon: AiFillCode,
  },
  {
    interest: "Robotics",
    icon: BsRobot,
  },
  {
    interest: "Web Scraping",
    icon: BsGlobe,
  },
  {
    interest: "App Development",
    icon: BsFillPhoneVibrateFill,
  },
];

export const skillsData = [
  {
    name: "HTML5",
    icon: FaHtml5,
  },
  {
    name: "CSS3",
    icon: FaCss3,
  },
  {
    name: "Javascript",
    icon: TbBrandJavascript,
  },
  {
    name: "Jquery",
    icon: BiLogoJquery,
  },
  {
    name: "Typescript",
    icon: TbBrandTypescript,
  },
  {
    name: "SASS",
    icon: FaSass,
  },
  {
    name: "Swift",
    icon: SiSwift,
  },
  {
    name: "Bootstrap",
    icon: TbBrandBootstrap,
  },
  {
    name: "C/C++",
    icon: TbBrandCpp,
  },
  {
    name: "Python",
    icon: FaPython,
  },
  {
    name: "ReactJS",
    icon: FaReact,
  },
  {
    name: "NextJS",
    icon: SiNextdotjs,
  },
  // {
  //   name: "Redux",
  //   icon: TbBrandRedux,
  // },
  {
    name: "NodeJs",
    icon: FaNodeJs,
  },
  // {
  //   name: "PugJs",
  //   icon: SiPug,
  // },
  {
    name: "Express",
    icon: SiExpress,
  },
  {
    name: "Docker",
    icon: FaDocker,
  },
  // {
  //   name: "Postgres",
  //   icon: BiLogoPostgresql,
  // },
  // {
  //   name: "Postman",
  //   icon: SiPostman,
  // },
  {
    name: "Git",
    icon: BsGit,
  },
  {
    name: "Github",
    icon: FaGithub,
  },
  {
    name: "Kotlin",
    icon: SiKotlin,
  },
  {
    name: "ChatGPT",
    icon: GiArtificialIntelligence,
  },
  {
    name: "Bash",
    icon: SiGnubash,
  },
  {
    name: "SQlite",
    icon: SiSqlite,
  },
  // {
  //   name: "Markdown",
  //   icon: BsMarkdown,
  // },
  {
    name: "VS Code",
    icon: SiVisualstudio,
  },
];

export const workData = [
  {
    company: "Oakland University - Student Congress",
    designation: "Director of Software and Technology",
    duration: "June 2023 - Present",
    companyImg: "OUSCLogo.png",
    description: (
      <>
        <ul>
          <li>
            Responsible for overseeing and spearheading the implementation of
            university-wide IT projects aimed at enhancing the technology
            infrastructure and services available to all students campus-wide.
          </li>
          <li>
            Developed and launched a comprehensive website for the student
            congress, serving as the primary online platform for departmental
            information, resources, and announcements.
          </li>
          <li>
            Currently spearheading the development of an innovative Android
            application aimed at recyclable item recognition through real-time
            image analysis via smartphone camera technology.
          </li>
          <li>
            Contributed 5K+ lines of code to a developing codebase via Git
          </li>
          <li>
            Systematically manage the scheduling and setup of virtual conference
            meetings on a regular basis for the department, ensuring seamless
            communication and collaboration among team members and external
            stakeholders.
          </li>
        </ul>
      </>
    ),
  },
  {
    company: "Comau LLC",
    designation: "IT Infrastrcture Intern",
    duration: "July 2023 - Sept. 2023",
    companyImg: "ComauLLC.jpeg",
    description: (
      <>
        <ul>
          <li>
            Contributed to network infrastructure configuration and maintenance,
            enhancing reliability, and provided end-user support for hardware
            and software issues, ensuring improved IT system performance and
            user satisfaction.
          </li>
          <li>
            Assisted in server maintenance tasks, including software updates,
            patches, and hardware upgrades.
          </li>
          <li>
            Participated in virtualization projects, such as setting up and
            managing virtual machines using VMware and Hyper-V.
          </li>
        </ul>
      </>
    ),
  },
  {
    company: "Oakland University",
    designation: "Lead Student Network Engineer",
    duration: "Dec. 2022 - July 2023",
    companyImg: "OU.jpeg",
    description: (
      <>
        <ul>
          <li>
            Use Unix, Mac, Windows software, and CISCO IOS systems to complete
            day-to-day tasks.
          </li>
          <li>
            Perform 2nd tier network and telephone help-desk tickets,
            troubleshooting issues, activating data ports, performing switch
            configuration, monitoring network performance using network
            diagnostic tools.
          </li>
          <li>
            Resolve network issues and participate in other network technology
            projects as assigned by University Staff.
          </li>
        </ul>
      </>
    ),
  },
];

export const projectsData = [
  {
    type: "WEB-APP",
    title: "Movie Magnet",
    image: "movie-magnet",
    link: "https://movie-magnet-smoky.vercel.app/",
    source: "https://github.com/vaheedsk36/movie-magnet",
  },
  {
    type: "WEB-APP",
    title: "Portfolio Website",
    image: "portfolio-website",
    link: null,
    source: "https://github.com/vaheedsk36/portfolio-website-nextjs",
  },
  {
    type: "WEB-APP",
    title: "Weather App",
    image: "weather-app",
    link: "https://vaheedsk36.github.io/weather-app/",
    source: "https://github.com/vaheedsk36/weather-app",
  },
  {
    type: "WEB-APP",
    title: "Landing Page",
    image: "landing-page",
    link: "https://vaheedsk36.github.io/demo-frontend-bootcamp",
    source: "https://github.com/vaheedsk36/demo-frontend-bootcamp",
  },
  {
    type: "WEB-APP",
    title: "Guess Game",
    image: "guess-game",
    link: "https://vaheedsk36.github.io/guess-my-number",
    source: "https://github.com/vaheedsk36/guess-my-number",
  },
  {
    type: "WEB-APP",
    title: "Notes App",
    image: "react-notes-app",
    link: "https://vaheedsk36.github.io/react-notes-app/",
    source: "https://github.com/vaheedsk36/react-notes-app",
  },
  {
    type: "WEB-APP",
    title: "Dice Multiplayer",
    image: "dice-multiplayer",
    link: "https://vaheedsk36.github.io/dice-multiplayer",
    source: "https://github.com/vaheedsk36/dice-multiplayer",
  },
  {
    type: "PROJECT",
    title: "Snake Game",
    image: "snake-game",
    link: "https://vaheedsk36.github.io/Snake-game",
    source: "",
  },
  {
    type: "PROJECT",
    title: "Delta Assistant",
    image: "delta-assistant",
    link: "",
    source: "https://github.com/vaheedsk36/Delta-Desktop-Virtual-Assistant",
  },
  {
    type: "WEB-APP",
    title: "Text Utility App",
    image: "text-utility-app",
    link: "https://vaheedsk36.github.io/text-utility-app/",
    source: "https://github.com/vaheedsk36/text-utility-app",
  },
];

export const socialMediaLinks = [
  {
    href: "https://github.com/muhammadn9",
    icon: FaGithub,
    backgroundColor: "gray.700",
    hoverColor: "gray.600",
  },
  // {
  //   href: "https://www.instagram.com/codersk36/",
  //   icon: FaInstagram,
  //   backgroundColor: "social.instagram",
  //   hoverColor: "social.instagramHover",
  // },
  {
    href: "https://www.linkedin.com/in/muhammad-naseem-14b035218/",
    icon: FaLinkedin,
    backgroundColor: "social.linkedin",
    hoverColor: "social.linkedinHover",
  },
  // {
  //   href: "https://twitter.com/codersk36",
  //   icon: FaTwitter,
  //   backgroundColor: "social.twitter",
  //   hoverColor: "social.twitterHover",
  // },
  // {
  //   href: "https://codersk36.hashnode.dev/",
  //   icon: FaHashnode,
  //   backgroundColor: "social.hashnode",
  //   hoverColor: "social.hashnodeHover",
  // },
];

export const query = `
query Publication($after: String) {
  publication(host: "codersk36.hashnode.dev") {
    posts(first: 20, after: $after) {
      totalDocuments
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          title
          brief
          slug
          publishedAt
          coverImage {
            url
          }
        }
      }
    }
  }
}

`;
