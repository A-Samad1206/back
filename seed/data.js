const data = {
  intro: {
    aboutMe:
      "a full stack web developer focused on crafting great web experiences. Designing and Coding have been my passion since the days I started working with computers but I found myself into web design/development since 2019. I enjoy creating user-engaging ,user-friendly , intuitive and functional websites.",
    resumeLink: "xyzxyzxyzxyz",
    myPic: "/images/imsamad.jpeg",
    _id: "61acd7d4e800c53367f8760b",
    myInfo: {
      name: "Abdus Samad",
      phoneNo: "+91+9870645161",
      whatsapp: "+91+9870645161",
      github: "github.com/imsamad",
      website: "imsamad.com",
      email: "imsamad00@gmail.com",
      linkedIn: "linkedin.com/in/imsamad/",
      twitter: "twitter.com/imsamad06",
    },
  },
  myInfo: {
    name: "Abdus Samad",
    phoneNo: "+91+9870645161",
    whatsapp: "+91+9870645161",
    github: "github.com/imsamad",
    website: "imsamad.com",
    email: "imsamad00@gmail.com",
    linkedIn: "linkedin.com/in/imsamad/",
    twitter: "twitter.com/imsamad06",
  },
  skills: {
    subtitle: "Why choose me",
    title: "My skills",
    message: "",
    list: [
      {
        name: "Frontend",
        list: [
          {
            name: "React.js/Next.js",
            percentage: 90,
            _id: "61acd7dde800c53367f87617",
          },
          { name: "HTML/CSS", percentage: 90, _id: "61acd7dde800c53367f87618" },
          { name: "Next.js", percentage: 90, _id: "61acd7dde800c53367f87619" },
        ],
        _id: "61acd7dde800c53367f87616",
      },
      {
        name: "Backend",
        list: [
          {
            name: "Node/Express",
            percentage: 80,
            _id: "61acd7dde800c53367f8761b",
          },
          { name: "Firebase", percentage: 80, _id: "61acd7dde800c53367f8761c" },
          {
            name: "CMS(strapi)",
            percentage: 90,
            _id: "61acd7dde800c53367f8761d",
          },
        ],
        _id: "61acd7dde800c53367f8761a",
      },
      {
        name: "Database",
        list: [
          { name: "MongoDB", percentage: 90, _id: "61acd7dde800c53367f8761f" },
          { name: "Firebase", percentage: 80, _id: "61acd7dde800c53367f87620" },
          { name: "MySQL", percentage: 80, _id: "61acd7dde800c53367f87621" },
        ],
        _id: "61acd7dde800c53367f8761e",
      },
    ],
  },
  services: {
    subtitle: "What I Offer",
    title: "My Services",
    message:
      "These are the services I provide is of high quality and above all full of experience in this field.",
    list: [
      {
        name: "Full-stack Web Hosting",
        description:
          "This service I provide is of high qualit and above all full of experience in this field.",
        _id: "61acd7dce800c53367f8760f",
      },
      {
        name: "Full-stack E-commerce Development",
        description:
          "This service I provide is of high qualit and above all full of experience in this field.",
        _id: "61acd7dce800c53367f87610",
      },
      {
        name: "API Development",
        description:
          "This service I provide is of high qualit and above all full of experience in this field.",
        _id: "61acd7dce800c53367f87611",
      },
      {
        name: "Frontend Development",
        description:
          "This service I provide is of high qualit and above all full of experience in this field.",
        _id: "61acd7dce800c53367f87612",
      },
      {
        name: "Full-Stack Development",
        description:
          "This service I provide is of high qualit and above all full of experience in this field.",
        _id: "61acd7dce800c53367f87613",
      },
    ],
  },
  projects: {
    subtitle: "My Portfolio",
    title: "My Projects",
    message:
      "Here's a selection of some recent work. I've done these projects to sharpen my skills. For more up to the minute work, you can visit me on",
    list: [
      {
        name: "e-Cart Web App",
        image: "/images/work/ecart.png",
        description:
          "Demo E-commerce web app using MENN(Mongo + Express + Next.js + Node.js)",
        links: [
          {
            label: "View",
            link: "https://procart-git-main-imsamad.vercel.app",
            _id: "61acd7dde800c53367f87625",
          },
          {
            label: "Github",
            link: "https://github.com/imsamad/ecart",
            _id: "61acd7dde800c53367f87626",
          },
        ],
        _id: "61acd7dde800c53367f87624",
      },
    ],
  },

  contact: {
    subtitle: "Contact Me",
    title: "Get In Touch",
    message:
      "If you have a project that you want to get started, think you need my help with something or just fancy saying hey, then get in touch.",
  },
  copyright: {
    headingOne:
      "I m Abdus Samad and this is my personal website , consult me here.",
    headingTwo: `All right reserved by Abdus Samad - ${new Date().getFullYear()}`,
  },
};
module.exports = data;
