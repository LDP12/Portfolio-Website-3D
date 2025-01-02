import {
  cs,
  python,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  dotnetLogo,
  react,
  js,
  gitLogo,
  cssLogo,
  htmlLogo,
  mysqlLogo,
  webstormLogo,
  riderLogo,
  githubLogo,
  github,
  webstorm,
  rider,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  mhft,
  sketcher,
  pantel,
  CompileVortex,
  redpanda,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "C#", icon: cs },
  { title: "Python", icon: python },
  { title: ".NET Core", icon: dotnetLogo },
  { title: "ReactJS", icon: react },
  { title: "JavaScript", icon: js },
  { title: "CSS", icon: cssLogo },
  { title: "HTML", icon: htmlLogo },
  { title: "MySQL", icon: mysqlLogo },
  { title: "Rider", icon: riderLogo },
  { title: "Webstorm", icon: webstormLogo },
  { title: "Git", icon: gitLogo },
  { title: "GitHub", icon: githubLogo }
];

export const technologies = [
  { name: "C#", icon: cs },
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Rider", icon: rider },
  { name: "Webstorm", icon: webstorm },
  { name: "Git", icon: git },
  { name: "GitHub", icon: github }
];

export const experiences = [
  {
    title: "Artificial Intelligence Intern",
    company_name: "Edunet Foundation | IBM SkillsBuild",
    icon: edunet,
    iconBg: "#161329",
    date: "Jan 2022 - Dec 2022",
    points: [
      "Engineered a comprehensive Mental Health Fitness Tracker ML model utilizing Python.",
      "Maximized the model's performance by refining model parameters and employing ensemble methods.",
      "Leveraged 12 regression algorithms to attain precise outcomes in analyzing and predicting mental fitness levels across 150+ countries.",
    ],
  },
  {
    title: "AI/Back-End Engineer",
    company_name: "RedPanda Software | redAcademy",
    icon: redpanda,
    iconBg: "#161329",
    date: "Jan 2023 - Dec 2023",
    points: [
      "Acquired hands-on knowledge of Azure Cloud Foundation, delving into cloud infrastructure, services, and deployment.",
      "I also gained a solid foundation in Back-End Engineering, utilising technologies such as algorithms, data analysis, " +
      ".NET Core, C#, React.js, JavaScript, CSS, HTML, Jira, Azure DevOps & Git.",
      "I was able to develop & maintain a variety of projects, most being full-stack applications that were based in .NET, " +
      "C# & React.js. However, I was largely involved in the back-end (.NET & C#) side of the development team.",
      "These projects included the Central Maintenance System (VAT, Interest Rates etc.) for the Lewis Furniture Group & " +
      "sales applications for companies such as Pick 'n Pay."
    ],
  },

  {
    title: "Software Engineer",
    company_name: "Pantel Elektronik AG | IT Department",
    icon: pantel,
    iconBg: "#161329",
    date: "Jan 2024 - Current",
    points: [
      "Employed as a full-time Software Engineer, developing and maintaining a variety of applications and services. ",
      "The work my team does is to make the daily life of the employees easier at company, as well as the efficiency " +
      "of the production factories in Romania. We do this through building, maintaining & improving applications & " +
      "software across the company.",
      "Our Team is made up of four Engineers (myself included) & we utilise technologies such as C#, WPF, YouTrack, " +
      "TeamCity DevOps & Git. Our major focus is functionality " +
      "and efficiency within our applications & software & so .NET Core & C# form the basis of our development.",
      "The company is based in Germany, with their factories being in Romania. I am currently working remotely from South Africa."
    ],
  }
];

export const projects = [
  {
    name: "WeatherPedia",
    description:
      "Web-based platform that allows users to access weather information for their location by entering it in the search field",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "bootstrap 5.3.0", color: "pink-text-gradient" },
      { name: "Weather API by API Ninjas", color: "yellow-text-gradient" }
    ],
    image: weatherpedia
  },
  {
    name: "Terminal Like Portfolio Website",
    description:
      "A terminal themed portfolio website that allows users to type into the terminal and use commands like a real terminal.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" }
    ],
    image: termpw
  },
  {
    name: "Mental Health Fitness Tracker",
    description:
      "ML model that utilizes regression techniques to provide insights into mental health and make predictions based on the available data.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Jupyter Notebook", color: "green-text-gradient" },
      { name: "Regression Algorithms", color: "pink-text-gradient" }
    ],
    image: mhft
  },
  {
    name: "PayloadMaster",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "shell", color: "blue-text-gradient" }
    ],
    image: payloadmaster
  },
  {
    name: "CompileVortex",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" }
    ],
    image: CompileVortex
  },
  {
    name: "Sketcher",
    description:
      "Convert an input image to a pencil sketch using OpenCV and Matplotlib libraries.",
    tags: [
      { name: "OpenCV", color: "blue-text-gradient" },
      { name: "Python", color: "pink-text-gradient" }
    ],

    image: sketcher
  },
];
