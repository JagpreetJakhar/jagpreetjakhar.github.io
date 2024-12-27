const about = {
  title: "Hi 👋 , I am Jagpreet",
  description:
   "I am a skilled Software Engineer specializing in Computer Vision, with a focus on object detection, tracking, and motion planning.\
    I hold a Master's degree with distinction in Cybersecurity and Artificial Intelligence from the University of Sheffield, England.",
  github: "https://github.com/JagpreetJakhar",
  linkedin: "https://www.linkedin.com/in/jagpreetjakhar/",
  cv: "/resume.pdf",
};

const projects = {
  title: "Projects",
  personalProjects: [
    {
      title: "Football Analysis -- Coming Soon",
      short:
        "Using YOLOv11 and ByteTrack",
      description:
        "Analysing FA Cup Final 2023-24 using Object Detection, Tracking and \
         Generating Statistics like Possession,Passing, and range of passes",
      technologies: ["Python", "PyTorch","OpenCV"],
      github: "https://github.com/JagpreetJakhar/football_analytics",
      demo: "#",
    },
    {
      title: "Neural ODEs for Domain Wall Analysis",
      short:
        "Neural ODEs",
      description:
        "The study focuses on three distinct physical systems: the double pendulum, the Lorenz attractor, and the magnetic \
 domain wall problem. ",
      technologies: ["Python", "PyTorch", "PySpark"],
      github: "https://github.com/JagpreetJakhar/Dissertation",
      demo: "#",
    },
    {
      title: "Coming Soon",
      short:
        "",
      description:
        "",
      technologies: [],
      github: "",
      demo: "#",
    },    
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
        "Python",
        "PySpark",
        "PyTorch",
        "JavaScript",
        "TypeScript",
        "React.js",
        "Next.js",
        "Node.js",
        "Flask",
        "Django"
      ],
    },
    {
      title: "Others",
      skills: ["mlflow", "OpenCV","AWS","Airflow","Kafka","Docker","Terraform","PostgreSQL", "SQLite"],
    },
  ],
};

export { about, projects, experience, skills };
