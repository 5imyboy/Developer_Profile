/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const projectsData = [
  {
    id: 1,
    name: "Chinese Chess",
    description: "Board game recreation",
    date: "2021-01-07",
    demoLink: "https://github.com/5imyboy/Chinese_Chess",
  },
  {
    id: 2,
    name: "Three Body PDF Translator",
    description: "PDF Translator",
    date: "2024-09-30",
    demoLink: "https://github.com/5imyboy/3body_translate",
  },
  {
    id: 3,
    name: "FitStack Workout App",
    description: "Exercise Tracker",
    date: "2025-07-25",
    demoLink: "https://github.com/5imyboy/workout-tracker-fitstack",
  }
];

export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://www.github.com/5imyboy",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/simon-yong",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/Resume_Simon_Yong.pdf",
    icon: "resume",
    newTab: true,
  },
];


