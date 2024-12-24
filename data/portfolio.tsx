const about = {
  title: "Hi 👋 , I am Jagpreet Jakhar",
  description:
    "I'm a Software Engineer with experience in creating and implementing front and back-end web applications,\
   with an interest Machine Learning  in Non-Linear Dynamical Systems and Computer Vision.\
  I have a Master's degree with distinction in Cybersecurity and Artificial Intelligence from the University of Sheffield, England",
  github: "https://github.com/JagpreetJakhar",
  linkedin: "https://www.linkedin.com/in/jagpreetjakhar/",
  cv: "/resume.pdf",
};

const projects = {
  title: "Projects",
  personalProjects: [
    {
      title: "Neural ODEs for Domain Wall Analysis",
      short:
        "Features Firebase authentication, video upload, and video streaming.",
      description:
        "The study focuses on three distinct physical systems: the double pendulum, the Lorenz attractor, and the magnetic \
 domain wall problem. ",
      technologies: ["#Python", "#PyTorch", "#PySpark", "#HPC"],
      github: "https://github.com/JagpreetJakhar/Dissertation",
      demo: "#",
    }
  ],
};

const experience = {
  title: "Experience",
  experiences: [
    {
      title: "Graduate Teaching Assistant- Big Data Analytics",
      company: "University of Sheffield",
      duration: "Jan 2024-Aug 2024",
      description:
        "Provided hands-on support for students working with AWS SageMaker, Athena, and Databricks to perform data \
 analytics queries and implement data mining algorithms at scale. ",
    },
    {
      title: " Graduate Teaching Assistant- Database Design",
      company: "University of Sheffield",
      duration: " Jan 2024-Jul 2024",
      description:
        "Guided students through the process of designing and implementing relational databases,common challenges related \
 to large and heterogeneous datasets, such as transactional and geo-spatial data.",
    },
    {
      title: "Graduate Teaching Assistant- Data Modelling and Storage",
      company: "University of Sheffield",
      duration: "Sep 2023-Jan 2024",
      description:
        "Supported teaching by preparing presentations on topics such as Database Normalisation, providing technical \
 assistance to students during sessions on SQLite and Python integration, and addressing any questions. ",
    },
    {
      title: "Software Engineer",
      company: "Swig Solutions",
      duration: "2015-2019",
      description:
        "Developed and deployed responsive, user-centric dynamic web applications using HTML, CSS, and JavaScript and \
 React ",
    },
  ],
};

const skills = {
  title: "Skills",
  mySkills: [
    {
      title: "Languages & Frameworks",
      skills: [
        "#Python",
        "#PySpark",
        "#JavaScript",
        "#TypeScript",
        "#React.js",
        "#Next.js",
        "#Node.js",
        "#Express.js",
      ],
    },
    {
      title: "Databases",
      skills: ["#PostgreSQL", "#SQLite"],
    },
    {
      title: "Others",
      skills: ["#PyTorch", "#OpenCV","#AWS", "#TailwindCSS"],
    },
  ],
};

export { about, projects, experience, skills };
